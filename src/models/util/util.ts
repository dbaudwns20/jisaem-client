import { Pagination as ProtoPagination } from "@/protos/utils/utils_pb"

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

export function bindPaginationToProto(pagination: Pagination): ProtoPagination {
  const protoPagination = new ProtoPagination()
  protoPagination.setPage(pagination.page)
  protoPagination.setUnit(pagination.unit)
  protoPagination.setTotalCount(pagination.totalCount)
  protoPagination.setTotalPage(pagination.totalPage)
  return protoPagination
}

export function bindPaginationInstance(data: any): Pagination {
  return {
    page: data?.page,
    unit: data?.unit,
    totalCount: data?.totalCount,
    totalPage: data?.totalPage
  } as Pagination
}
