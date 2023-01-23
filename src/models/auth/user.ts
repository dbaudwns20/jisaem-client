import {
  Level,
  User as ProtoUser,
  StudentInfo as ProtoStudentInfo
} from "@/protos/auth/auth_message_pb"
import {Label as ProtoLabel} from "@/protos/label/label_message_pb"

import {Label} from "@/models/label/label"
import {StudentInfo} from "@/models/auth/studentInfo"
import {Model} from "@/models/model"

/**
 * 사용자 Class
 */
export class User extends Model {
  uid: string
  createdAt: Date
  updatedAt: Date
  authLevel: Level
  name: string
  phone: string
  email: string
  userLabel?: Label
  studentInfo?: StudentInfo

  constructor(data: ProtoUser) {
    super()
    this.uid = data.getUid()
    this.createdAt = data.getCreatedAt()
    this.updatedAt = data.getUpdatedAt()
    this.authLevel = data.getAuthLevel()
    this.name = data.getName()
    this.phone = data.getPhone()
    this.email = data.getEmail()
    this.userLabel = super.set(Label, data.getUserLabel() as ProtoLabel)
    this.studentInfo = super.set(StudentInfo, data.getStudentInfo() as ProtoStudentInfo)
  }
}
