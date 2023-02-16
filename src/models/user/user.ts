import {
  User as ProtoUser,
  StudentInfo as ProtoStudentInfo,
  ParentInfo as ProtoParentInfo
} from "@/protos/auth/auth_message_pb"
import { UserLabel as ProtoUserLabel } from "@/protos/label/label_message_pb"
import { bindStudentInfoToProto, StudentInfo } from "@/models/user/student.info"
import { bindParentInfoToProto, ParentInfo } from "@/models/user/parent.info"
import { bindUserLabelListToProto, UserLabel } from "@/models/label/user.label"
import { Model } from "@/models/model"
import { AuthLevel, AuthLevelFromProto } from "@/models/enum/auth.level"

/**
 * 사용자 Class
 */
export class User extends Model {
  id: string
  password: string
  createdAt: Date
  updatedAt: Date
  authLevel: AuthLevel
  username: string
  name: string
  phone: string
  email: string
  userLabelList?: UserLabel[] | null
  studentInfo?: StudentInfo | null
  parentInfo?: ParentInfo | null

  constructor(proto: ProtoUser) {
    super()
    this.id = proto.getId()
    this.password = proto.getPassword()
    this.createdAt = proto.getCreatedAt()!.toDate() as Date
    this.updatedAt = proto.getUpdatedAt()!.toDate() as Date
    this.authLevel = AuthLevelFromProto(proto.getAuthLevel())
    this.username = proto.getUsername()
    this.name = proto.getName()
    this.phone = proto.getPhone()
    this.email = proto.getEmail()
    this.userLabelList = super.setList(UserLabel, proto.getUserLabelsList() as ProtoUserLabel[])
    this.studentInfo = super.set(StudentInfo, proto.getStudentInfo() as ProtoStudentInfo)
    this.parentInfo = super.set(ParentInfo, proto.getParentInfo() as ProtoParentInfo)
  }
}

export function bindUserToProto(user: User): ProtoUser {
  const protoUser: ProtoUser = new ProtoUser()
  protoUser.setUsername(user.username)
  protoUser.setPassword(user.password)
  protoUser.setName(user.name)
  protoUser.setEmail(user.email)
  protoUser.setPhone(user.phone)
  protoUser.setUserLabelsList(bindUserLabelListToProto(user.userLabelList!))
  protoUser.setStudentInfo(bindStudentInfoToProto(user.studentInfo!))
  protoUser.setParentInfo(bindParentInfoToProto(user.parentInfo!))
  return protoUser
}
