import {LabelType as ProtoLabelType} from "@/protos/label/label_message_pb";
import {AuthLevel} from "@/models/enum/authLevel";

export enum LabelType {
  LABEL_TYPE_UNSPECIFIED,
  LABEL_TYPE_USER,
  LABEL_TYPE_CLASS,
  LABEL_TYPE_TEST,
  LABEL_TYPE_HOMEWORK
}

export function LabelTypeFromProto(pv: ProtoLabelType): LabelType {
  switch (pv.valueOf()) {
    case LabelType.LABEL_TYPE_USER.valueOf():
      return LabelType.LABEL_TYPE_USER
    case LabelType.LABEL_TYPE_CLASS.valueOf():
      return LabelType.LABEL_TYPE_CLASS
    case LabelType.LABEL_TYPE_TEST.valueOf():
      return LabelType.LABEL_TYPE_TEST
    case LabelType.LABEL_TYPE_HOMEWORK.valueOf():
      return LabelType.LABEL_TYPE_HOMEWORK
    default:
      return LabelType.LABEL_TYPE_UNSPECIFIED
  }
}

export function LabelTypeToProto(mv: LabelType): ProtoLabelType {
  switch (mv.valueOf()) {
    case LabelType.LABEL_TYPE_USER.valueOf():
      return ProtoLabelType.LABEL_TYPE_USER
    case LabelType.LABEL_TYPE_CLASS.valueOf():
      return ProtoLabelType.LABEL_TYPE_CLASS
    case LabelType.LABEL_TYPE_TEST.valueOf():
      return ProtoLabelType.LABEL_TYPE_TEST
    case LabelType.LABEL_TYPE_HOMEWORK.valueOf():
      return ProtoLabelType.LABEL_TYPE_HOMEWORK
    default:
      return ProtoLabelType.LABEL_TYPE_UNSPECIFIED
  }
}

export function LabelTypeToString(mv: LabelType): string {
  switch (mv.valueOf()) {
    case LabelType.LABEL_TYPE_USER.valueOf():
      return "사용자 레이블"
    case LabelType.LABEL_TYPE_CLASS.valueOf():
      return "클래스 레이블"
    case LabelType.LABEL_TYPE_TEST.valueOf():
      return "시험 레이블"
    case LabelType.LABEL_TYPE_HOMEWORK.valueOf():
      return "과제 레이블"
    default:
      return "미지정"
  }
}
