// package: class
// file: class/class_communication.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as class_class_message_pb from "../class/class_message_pb";
import * as utils_utils_pb from "../utils/utils_pb";

export class RequestClassCreate extends jspb.Message {
  hasClass(): boolean;
  clearClass(): void;
  getClass(): class_class_message_pb.Class | undefined;
  setClass(value?: class_class_message_pb.Class): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassCreate): RequestClassCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassCreate;
  static deserializeBinaryFromReader(message: RequestClassCreate, reader: jspb.BinaryReader): RequestClassCreate;
}

export namespace RequestClassCreate {
  export type AsObject = {
    pb_class?: class_class_message_pb.Class.AsObject,
  }
}

export class ResponseClassCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassCreate): ResponseClassCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassCreate;
  static deserializeBinaryFromReader(message: ResponseClassCreate, reader: jspb.BinaryReader): ResponseClassCreate;
}

export namespace ResponseClassCreate {
  export type AsObject = {
  }
}

export class RequestClassGet extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassGet): RequestClassGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassGet;
  static deserializeBinaryFromReader(message: RequestClassGet, reader: jspb.BinaryReader): RequestClassGet;
}

export namespace RequestClassGet {
  export type AsObject = {
    uid: string,
  }
}

export class ResponseClassGet extends jspb.Message {
  hasClass(): boolean;
  clearClass(): void;
  getClass(): class_class_message_pb.Class | undefined;
  setClass(value?: class_class_message_pb.Class): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassGet): ResponseClassGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassGet;
  static deserializeBinaryFromReader(message: ResponseClassGet, reader: jspb.BinaryReader): ResponseClassGet;
}

export namespace ResponseClassGet {
  export type AsObject = {
    pb_class?: class_class_message_pb.Class.AsObject,
  }
}

export class RequestClassListGet extends jspb.Message {
  clearClassLabelUidsList(): void;
  getClassLabelUidsList(): Array<string>;
  setClassLabelUidsList(value: Array<string>): void;
  addClassLabelUids(value: string, index?: number): string;

  getClosedClass(): boolean;
  setClosedClass(value: boolean): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassListGet): RequestClassListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassListGet;
  static deserializeBinaryFromReader(message: RequestClassListGet, reader: jspb.BinaryReader): RequestClassListGet;
}

export namespace RequestClassListGet {
  export type AsObject = {
    classLabelUidsList: Array<string>,
    closedClass: boolean,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class ResponseClassListGet extends jspb.Message {
  clearClassesList(): void;
  getClassesList(): Array<class_class_message_pb.Class>;
  setClassesList(value: Array<class_class_message_pb.Class>): void;
  addClasses(value?: class_class_message_pb.Class, index?: number): class_class_message_pb.Class;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassListGet): ResponseClassListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassListGet;
  static deserializeBinaryFromReader(message: ResponseClassListGet, reader: jspb.BinaryReader): ResponseClassListGet;
}

export namespace ResponseClassListGet {
  export type AsObject = {
    classesList: Array<class_class_message_pb.Class.AsObject>,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class RequestClassUpdate extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getClassLabelUid(): string;
  setClassLabelUid(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getClose(): boolean;
  setClose(value: boolean): void;

  getPublicExpose(): boolean;
  setPublicExpose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassUpdate): RequestClassUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassUpdate;
  static deserializeBinaryFromReader(message: RequestClassUpdate, reader: jspb.BinaryReader): RequestClassUpdate;
}

export namespace RequestClassUpdate {
  export type AsObject = {
    uid: string,
    name: string,
    description: string,
    classLabelUid: string,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    close: boolean,
    publicExpose: boolean,
  }
}

export class ResponseClassUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassUpdate): ResponseClassUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassUpdate;
  static deserializeBinaryFromReader(message: ResponseClassUpdate, reader: jspb.BinaryReader): ResponseClassUpdate;
}

export namespace ResponseClassUpdate {
  export type AsObject = {
  }
}

