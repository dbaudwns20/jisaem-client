import { ParentInfo as ProtoParentInfo } from "@/protos/auth/auth_message_pb"

/**
 * 부모정보 Class
 */
export class ParentInfo {
  username: string

  constructor(data: ProtoParentInfo) {
    this.username = data.getUsername()
  }
}
