import {ExposeRankType as ProtoExposeRankType} from "@/protos/test/test_message_pb";
import {Level} from "@/protos/auth/auth_message_pb";
import {AuthLevel} from "@/models/enum/authLevel";

export enum ExposeRankType {
  EXPOSE_RANK_TYPE_UNSPECIFIED,
  EXPOSE_RANK_TYPE_ONLY_SELF,
  EXPOSE_RANK_TYPE_FIRST,
  EXPOSE_RANK_TYPE_SECOND,
  EXPOSE_RANK_TYPE_THIRD,
  EXPOSE_RANK_TYPE_ALL
}

export function ExposeRankTypeFromProto(pv: ProtoExposeRankType): ExposeRankType {
  switch (pv.valueOf()) {
    case ExposeRankType.EXPOSE_RANK_TYPE_ONLY_SELF.valueOf():
      return ExposeRankType.EXPOSE_RANK_TYPE_ONLY_SELF
    case ExposeRankType.EXPOSE_RANK_TYPE_FIRST.valueOf():
      return ExposeRankType.EXPOSE_RANK_TYPE_FIRST
    case ExposeRankType.EXPOSE_RANK_TYPE_SECOND.valueOf():
      return ExposeRankType.EXPOSE_RANK_TYPE_SECOND
    case ExposeRankType.EXPOSE_RANK_TYPE_THIRD.valueOf():
      return ExposeRankType.EXPOSE_RANK_TYPE_THIRD
    case ExposeRankType.EXPOSE_RANK_TYPE_ALL.valueOf():
      return ExposeRankType.EXPOSE_RANK_TYPE_ALL
    default:
      return ExposeRankType.EXPOSE_RANK_TYPE_UNSPECIFIED
  }
}


export function ExposeRankTypeToProto(mv: ExposeRankType): ProtoExposeRankType {
  switch (mv.valueOf()) {
    case ExposeRankType.EXPOSE_RANK_TYPE_ONLY_SELF.valueOf():
      return ProtoExposeRankType.EXPOSE_RANK_TYPE_ONLY_SELF
    case ExposeRankType.EXPOSE_RANK_TYPE_FIRST.valueOf():
      return ProtoExposeRankType.EXPOSE_RANK_TYPE_FIRST
    case ExposeRankType.EXPOSE_RANK_TYPE_SECOND.valueOf():
      return ProtoExposeRankType.EXPOSE_RANK_TYPE_SECOND
    case ExposeRankType.EXPOSE_RANK_TYPE_THIRD.valueOf():
      return ProtoExposeRankType.EXPOSE_RANK_TYPE_THIRD
    case ExposeRankType.EXPOSE_RANK_TYPE_ALL.valueOf():
      return ProtoExposeRankType.EXPOSE_RANK_TYPE_ALL
    default:
      return ProtoExposeRankType.EXPOSE_RANK_TYPE_UNSPECIFIED
  }
}

export function ExposeRankTypeToString(mv: ExposeRankType): string {
  switch (mv.valueOf()) {
    case ExposeRankType.EXPOSE_RANK_TYPE_ONLY_SELF.valueOf():
      return "본인"
    case ExposeRankType.EXPOSE_RANK_TYPE_FIRST.valueOf():
      return "1등"
    case ExposeRankType.EXPOSE_RANK_TYPE_SECOND.valueOf():
      return "2등"
    case ExposeRankType.EXPOSE_RANK_TYPE_THIRD.valueOf():
      return "3등"
    case ExposeRankType.EXPOSE_RANK_TYPE_ALL.valueOf():
      return "전체"
    default:
      return "미지정"
  }
}
