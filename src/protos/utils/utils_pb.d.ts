import * as jspb from 'google-protobuf'



export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pagination;

  getUnit(): number;
  setUnit(value: number): Pagination;

  getTotalCount(): number;
  setTotalCount(value: number): Pagination;

  getTotalPage(): number;
  setTotalPage(value: number): Pagination;

  getOrder(): OrderOption | undefined;
  setOrder(value?: OrderOption): Pagination;
  hasOrder(): boolean;
  clearOrder(): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page: number,
    unit: number,
    totalCount: number,
    totalPage: number,
    order?: OrderOption.AsObject,
  }
}

export class OrderOption extends jspb.Message {
  getField(): string;
  setField(value: string): OrderOption;

  getAsc(): boolean;
  setAsc(value: boolean): OrderOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderOption.AsObject;
  static toObject(includeInstance: boolean, msg: OrderOption): OrderOption.AsObject;
  static serializeBinaryToWriter(message: OrderOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderOption;
  static deserializeBinaryFromReader(message: OrderOption, reader: jspb.BinaryReader): OrderOption;
}

export namespace OrderOption {
  export type AsObject = {
    field: string,
    asc: boolean,
  }
}

