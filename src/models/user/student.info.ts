import { StudentInfo as ProtoStudentInfo } from "@/protos/auth/auth_message_pb"
import _ from 'lodash'

/**
 * 학생정보 Class
 */
export class StudentInfo {
  school: string
  description: string

  constructor(data: ProtoStudentInfo) {
    this.school = data.getSchool()
    this.description = data.getDescription()
  }
}

export function bindStudentInfoToProto(studentInfo: StudentInfo): ProtoStudentInfo | undefined {
  if (_.isUndefined(studentInfo)) return undefined
  const protoStudentInfo: ProtoStudentInfo = new ProtoStudentInfo()
  protoStudentInfo.setSchool(studentInfo.school)
  protoStudentInfo.setDescription(studentInfo.description)
  return protoStudentInfo
}