export class RequestClassDelete extends jspb.Message {
  clearUidsList(): void;
  getUidsList(): Array<string>;
  setUidsList(value: Array<string>): void;
  addUids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassDelete): RequestClassDelete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassDelete;
  static deserializeBinaryFromReader(message: RequestClassDelete, reader: jspb.BinaryReader): RequestClassDelete;
}

export namespace RequestClassDelete {
  export type AsObject = {
    uidsList: Array<string>,
  }
}

export class ResponseClassDelete extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassDelete.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassDelete): ResponseClassDelete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassDelete;
  static deserializeBinaryFromReader(message: ResponseClassDelete, reader: jspb.BinaryReader): ResponseClassDelete;
}

export namespace ResponseClassDelete {
  export type AsObject = {
  }
}

export class RequestClassTeacherUpdate extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  clearTeacherUidsList(): void;
  getTeacherUidsList(): Array<string>;
  setTeacherUidsList(value: Array<string>): void;
  addTeacherUids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassTeacherUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassTeacherUpdate): RequestClassTeacherUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassTeacherUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassTeacherUpdate;
  static deserializeBinaryFromReader(message: RequestClassTeacherUpdate, reader: jspb.BinaryReader): RequestClassTeacherUpdate;
}

export namespace RequestClassTeacherUpdate {
  export type AsObject = {
    uid: string,
    teacherUidsList: Array<string>,
  }
}

export class ResponseClassTeacherUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassTeacherUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassTeacherUpdate): ResponseClassTeacherUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassTeacherUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassTeacherUpdate;
  static deserializeBinaryFromReader(message: ResponseClassTeacherUpdate, reader: jspb.BinaryReader): ResponseClassTeacherUpdate;
}

export namespace ResponseClassTeacherUpdate {
  export type AsObject = {
  }
}

export class RequestClassLabelUpdate extends jspb.Message {
  clearUidsList(): void;
  getUidsList(): Array<string>;
  setUidsList(value: Array<string>): void;
  addUids(value: string, index?: number): string;

  getClassLabelUid(): string;
  setClassLabelUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassLabelUpdate): RequestClassLabelUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassLabelUpdate;
  static deserializeBinaryFromReader(message: RequestClassLabelUpdate, reader: jspb.BinaryReader): RequestClassLabelUpdate;
}

export namespace RequestClassLabelUpdate {
  export type AsObject = {
    uidsList: Array<string>,
    classLabelUid: string,
  }
}

export class ResponseClassLabelUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassLabelUpdate): ResponseClassLabelUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassLabelUpdate;
  static deserializeBinaryFromReader(message: ResponseClassLabelUpdate, reader: jspb.BinaryReader): ResponseClassLabelUpdate;
}

export namespace ResponseClassLabelUpdate {
  export type AsObject = {
  }
}

export class RequestClassOpenStatusChange extends jspb.Message {
  clearUidsList(): void;
  getUidsList(): Array<string>;
  setUidsList(value: Array<string>): void;
  addUids(value: string, index?: number): string;

  getClose(): boolean;
  setClose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassOpenStatusChange.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassOpenStatusChange): RequestClassOpenStatusChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassOpenStatusChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassOpenStatusChange;
  static deserializeBinaryFromReader(message: RequestClassOpenStatusChange, reader: jspb.BinaryReader): RequestClassOpenStatusChange;
}

export namespace RequestClassOpenStatusChange {
  export type AsObject = {
    uidsList: Array<string>,
    close: boolean,
  }
}

export class ResponseClassOpenStatusChange extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassOpenStatusChange.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassOpenStatusChange): ResponseClassOpenStatusChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassOpenStatusChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassOpenStatusChange;
  static deserializeBinaryFromReader(message: ResponseClassOpenStatusChange, reader: jspb.BinaryReader): ResponseClassOpenStatusChange;
}

export namespace ResponseClassOpenStatusChange {
  export type AsObject = {
  }
}

export class RequestClassPublicExposeStatusChange extends jspb.Message {
  clearUidsList(): void;
  getUidsList(): Array<string>;
  setUidsList(value: Array<string>): void;
  addUids(value: string, index?: number): string;

