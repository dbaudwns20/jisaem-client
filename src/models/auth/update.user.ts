import { RequestProfileUpdate } from "@/protos/auth/auth_communication_pb"
import utils from "@/utils/utils"

/**
 * 사용자 수정 Interface
 */
export interface UpdateUser {
  name?: string
  phone?: string
  email?: string
  userLabelUid?: string
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
    userLabelUid: data?.userLabelUid
  }
}

/**
 * 권한별 수정할 수 있는 필드 키 가져오기
 */
function getUpdateUserKeys(): string[] {
  let keys: string[] = []
  if (utils.authority.isManager())
    keys = ['name', 'phone', 'email', 'userLabelUid']
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
  request.setUserLabelUid(updateUser.userLabelUid!)
  return request
}

export { bindUpdateUser, getUpdateUserKeys, getRequestProfileUpdate }