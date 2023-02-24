import { ParentInfo as ProtoParentInfo } from "@/protos/auth/auth_message_pb"
import _ from 'lodash'

/**
 * 부모정보 Class
 */
export class ParentInfo {
  username: string
  password: string
  phone: string

  constructor(data: ProtoParentInfo) {
    this.username = data.getUsername()
    this.password = data.getPassword()
    this.phone = data.getPhone()
  }
}

export function bindParentInfoToProto(parentInfo: ParentInfo): ProtoParentInfo | undefined {
  if (_.isUndefined(parentInfo)) return undefined
  const protoParentInfo: ProtoParentInfo = new ProtoParentInfo()
  protoParentInfo.setUsername(parentInfo.username)
  protoParentInfo.setPassword(parentInfo.password)
  protoParentInfo.setPhone(parentInfo.phone)
  return protoParentInfo
}
