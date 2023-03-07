import { ClassParticipant as ProtoClassParticipant } from "@/protos/class/class_message_pb"
import { AuthLevel, AuthLevelFromProto } from "@/models/auth/auth.level"

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
