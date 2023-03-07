import {
  ClassLabel as ProtoClassLabel,
  Label as ProtoLabel
} from "@/protos/label/label_message_pb"
import { Label } from "@/models/label/label"
import { Model } from "@/models/model"

/**
 * 클래스 레이블 Class
 */
export class ClassLabel extends Model {
  classId: string
  labelInfo?: Label | any
  createdAt: Date

  constructor(data: ProtoClassLabel) {
    super()
    this.classId = data.getClassId()
    this.labelInfo = this.set(Label, data.getLabelInfo() as ProtoLabel)
    this.createdAt = data.getCreatedAt()
  }
}
