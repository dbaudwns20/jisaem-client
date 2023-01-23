import {
  LabelType,
  Label as ProtoLabel
} from "@/protos/label/label_message_pb"

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
    this.createdAt = data.getCreatedAt()
    this.updatedAt = data.getUpdatedAt()
    this.labelType = data.getLabelType()
    this.name = data.getName()
    this.description = data.getDescription()
    this.color = data.getColor()
  }
}
