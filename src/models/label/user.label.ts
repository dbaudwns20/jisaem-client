import {
  UserLabel as ProtoUserLabel,
  Label as ProtoLabel
} from "@/protos/label/label_message_pb"
import { Model } from "@/models/model"
import { Label } from "@/models/label/label"

import _ from 'lodash'

/**
 * 사용자 레이블 클레스
 */
export class UserLabel extends Model {
  userId: string
  labelInfo?: Label | any
  createdAt: Date

  constructor(data: ProtoUserLabel) {
    super()
    this.userId = data.getUserId()
    this.labelInfo = this.set(Label, data.getLabelInfo() as ProtoLabel)
    this.createdAt = data.getCreatedAt()!.toDate() as Date
  }
}

export function bindUserLabelToProto(userLabel: UserLabel): ProtoUserLabel {
  const protoUserLabel: ProtoUserLabel = new ProtoUserLabel()
  protoUserLabel.setUserId(userLabel.userId)
  protoUserLabel.setLabelInfo(userLabel.labelInfo)
  protoUserLabel.setCreatedAt(userLabel.createdAt)
  return protoUserLabel
}

export function bindUserLabelListToProto(userLabelList: UserLabel[]): ProtoUserLabel[] {
  const protoUserLabelList: ProtoUserLabel[] = []
  _.forEach(userLabelList, it => {
    protoUserLabelList.push(bindUserLabelToProto(it))
  })
  return protoUserLabelList
}