  getPublicExpose(): boolean;
  setPublicExpose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassPublicExposeStatusChange.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassPublicExposeStatusChange): RequestClassPublicExposeStatusChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestClassPublicExposeStatusChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassPublicExposeStatusChange;
  static deserializeBinaryFromReader(message: RequestClassPublicExposeStatusChange, reader: jspb.BinaryReader): RequestClassPublicExposeStatusChange;
}

export namespace RequestClassPublicExposeStatusChange {
  export type AsObject = {
    uidsList: Array<string>,
    publicExpose: boolean,
  }
}

export class ResponseClassPublicExposeStatusChange extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassPublicExposeStatusChange.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassPublicExposeStatusChange): ResponseClassPublicExposeStatusChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseClassPublicExposeStatusChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassPublicExposeStatusChange;
  static deserializeBinaryFromReader(message: ResponseClassPublicExposeStatusChange, reader: jspb.BinaryReader): ResponseClassPublicExposeStatusChange;
}

export namespace ResponseClassPublicExposeStatusChange {
  export type AsObject = {
  }
}

export class RequestParticipantInvite extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  clearUserUidsList(): void;
  getUserUidsList(): Array<string>;
  setUserUidsList(value: Array<string>): void;
  addUserUids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParticipantInvite.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParticipantInvite): RequestParticipantInvite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestParticipantInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParticipantInvite;
  static deserializeBinaryFromReader(message: RequestParticipantInvite, reader: jspb.BinaryReader): RequestParticipantInvite;
}

export namespace RequestParticipantInvite {
  export type AsObject = {
    uid: string,
    userUidsList: Array<string>,
  }
}

export class ResponseParticipantInvite extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParticipantInvite.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParticipantInvite): ResponseParticipantInvite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseParticipantInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParticipantInvite;
  static deserializeBinaryFromReader(message: ResponseParticipantInvite, reader: jspb.BinaryReader): ResponseParticipantInvite;
}

export namespace ResponseParticipantInvite {
  export type AsObject = {
  }
}

export class RequestParticipantListGet extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParticipantListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParticipantListGet): RequestParticipantListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestParticipantListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParticipantListGet;
  static deserializeBinaryFromReader(message: RequestParticipantListGet, reader: jspb.BinaryReader): RequestParticipantListGet;
}

export namespace RequestParticipantListGet {
  export type AsObject = {
    uid: string,
  }
}

export class ResponseParticipantListGet extends jspb.Message {
  clearClassParticipantsList(): void;
  getClassParticipantsList(): Array<class_class_message_pb.ClassParticipant>;
  setClassParticipantsList(value: Array<class_class_message_pb.ClassParticipant>): void;
  addClassParticipants(value?: class_class_message_pb.ClassParticipant, index?: number): class_class_message_pb.ClassParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParticipantListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParticipantListGet): ResponseParticipantListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseParticipantListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParticipantListGet;
  static deserializeBinaryFromReader(message: ResponseParticipantListGet, reader: jspb.BinaryReader): ResponseParticipantListGet;
}

export namespace ResponseParticipantListGet {
  export type AsObject = {
    classParticipantsList: Array<class_class_message_pb.ClassParticipant.AsObject>,
  }
}

export class RequestParticipantKick extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  clearUserUidsList(): void;
  getUserUidsList(): Array<string>;
  setUserUidsList(value: Array<string>): void;
  addUserUids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParticipantKick.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParticipantKick): RequestParticipantKick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestParticipantKick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParticipantKick;
  static deserializeBinaryFromReader(message: RequestParticipantKick, reader: jspb.BinaryReader): RequestParticipantKick;
}

export namespace RequestParticipantKick {
  export type AsObject = {
    uid: string,
    userUidsList: Array<string>,
  }
}

export class ResponseParticipantKick extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParticipantKick.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParticipantKick): ResponseParticipantKick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseParticipantKick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParticipantKick;
  static deserializeBinaryFromReader(message: ResponseParticipantKick, reader: jspb.BinaryReader): ResponseParticipantKick;
}

export namespace ResponseParticipantKick {
  export type AsObject = {
  }
}

