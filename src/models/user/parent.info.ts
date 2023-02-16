import { ParentInfo as ProtoParentInfo } from "@/protos/auth/auth_message_pb"

/**
 * 부모정보 Class
 */
export class ParentInfo {
  username: string
  password: string

  constructor(data: ProtoParentInfo) {
    this.username = data.getUsername()
    this.password = data.getPassword()
  }
}

export function bindParentInfoToProto(parentInfo: ParentInfo): ProtoParentInfo {
  const protoParentInfo: ProtoParentInfo = new ProtoParentInfo()
  protoParentInfo.setUsername(parentInfo.username)
  protoParentInfo.setPassword(parentInfo.password)
  return protoParentInfo
}
