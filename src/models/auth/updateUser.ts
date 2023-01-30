import { RequestProfileUpdate } from "@/protos/auth/auth_communication_pb"

export interface UpdateUser {
  name?: string
  phone?: string
  email?: string
  userLabelUid?: string
}

export const updateUserKeys: string[] = ['name', 'phone', 'email', 'userLabelUid']

function bindUpdateUser(form: any): UpdateUser {
  return {
    name: form?.name,
    phone: form?.phone,
    email: form?.email,
    userLabelUid: form?.userLabelUid
  }
}

function getRequestProfileUpdate(updateUser: UpdateUser): RequestProfileUpdate {
  const request = new RequestProfileUpdate()
  request.setName(updateUser.name!)
  request.setPhone(updateUser.phone!)
  request.setEmail(updateUser.email!)
  request.setUserLabelUid(updateUser.userLabelUid!)
  return request
}

export { bindUpdateUser, getRequestProfileUpdate }
