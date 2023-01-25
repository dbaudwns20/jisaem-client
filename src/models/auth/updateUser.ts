import {User} from "@/models/auth/user";
import {RequestProfileUpdate} from "@/protos/auth/auth_communication_pb";

export class UpdateUser {
  username?: string
  name?: string
  phone?: string
  email?: string
  userLabelUid?: string

  constructor(
    username?: string,
    name?: string,
    phone?: string,
    email?: string,
    userLabelUid?: string
  ) {
    // TODO 앱 전체적으로 관리하는 signInInfo.authLevel이 뭔지에 따라
    let isManager = true // authLevel.isManager(), 'src/models/enum/authLevel.ts'
    if (isManager) {
      this.username = username
      this.name = name
      this.userLabelUid = userLabelUid
    }
    this.phone = phone
    this.email = email
  }
  getRequestProfileUpdate(): RequestProfileUpdate {
    let req = new RequestProfileUpdate()
    // TODO set

    return req
  }
}