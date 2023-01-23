import {Label as ProtoLabel} from "@/protos/label/label_message_pb"
import {
  ExposeRankType,
  Test as ProtoTest,
  TestScore as ProtoTestScore,
  TestExpectedGrade as ProtoTestExpectedGrade
} from "@/protos/test/test_message_pb"

import {Label} from "@/models/label/label"
import {TestScore} from "@/models/test/testScore"
import {TestExpectedGrade} from "@/models/test/testExpectedGrade"

import {Model} from "@/models/model"

/**
 * 시험 Class
 */
export class Test extends Model {
  uid: string
  createdAt?: Date
  updatedAt?: Date
  classUid: string
  name: string
  description: string
  round: number
  average: number
  stDev: number
  highScore: number
  lowScore: number
  testLabel: Label
  exposeRankType: ExposeRankType
  startAt: Date
  endAt: Date
  closedAt: Date
  publicExposedAt: Date
  scoresList: TestScore[]
  expectedGradesList: TestExpectedGrade[]

  constructor(data: ProtoTest) {
    super()
    this.uid = data.getUid()
    this.closedAt = data.getCreatedAt()
    this.updatedAt = data.getUpdatedAt()
    this.classUid = data.getClassUid()
    this.name = data.getName()
    this.description = data.getDescription()
    this.round = data.getRound()
    this.average = data.getAverage()
    this.stDev = data.getStDev()
    this.highScore = data.getHighScore()
    this.lowScore = data.getLowScore()
    this.testLabel = super.set(Label, data.getTestLabel() as ProtoLabel)
    this.exposeRankType = data.getExposeRankType()
    this.startAt = data.getStartAt()
    this.endAt = data.getEndAt()
    this.closedAt = data.getClosedAt()
    this.publicExposedAt = data.getPublicExposedAt()
    this.scoresList = super.setList(TestScore, data.getScoresList() as ProtoTestScore[])
    this.expectedGradesList = super.setList(TestExpectedGrade, data.getExpectedGradesList() as ProtoTestExpectedGrade[])
  }
}
