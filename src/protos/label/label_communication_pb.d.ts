import * as jspb from 'google-protobuf'

import * as label_label_message_pb from '../label/label_message_pb';
import * as utils_utils_pb from '../utils/utils_pb';


export class RequestLabelCreate extends jspb.Message {
  getLabel(): label_label_message_pb.Label | undefined;
  setLabel(value?: label_label_message_pb.Label): RequestLabelCreate;
  hasLabel(): boolean;
  clearLabel(): RequestLabelCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLabelCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLabelCreate): RequestLabelCreate.AsObject;
  static serializeBinaryToWriter(message: RequestLabelCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLabelCreate;
  static deserializeBinaryFromReader(message: RequestLabelCreate, reader: jspb.BinaryReader): RequestLabelCreate;
}

export namespace RequestLabelCreate {
  export type AsObject = {
    label?: label_label_message_pb.Label.AsObject,
  }
}

export class ResponseLabelCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseLabelCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseLabelCreate): ResponseLabelCreate.AsObject;
  static serializeBinaryToWriter(message: ResponseLabelCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseLabelCreate;
  static deserializeBinaryFromReader(message: ResponseLabelCreate, reader: jspb.BinaryReader): ResponseLabelCreate;
}

export namespace ResponseLabelCreate {
  export type AsObject = {
  }
}

export class RequestLabelListGet extends jspb.Message {
  getLabelType(): label_label_message_pb.LabelType;
  setLabelType(value: label_label_message_pb.LabelType): RequestLabelListGet;

  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): RequestLabelListGet;
  hasPagination(): boolean;
  clearPagination(): RequestLabelListGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLabelListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLabelListGet): RequestLabelListGet.AsObject;
  static serializeBinaryToWriter(message: RequestLabelListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLabelListGet;
  static deserializeBinaryFromReader(message: RequestLabelListGet, reader: jspb.BinaryReader): RequestLabelListGet;
}

export namespace RequestLabelListGet {
  export type AsObject = {
    labelType: label_label_message_pb.LabelType,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class ResponseLabelListGet extends jspb.Message {
  getLabelsList(): Array<label_label_message_pb.Label>;
  setLabelsList(value: Array<label_label_message_pb.Label>): ResponseLabelListGet;
  clearLabelsList(): ResponseLabelListGet;
  addLabels(value?: label_label_message_pb.Label, index?: number): label_label_message_pb.Label;

  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): ResponseLabelListGet;
  hasPagination(): boolean;
  clearPagination(): ResponseLabelListGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseLabelListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseLabelListGet): ResponseLabelListGet.AsObject;
  static serializeBinaryToWriter(message: ResponseLabelListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseLabelListGet;
  static deserializeBinaryFromReader(message: ResponseLabelListGet, reader: jspb.BinaryReader): ResponseLabelListGet;
}

export namespace ResponseLabelListGet {
  export type AsObject = {
    labelsList: Array<label_label_message_pb.Label.AsObject>,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class RequestLabelUpdate extends jspb.Message {
  getId(): string;
  setId(value: string): RequestLabelUpdate;

  getName(): string;
  setName(value: string): RequestLabelUpdate;
  hasName(): boolean;
  clearName(): RequestLabelUpdate;

  getDescription(): string;
  setDescription(value: string): RequestLabelUpdate;
  hasDescription(): boolean;
  clearDescription(): RequestLabelUpdate;

  getColor(): string;
  setColor(value: string): RequestLabelUpdate;
  hasColor(): boolean;
  clearColor(): RequestLabelUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLabelUpdate): RequestLabelUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLabelUpdate;
  static deserializeBinaryFromReader(message: RequestLabelUpdate, reader: jspb.BinaryReader): RequestLabelUpdate;
}

export namespace RequestLabelUpdate {
  export type AsObject = {
    id: string,
    name?: string,
    description?: string,
    color?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum ColorCase { 
    _COLOR_NOT_SET = 0,
    COLOR = 4,
  }
}

export class ResponseLabelUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseLabelUpdate): ResponseLabelUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseLabelUpdate;
  static deserializeBinaryFromReader(message: ResponseLabelUpdate, reader: jspb.BinaryReader): ResponseLabelUpdate;
}

export namespace ResponseLabelUpdate {
  export type AsObject = {
  }
}

export class RequestLabelDelete extends jspb.Message {
  getIdList(): Array<string>;
  setIdList(value: Array<string>): RequestLabelDelete;
  clearIdList(): RequestLabelDelete;
  addId(value: string, index?: number): RequestLabelDelete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLabelDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLabelDelete): RequestLabelDelete.AsObject;
  static serializeBinaryToWriter(message: RequestLabelDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLabelDelete;
  static deserializeBinaryFromReader(message: RequestLabelDelete, reader: jspb.BinaryReader): RequestLabelDelete;
}

export namespace RequestLabelDelete {
  export type AsObject = {
    idList: Array<string>,
  }
}

export class ResponseLabelDelete extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseLabelDelete.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseLabelDelete): ResponseLabelDelete.AsObject;
  static serializeBinaryToWriter(message: ResponseLabelDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseLabelDelete;
  static deserializeBinaryFromReader(message: ResponseLabelDelete, reader: jspb.BinaryReader): ResponseLabelDelete;
}

export namespace ResponseLabelDelete {
  export type AsObject = {
  }
}

