import { StudentInfo as ProtoStudentInfo } from "@/protos/auth/auth_message_pb"

/**
 * 학생정보 Class
 */
export class StudentInfo {
  school: string
  description: string
  parentUsername: string

  constructor(data: ProtoStudentInfo) {
    this.school = data.getSchool()
    this.description = data.getDescription()
    this.parentUsername = data.getParentUsername()
  }
}
