import {
  ClassLabel as ProtoClassLabel,
  Label as ProtoLabel, UserLabel as ProtoUserLabel
} from "@/protos/label/label_message_pb"
import { Label } from "@/models/label/label"
import { Model } from "@/models/model"
import _ from "lodash";
import {UserLabel} from "@/models/label/user.label";

/**
 * 클래스 레이블 Class
 */
export class ClassLabel extends Model {
  classId: string
  labelInfo?: Label | any
  createdAt: Date

  constructor(data: ProtoClassLabel) {
    super()
    this.classId = data.getClassId()
    this.labelInfo = this.set(Label, data.getLabelInfo() as ProtoLabel)
    this.createdAt = data.getCreatedAt()
  }
}

export function bindClassLabelToProto(classLabel: ClassLabel): ProtoClassLabel {
  const protoClassLabel: ProtoClassLabel = new ProtoClassLabel()
  protoClassLabel.setClassId(classLabel.classId)
  protoClassLabel.setLabelInfo(classLabel.labelInfo)
  protoClassLabel.setCreatedAt(classLabel.createdAt)
  return protoClassLabel
}

export function bindClassLabelListToProto(classLabelList: ClassLabel[]): ProtoClassLabel[] {
  const protoClassLabelList: ProtoClassLabel[] = []
  _.forEach(classLabelList, it => {
    protoClassLabelList.push(bindClassLabelToProto(it))
  })
  return protoClassLabelList
}
