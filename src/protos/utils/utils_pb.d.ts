// package: utils
// file: utils/utils.proto

import * as jspb from "google-protobuf";

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getUnit(): number;
  setUnit(value: number): void;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getTotalPage(): number;
  setTotalPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  }
}

