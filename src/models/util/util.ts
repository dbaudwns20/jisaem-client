import {
  OrderOption as ProtoOrderOption,
  Pagination as ProtoPagination }
from "@/protos/utils/utils_pb"
import _ from 'lodash'

export interface Pagination {
  page: number
  unit: number
  totalCount: number
  totalPage: number
  orderOption?: OrderOption
}

export function bindPaginationToProto(pagination: Pagination): ProtoPagination {
  const protoPagination = new ProtoPagination()
  protoPagination.setPage(pagination.page)
  protoPagination.setUnit(pagination.unit)
  protoPagination.setTotalCount(pagination.totalCount)
  protoPagination.setTotalPage(pagination.totalPage)
  protoPagination.setOrder(bindOrderOptionToProto(pagination.orderOption!))
  return protoPagination
}

export function bindPaginationInstance(data: any | ProtoPagination): Pagination {
  let result = {} as Pagination
  if (data instanceof ProtoPagination) {
    result = {
      page: data.getPage(),
      unit: data.getUnit(),
      totalCount: data.getTotalCount(),
      totalPage: data.getTotalPage()
    } as Pagination
  } else {
    result = {
      page: data?.page,
      unit: data?.unit,
      totalCount: data?.totalCount,
      totalPage: data?.totalPage,
      orderOption: data?.orderOption
    } as Pagination
  }
  return result
}

export interface OrderOption {
  field: string,
  asc: boolean
}

export function bindOrderOptionInstance(data: any): OrderOption {
  return {
    field: data.field,
    asc: data.asc
  } as OrderOption
}

export function bindOrderOptionToProto(orderOption: OrderOption): ProtoOrderOption | undefined {
  if (_.isUndefined(orderOption)) return undefined
  const protoOrderOption: ProtoOrderOption = new ProtoOrderOption()
  protoOrderOption.setField(orderOption.field)
  protoOrderOption.setAsc(orderOption.asc)
  return protoOrderOption
}
