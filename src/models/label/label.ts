import {
  LabelType,
  Label as ProtoLabel
} from "@/protos/label/label_message_pb"
import { LabelTypeFromProto } from "@/models/enum/label.type"

/**
 * 레이블 Class
 */
export class Label {
  uid: string
  createdAt: Date
  updatedAt: Date
  labelType: LabelType
  name: string
  description: string
  color: string

  constructor(data: ProtoLabel) {
    this.uid = data.getUid()
    this.createdAt = data.getCreatedAt()!.toDate() as Date
    this.updatedAt = data.getUpdatedAt()!.toDate() as Date
    this.labelType = LabelTypeFromProto(data.getLabelType())
    this.name = data.getName()
    this.description = data.getDescription()
    this.color = data.getColor()
  }
}
