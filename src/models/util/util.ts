import {Pagination as ProtoPagination} from "@/protos/utils/utils_pb";

export class Pagination {
  page: number
  unit: number
  totalCount: number
  totalPage: number

  constructor(proto: ProtoPagination) {
    this.page = proto.getPage()
    this.unit = proto.getUnit()
    this.totalCount = proto.getTotalCount()
    this.totalPage = proto.getTotalPage()
  }
}
