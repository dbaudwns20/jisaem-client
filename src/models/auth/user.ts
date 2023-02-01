import {
  User as ProtoUser,
  StudentInfo as ProtoStudentInfo
} from "@/protos/auth/auth_message_pb"
import {Label as ProtoLabel} from "@/protos/label/label_message_pb"

import { Label } from "@/models/label/label"
import { StudentInfo } from "@/models/auth/student.info"
import { Model } from "@/models/model"
import { AuthLevel, AuthLevelFromProto } from "@/models/enum/auth.level"

/**
 * 사용자 Class
 */
export class User extends Model {
  uid: string
  createdAt: Date
  updatedAt: Date
  authLevel: AuthLevel
  username: string
  name: string
  phone: string
  email: string
  userLabel?: Label | null
  studentInfo?: StudentInfo | null

  constructor(proto: ProtoUser) {
    super()
    this.uid = proto.getUid()
    this.createdAt = proto.getCreatedAt()!.toDate() as Date
    this.updatedAt = proto.getUpdatedAt()!.toDate() as Date
    this.authLevel = AuthLevelFromProto(proto.getAuthLevel())
    this.username = proto.getUsername()
    this.name = proto.getName()
    this.phone = proto.getPhone()
    this.email = proto.getEmail()
    this.userLabel = super.set(Label, proto.getUserLabel() as ProtoLabel)
    this.studentInfo = super.set(StudentInfo, proto.getStudentInfo() as ProtoStudentInfo)
  }
}
