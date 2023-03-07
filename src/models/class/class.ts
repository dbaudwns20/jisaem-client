import {
  Class as ProtoClass,
  ClassParticipant as ProtoClassParticipant
} from "@/protos/class/class_message_pb"
import { ClassLabel as ProtoClassLabel } from "@/protos/label/label_message_pb"
import { ClassParticipant } from "@/models/class/class.participant"
import { Model } from "@/models/model"
import { ClassLabel } from "@/models/label/class.label"

/**
 * 수업 Class
 */
export class Class extends Model {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  startDate?: Date
  endDate?: Date
  closed: boolean
  publicExposed: boolean
  managerList?: ClassParticipant[] | null
  classLabelList?: ClassLabel[] | null
  classParticipantsList?: ClassParticipant[] | null

  constructor(data: ProtoClass) {
    super()
    this.id = data.getId()
    this.createdAt = data.getCreatedAt()!.toDate() as Date
    this.updatedAt = data.getUpdatedAt()!.toDate() as Date
    this.managerList = super.setList(ClassParticipant, data.getManagersList() as ProtoClassParticipant[])
    this.name = data.getName()
    this.description = data.getDescription()
    this.classLabelList = super.setList(ClassLabel, data.getClassLabelsList() as ProtoClassLabel[])
    this.startDate = data.getStartDate()!.toDate() as Date
    this.endDate = data.getEndDate()!.toDate() as Date
    this.closed = data.getClosedAt() != null
    this.publicExposed = data.getPublicExposedAt() != null
    this.classParticipantsList = super.setList(ClassParticipant, data.getParticipantsList() as ProtoClassParticipant[])
  }
}
