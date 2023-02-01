import {ClassParticipant as ProtoClassParticipant} from "@/protos/class/class_message_pb"
import {TestScore as ProtoTestScore} from "@/protos/test/test_message_pb"

import {ClassParticipant} from "@/models/class/class.participant"
import {Model} from "@/models/model"

/**
 * 시험 성적 Class
 */
export class TestScore extends Model {
  student: ClassParticipant | null
  rank: number
  score: number
  standardScore: number
  percentage: number
  participated: boolean

  constructor(data: ProtoTestScore) {
    super()
    this.student = super.set(ClassParticipant, data.getStudent() as ProtoClassParticipant)
    this.rank = data.getRank()
    this.score = data.getScore()
    this.standardScore = data.getStandardScore()
    this.percentage = data.getPercentage()
    this.participated = data.getParticipated()
  }

}
