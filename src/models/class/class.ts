import {
  Class as ProtoClass,
  ClassParticipant as ProtoClassParticipant
} from "@/protos/class/class_message_pb"
import {Label as ProtoLabel} from "@/protos/label/label_message_pb"

import {Label} from "@/models/label/label"
import {ClassParticipant} from "@/models/class/classParticipant"
import {Model} from "@/models/model"

/**
 * 수업 Class
 */
export class Class extends Model {
  uid: string
  createdAt: Date
  updatedAt: Date
  teachersList: ClassParticipant[]
  name: string
  description: string
  classLabel?: Label | null
  startDate: Date
  endDate: Date
  closed: boolean
  publicExposed: boolean
  classParticipantsList: ClassParticipant[]

  constructor(data: ProtoClass) {
    super()
    this.uid = data.getUid()
    this.createdAt = data.getCreatedAt()
    this.updatedAt = data.getUpdatedAt()
    this.teachersList = super.setList(ClassParticipant, data.getTeachersList() as ProtoClassParticipant[])
    this.name = data.getName()
    this.description = data.getDescription()
    this.classLabel = super.set(Label, data.getClassLabel() as ProtoLabel)
    this.startDate = data.getStartDate()
    this.endDate = data.getEndDate()
    this.closed = data.getClosedAt() != null
    this.publicExposed = data.getPublicExposedAt() != null
    this.classParticipantsList = super.setList(ClassParticipant, data.getClassParticipantsList() as ProtoClassParticipant[])
  }
}
