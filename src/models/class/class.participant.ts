import { Label as ProtoLabel } from "@/protos/label/label_message_pb"
import { ClassParticipant as ProtoClassParticipant } from "@/protos/class/class_message_pb"

import { Label } from "@/models/label/label"
import { Model } from "@/models/model"
import { AuthLevel, AuthLevelFromProto } from "@/models/enum/auth.level";

/**
 * 수업 참여자 Class
 */
export class ClassParticipant extends Model {
  userUid: string
  authLevel: AuthLevel
  name: string
  userLabel?: Label | null

  constructor(data: ProtoClassParticipant) {
    super()
    this.userUid = data.getUserUid()
    this.authLevel = AuthLevelFromProto(data.getAuthLevel())
    this.name = data.getName()
    this.userLabel = super.set(Label, data.getUserLabel() as ProtoLabel)
  }
}
