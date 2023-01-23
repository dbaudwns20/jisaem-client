// package: user
// file: user/user_communication.proto

import * as jspb from "google-protobuf";
import * as auth_auth_message_pb from "../auth/auth_message_pb";
import * as utils_utils_pb from "../utils/utils_pb";

export class RequestParentCreate extends jspb.Message {
  getStudentUid(): string;
  setStudentUid(value: string): void;

  getParentUsername(): string;
  setParentUsername(value: string): void;

  getParentPassword(): string;
  setParentPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParentCreate): RequestParentCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestParentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParentCreate;
  static deserializeBinaryFromReader(message: RequestParentCreate, reader: jspb.BinaryReader): RequestParentCreate;
}

export namespace RequestParentCreate {
  export type AsObject = {
    studentUid: string,
    parentUsername: string,
    parentPassword: string,
  }
}

export class ResponseParentCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParentCreate): ResponseParentCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseParentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParentCreate;
  static deserializeBinaryFromReader(message: ResponseParentCreate, reader: jspb.BinaryReader): ResponseParentCreate;
}

export namespace ResponseParentCreate {
  export type AsObject = {
  }
}

export class RequestStudentCreate extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStudentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStudentCreate): RequestStudentCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestStudentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestStudentCreate;
  static deserializeBinaryFromReader(message: RequestStudentCreate, reader: jspb.BinaryReader): RequestStudentCreate;
}

export namespace RequestStudentCreate {
  export type AsObject = {
    user?: auth_auth_message_pb.User.AsObject,
  }
}

export class ResponseStudentCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStudentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStudentCreate): ResponseStudentCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseStudentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStudentCreate;
  static deserializeBinaryFromReader(message: ResponseStudentCreate, reader: jspb.BinaryReader): ResponseStudentCreate;
}

export namespace ResponseStudentCreate {
  export type AsObject = {
  }
}

export class RequestTeacherCreate extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTeacherCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTeacherCreate): RequestTeacherCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestTeacherCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTeacherCreate;
  static deserializeBinaryFromReader(message: RequestTeacherCreate, reader: jspb.BinaryReader): RequestTeacherCreate;
}

export namespace RequestTeacherCreate {
  export type AsObject = {
    user?: auth_auth_message_pb.User.AsObject,
  }
}

export class ResponseTeacherCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTeacherCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTeacherCreate): ResponseTeacherCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseTeacherCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTeacherCreate;
  static deserializeBinaryFromReader(message: ResponseTeacherCreate, reader: jspb.BinaryReader): ResponseTeacherCreate;
}

export namespace ResponseTeacherCreate {
  export type AsObject = {
  }
}

export class RequestUserListGet extends jspb.Message {
  getAuthLevel(): auth_auth_message_pb.LevelMap[keyof auth_auth_message_pb.LevelMap];
  setAuthLevel(value: auth_auth_message_pb.LevelMap[keyof auth_auth_message_pb.LevelMap]): void;

  clearUserLabelUidsList(): void;
  getUserLabelUidsList(): Array<string>;
  setUserLabelUidsList(value: Array<string>): void;
  addUserLabelUids(value: string, index?: number): string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserListGet): RequestUserListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUserListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserListGet;
  static deserializeBinaryFromReader(message: RequestUserListGet, reader: jspb.BinaryReader): RequestUserListGet;
}

export namespace RequestUserListGet {
  export type AsObject = {
    authLevel: auth_auth_message_pb.LevelMap[keyof auth_auth_message_pb.LevelMap],
    userLabelUidsList: Array<string>,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class RequestUserGet extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserGet): RequestUserGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUserGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserGet;
  static deserializeBinaryFromReader(message: RequestUserGet, reader: jspb.BinaryReader): RequestUserGet;
}

export namespace RequestUserGet {
  export type AsObject = {
    uid: string,
  }
}

export class ResponseUserGet extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserGet): ResponseUserGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUserGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserGet;
  static deserializeBinaryFromReader(message: ResponseUserGet, reader: jspb.BinaryReader): ResponseUserGet;
}

export namespace ResponseUserGet {
  export type AsObject = {
    user?: auth_auth_message_pb.User.AsObject,
  }
}

export class ResponseUserListGet extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<auth_auth_message_pb.User>;
  setUsersList(value: Array<auth_auth_message_pb.User>): void;
  addUsers(value?: auth_auth_message_pb.User, index?: number): auth_auth_message_pb.User;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserListGet): ResponseUserListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUserListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserListGet;
  static deserializeBinaryFromReader(message: ResponseUserListGet, reader: jspb.BinaryReader): ResponseUserListGet;
}

export namespace ResponseUserListGet {
  export type AsObject = {
    usersList: Array<auth_auth_message_pb.User.AsObject>,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class RequestUserUpdate extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserLabelUid(): string;
  setUserLabelUid(value: string): void;

  hasStudentInfo(): boolean;
  clearStudentInfo(): void;
  getStudentInfo(): auth_auth_message_pb.StudentInfo | undefined;
  setStudentInfo(value?: auth_auth_message_pb.StudentInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserUpdate): RequestUserUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUserUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserUpdate;
  static deserializeBinaryFromReader(message: RequestUserUpdate, reader: jspb.BinaryReader): RequestUserUpdate;
}

export namespace RequestUserUpdate {
  export type AsObject = {
    uid: string,
    username: string,
    name: string,
    phone: string,
    email: string,
    userLabelUid: string,
    studentInfo?: auth_auth_message_pb.StudentInfo.AsObject,
  }
}

export class ResponseUserUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserUpdate): ResponseUserUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUserUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserUpdate;
  static deserializeBinaryFromReader(message: ResponseUserUpdate, reader: jspb.BinaryReader): ResponseUserUpdate;
}

