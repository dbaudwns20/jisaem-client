import { RequestProfileUpdate } from "@/protos/auth/auth_communication_pb"
import { RequestUserUpdate } from "@/protos/user/user_communication_pb"
import { StudentInfo } from "@/models/user/student.info"
import { ParentInfo } from "@/models/user/parent.info"

import utils from "@/utils/utils"
import _ from 'lodash'

/**
 * 사용자 수정 Interface
 */
export interface UpdateUser {
  username?: string
  name?: string
  phone?: string
  email?: string
  userLabelId?: string,
  studentInfo?: StudentInfo,
  parentInfo?: ParentInfo
}

/**
 * 데이터를 UpdateUser 로 바인드
 * @param data
 */
export function bindUpdateUser(data: any): UpdateUser {
  return {
    username: data?.username,
    name: data?.name,
    phone: data?.phone,
    email: data?.email,
    studentInfo: data?.studentInfo,
    parentInfo: data?.parentInfo,
    userLabelId: _.isEmpty(data?.userLabel) ? '' : data?.userLabel.id
  }
}

/**
 * 권한별 수정할 수 있는 필드 키 가져오기
 */
export function getUpdateUserKeys(): string[] {
  let keys: string[] = []
  if (utils.authority.isManager() || utils.authority.isTeacher() || utils.authority.isSuper())
    keys = ['username', 'name', 'phone', 'email', 'userLabelId', 'studentInfo']
  else if (utils.authority.isStudent())
    keys = ['phone', 'email']
  return keys
}

/**
 * UpdateUser 데이터를 RequestProfileUpdate 변환
 * @param updateUser
 */
export function getRequestProfileUpdate(updateUser: UpdateUser): RequestProfileUpdate {
  const request = new RequestProfileUpdate()
  request.setName(updateUser.name!)
  request.setPhone(updateUser.phone!)
  request.setEmail(updateUser.email!)
  return request
}

export function getRequestUserUpdate(id: string, updateUser: UpdateUser): RequestUserUpdate {
  const request = new RequestUserUpdate
  request.setId(id)
  request.setUsername(updateUser.username!)
  request.setEmail(updateUser.email!)
  request.setPhone(updateUser.phone!)
  request.setName(updateUser.name!)
  request.setStudentSchool(updateUser.studentInfo?.school!)
  request.setStudentDescription(updateUser.studentInfo?.description!)
  request.setParentUsername(updateUser.parentInfo?.username!)
  request.setParentPhone(updateUser.parentInfo?.phone!)
  return request
}
