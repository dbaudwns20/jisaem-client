import {
  Class as ProtoClass,
  ClassParticipant as ProtoClassParticipant
} from "@/protos/class/class_message_pb"
import { ClassLabel as ProtoClassLabel } from "@/protos/label/label_message_pb"
import { bindClassParticipantListToProto, ClassParticipant} from "@/models/class/class.participant"
import { bindClassLabelListToProto, ClassLabel } from "@/models/label/class.label"
import { bindClassManagerListToProto } from "@/models/class/class.manager"
import { Model } from "@/models/model"

import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'

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
  classParticipantList?: ClassParticipant[] | null

  constructor(data: ProtoClass) {
    super()
    this.id = data.getId()
    this.createdAt = data.getCreatedAt()!.toDate() as Date
    this.updatedAt = data.getUpdatedAt()!.toDate() as Date
    this.name = data.getName()
    this.description = data.getDescription()
    this.startDate = data.getStartDate()!.toDate() as Date
    this.endDate = data.getEndDate()!.toDate() as Date
    this.closed = data.getClosedAt() != null
    this.publicExposed = data.getPublicExposedAt() != null
    this.classLabelList = super.setList(ClassLabel, data.getClassLabelsList() as ProtoClassLabel[])
    this.managerList = super.setList(ClassParticipant, data.getManagersList() as ProtoClassParticipant[])
    this.classParticipantList = super.setList(ClassParticipant, data.getParticipantsList() as ProtoClassParticipant[])
  }
}

export function bindClassToProto(classData: Class): ProtoClass {
  const protoClass: ProtoClass = new ProtoClass()
  protoClass.setName(classData.name)
  protoClass.setDescription(classData.description)
  protoClass.setStartDate(new Timestamp.fromDate(classData.startDate))
  protoClass.setEndDate(new Timestamp.fromDate(classData.endDate))
  protoClass.setClassLabelsList(bindClassLabelListToProto(classData.classLabelList!))
  protoClass.setParticipantsList(bindClassParticipantListToProto(classData.classParticipantList!))
  protoClass.setManagersList(bindClassManagerListToProto(classData.managerList!))
  return protoClass
}

export function bindClassInstance(data: any): Class {
  return {
    name: data.name,
    description: data.description,
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
    managerList: data.managerList,
    classLabelList: data.classLabelList,
    classParticipantList: data.classParticipantList,
  } as Class
}
