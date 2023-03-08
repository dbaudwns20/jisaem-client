import { ClassParticipant as ProtoClassParticipant } from "@/protos/class/class_message_pb"
import { AuthLevel, AuthLevelFromProto, AuthLevelToProto } from "@/models/auth/auth.level"

import _ from "lodash"

/**
 * 수업 참여자 Class
 */
export class ClassParticipant {
  userId: string
  authLevel: AuthLevel
  name: string

  constructor(data: ProtoClassParticipant) {
    this.userId = data.getUserId()
    this.authLevel = AuthLevelFromProto(data.getAuthLevel())
    this.name = data.getName()
  }
}

export function bindClassParticipant(classParticipant: ClassParticipant): ProtoClassParticipant {
  const protoClassParticipant: ProtoClassParticipant = new ProtoClassParticipant()
  protoClassParticipant.setUserId(classParticipant.userId)
  protoClassParticipant.setName(classParticipant.name)
  protoClassParticipant.setAuthLevel(AuthLevelToProto(classParticipant.authLevel))
  return protoClassParticipant
}

export function bindClassParticipantListToProto(classParticipantList: ClassParticipant[]): ProtoClassParticipant[] {
  const protoClassParticipantList: ProtoClassParticipant[] = []
  _.forEach(classParticipantList, it => {
    protoClassParticipantList.push(bindClassParticipant(it))
  })
  return protoClassParticipantList
}
