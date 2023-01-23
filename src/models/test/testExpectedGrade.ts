import {TestExpectedGrade as ProtoTestExpectedGrade} from "@/protos/test/test_message_pb"

/**
 * 시험 예상 등급 Class
 */
export class TestExpectedGrade {
  standardScore: number
  grade: number

  constructor(data: ProtoTestExpectedGrade) {
    this.standardScore = data.getStandardScore()
    this.grade = data.getGrade()
  }
}
