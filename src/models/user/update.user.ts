import { RequestProfileUpdate } from "@/protos/auth/auth_communication_pb"
import { RequestUserUpdate } from "@/protos/user/user_communication_pb"
import { bindStudentInfoToProto, StudentInfo } from "@/models/user/student.info"
import utils from "@/utils/utils"

import _ from 'lodash'

/**
 * 사용자 수정 Interface
 */
export interface UpdateUser {
  name?: string
  phone?: string
  email?: string
  userLabelId?: string,
  studentInfo?: StudentInfo
}

/**
 * 데이터를 UpdateUser 로 바인드
 * @param data
 */
function bindUpdateUser(data: any): UpdateUser {
  return {
    name: data?.name,
    phone: data?.phone,
    email: data?.email,
    studentInfo: data?.studentInfo,
    userLabelId: _.isEmpty(data?.userLabel) ? '' : data?.userLabel.id
  }
}

/**
 * 권한별 수정할 수 있는 필드 키 가져오기
 */
function getUpdateUserKeys(): string[] {
  let keys: string[] = []
  if (utils.authority.isManager())
    keys = ['username', 'name', 'phone', 'email', 'userLabelId', 'studentInfo']
  else if (utils.authority.isStudent())
    keys = ['phone', 'email']
  return keys
}

/**
 * UpdateUser 데이터를 RequestProfileUpdate 변환
 * @param updateUser
 */
function getRequestProfileUpdate(updateUser: UpdateUser): RequestProfileUpdate {
  const request = new RequestProfileUpdate()
  request.setName(updateUser.name!)
  request.setPhone(updateUser.phone!)
  request.setEmail(updateUser.email!)
  return request
}

function getRequestUserUpdate(id: string, updateUser: UpdateUser): RequestUserUpdate {
  const request = new RequestUserUpdate
  request.setId(id)
  request.setEmail(updateUser.email!)
  request.setPhone(updateUser.phone!)
  request.setName(updateUser.name!)
  request.setStudentInfo(bindStudentInfoToProto(updateUser.studentInfo!))
  return request
}


export { bindUpdateUser, getUpdateUserKeys, getRequestProfileUpdate, getRequestUserUpdate }
