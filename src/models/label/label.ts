import {
  LabelType,
  Label as ProtoLabel
} from "@/protos/label/label_message_pb"
import { LabelTypeFromProto } from "@/models/enum/label.type"

/**
 * 레이블 Class
 */
export class Label {
  id: string
  createdAt: Date
  updatedAt: Date
  labelType: LabelType
  name: string
  description: string
  color: string

  constructor(data: ProtoLabel) {
    this.id = data.getId()
    this.createdAt = data.getCreatedAt()!.toDate() as Date
    this.updatedAt = data.getUpdatedAt()!.toDate() as Date
    this.labelType = LabelTypeFromProto(data.getLabelType())
    this.name = data.getName()
    this.description = data.getDescription()
    this.color = data.getColor()
  }
}

export function bindLabelToProto(label: Label): ProtoLabel {
  const protoLabel = new ProtoLabel()
  protoLabel.setColor(label.color)
  protoLabel.setName(label.name)
  protoLabel.setDescription(label.description)
  protoLabel.setLabelType(label.labelType)
  return protoLabel
}

export function bindLabelInstance(data: any): Label {
  return {
    labelType: data.labelType,
    name: data.name,
    color: data.color,
    description: data.description
  } as Label
}
