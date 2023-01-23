import {Level} from "@/protos/auth/auth_message_pb"
import {Label as ProtoLabel} from "@/protos/label/label_message_pb"
import {ClassParticipant as ProtoClassParticipant} from "@/protos/class/class_message_pb"

import {Label} from "@/models/label/label"
import {Model} from "@/models/model"

/**
 * 수업 참여자 Class
 */
export class ClassParticipant extends Model {
  userUid: string
  authLevel: Level
  name: string
  userLabel?: Label

  constructor(data: ProtoClassParticipant) {
    super()
    this.userUid = data.getUserUid()
    this.authLevel = data.getAuthLevel()
    this.name = data.getName()
    this.userLabel = super.set(Label, data.getUserLabel() as ProtoLabel)
  }
}