export namespace ResponseUserUpdate {
  export type AsObject = {
  }
}

export class RequestUserDelete extends jspb.Message {
  clearUidList(): void;
  getUidList(): Array<string>;
  setUidList(value: Array<string>): void;
  addUid(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserDelete): RequestUserDelete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUserDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserDelete;
  static deserializeBinaryFromReader(message: RequestUserDelete, reader: jspb.BinaryReader): RequestUserDelete;
}

export namespace RequestUserDelete {
  export type AsObject = {
    uidList: Array<string>,
  }
}

export class ResponseUserDelete extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserDelete.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserDelete): ResponseUserDelete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUserDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserDelete;
  static deserializeBinaryFromReader(message: ResponseUserDelete, reader: jspb.BinaryReader): ResponseUserDelete;
}

export namespace ResponseUserDelete {
  export type AsObject = {
  }
}

export class RequestUserLabelUpdate extends jspb.Message {
  clearUidsList(): void;
  getUidsList(): Array<string>;
  setUidsList(value: Array<string>): void;
  addUids(value: string, index?: number): string;

  getUserLabelUid(): string;
  setUserLabelUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserLabelUpdate): RequestUserLabelUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUserLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserLabelUpdate;
  static deserializeBinaryFromReader(message: RequestUserLabelUpdate, reader: jspb.BinaryReader): RequestUserLabelUpdate;
}

export namespace RequestUserLabelUpdate {
  export type AsObject = {
    uidsList: Array<string>,
    userLabelUid: string,
  }
}

export class ResponseUserLabelUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserLabelUpdate): ResponseUserLabelUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUserLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserLabelUpdate;
  static deserializeBinaryFromReader(message: ResponseUserLabelUpdate, reader: jspb.BinaryReader): ResponseUserLabelUpdate;
}

export namespace ResponseUserLabelUpdate {
  export type AsObject = {
  }
}

export class RequestUserPasswordUpdate extends jspb.Message {
  clearUidList(): void;
  getUidList(): Array<string>;
  setUidList(value: Array<string>): void;
  addUid(value: string, index?: number): string;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserPasswordUpdate): RequestUserPasswordUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUserPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserPasswordUpdate;
  static deserializeBinaryFromReader(message: RequestUserPasswordUpdate, reader: jspb.BinaryReader): RequestUserPasswordUpdate;
}

export namespace RequestUserPasswordUpdate {
  export type AsObject = {
    uidList: Array<string>,
    newPassword: string,
  }
}

export class ResponseUserPasswordUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserPasswordUpdate): ResponseUserPasswordUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUserPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserPasswordUpdate;
  static deserializeBinaryFromReader(message: ResponseUserPasswordUpdate, reader: jspb.BinaryReader): ResponseUserPasswordUpdate;
}

export namespace ResponseUserPasswordUpdate {
  export type AsObject = {
  }
}

export class RequestParentUpdate extends jspb.Message {
  clearUidList(): void;
  getUidList(): Array<string>;
  setUidList(value: Array<string>): void;
  addUid(value: string, index?: number): string;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParentUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParentUpdate): RequestParentUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestParentUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParentUpdate;
  static deserializeBinaryFromReader(message: RequestParentUpdate, reader: jspb.BinaryReader): RequestParentUpdate;
}

export namespace RequestParentUpdate {
  export type AsObject = {
    uidList: Array<string>,
    newPassword: string,
  }
}

export class ResponseParentUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParentUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParentUpdate): ResponseParentUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseParentUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParentUpdate;
  static deserializeBinaryFromReader(message: ResponseParentUpdate, reader: jspb.BinaryReader): ResponseParentUpdate;
}

export namespace ResponseParentUpdate {
  export type AsObject = {
  }
}

export class RequestUsernameDuplicationCheck extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUsernameDuplicationCheck.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUsernameDuplicationCheck): RequestUsernameDuplicationCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestUsernameDuplicationCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUsernameDuplicationCheck;
  static deserializeBinaryFromReader(message: RequestUsernameDuplicationCheck, reader: jspb.BinaryReader): RequestUsernameDuplicationCheck;
}

export namespace RequestUsernameDuplicationCheck {
  export type AsObject = {
    username: string,
  }
}

export class ResponseUsernameDuplicationCheck extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUsernameDuplicationCheck.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUsernameDuplicationCheck): ResponseUsernameDuplicationCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseUsernameDuplicationCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUsernameDuplicationCheck;
  static deserializeBinaryFromReader(message: ResponseUsernameDuplicationCheck, reader: jspb.BinaryReader): ResponseUsernameDuplicationCheck;
}

export namespace ResponseUsernameDuplicationCheck {
  export type AsObject = {
    exist: boolean,
  }
}

