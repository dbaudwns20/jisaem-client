import * as jspb from 'google-protobuf'

import * as auth_auth_message_pb from '../auth/auth_message_pb';
import * as utils_utils_pb from '../utils/utils_pb';


export class RequestParentCreate extends jspb.Message {
  getStudentId(): string;
  setStudentId(value: string): RequestParentCreate;

  getParentInfo(): auth_auth_message_pb.ParentInfo | undefined;
  setParentInfo(value?: auth_auth_message_pb.ParentInfo): RequestParentCreate;
  hasParentInfo(): boolean;
  clearParentInfo(): RequestParentCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParentCreate): RequestParentCreate.AsObject;
  static serializeBinaryToWriter(message: RequestParentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParentCreate;
  static deserializeBinaryFromReader(message: RequestParentCreate, reader: jspb.BinaryReader): RequestParentCreate;
}

export namespace RequestParentCreate {
  export type AsObject = {
    studentId: string,
    parentInfo?: auth_auth_message_pb.ParentInfo.AsObject,
  }
}

export class ResponseParentCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParentCreate): ResponseParentCreate.AsObject;
  static serializeBinaryToWriter(message: ResponseParentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParentCreate;
  static deserializeBinaryFromReader(message: ResponseParentCreate, reader: jspb.BinaryReader): ResponseParentCreate;
}

export namespace ResponseParentCreate {
  export type AsObject = {
  }
}

export class RequestStudentCreate extends jspb.Message {
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): RequestStudentCreate;
  hasUser(): boolean;
  clearUser(): RequestStudentCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStudentCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStudentCreate): RequestStudentCreate.AsObject;
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
  static serializeBinaryToWriter(message: ResponseStudentCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStudentCreate;
  static deserializeBinaryFromReader(message: ResponseStudentCreate, reader: jspb.BinaryReader): ResponseStudentCreate;
}

export namespace ResponseStudentCreate {
  export type AsObject = {
  }
}

export class RequestTeacherCreate extends jspb.Message {
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): RequestTeacherCreate;
  hasUser(): boolean;
  clearUser(): RequestTeacherCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTeacherCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTeacherCreate): RequestTeacherCreate.AsObject;
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
  static serializeBinaryToWriter(message: ResponseTeacherCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTeacherCreate;
  static deserializeBinaryFromReader(message: ResponseTeacherCreate, reader: jspb.BinaryReader): ResponseTeacherCreate;
}

export namespace ResponseTeacherCreate {
  export type AsObject = {
  }
}

export class RequestManagerCreate extends jspb.Message {
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): RequestManagerCreate;
  hasUser(): boolean;
  clearUser(): RequestManagerCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestManagerCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestManagerCreate): RequestManagerCreate.AsObject;
  static serializeBinaryToWriter(message: RequestManagerCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestManagerCreate;
  static deserializeBinaryFromReader(message: RequestManagerCreate, reader: jspb.BinaryReader): RequestManagerCreate;
}

export namespace RequestManagerCreate {
  export type AsObject = {
    user?: auth_auth_message_pb.User.AsObject,
  }
}

export class ResponseManagerCreate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseManagerCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseManagerCreate): ResponseManagerCreate.AsObject;
  static serializeBinaryToWriter(message: ResponseManagerCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseManagerCreate;
  static deserializeBinaryFromReader(message: ResponseManagerCreate, reader: jspb.BinaryReader): ResponseManagerCreate;
}

export namespace ResponseManagerCreate {
  export type AsObject = {
  }
}

export class RequestUserListGet extends jspb.Message {
  getAuthLevel(): auth_auth_message_pb.Level;
  setAuthLevel(value: auth_auth_message_pb.Level): RequestUserListGet;

  getUserLabelIdsList(): Array<string>;
  setUserLabelIdsList(value: Array<string>): RequestUserListGet;
  clearUserLabelIdsList(): RequestUserListGet;
  addUserLabelIds(value: string, index?: number): RequestUserListGet;

  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): RequestUserListGet;
  hasPagination(): boolean;
  clearPagination(): RequestUserListGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserListGet): RequestUserListGet.AsObject;
  static serializeBinaryToWriter(message: RequestUserListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserListGet;
  static deserializeBinaryFromReader(message: RequestUserListGet, reader: jspb.BinaryReader): RequestUserListGet;
}

export namespace RequestUserListGet {
  export type AsObject = {
    authLevel: auth_auth_message_pb.Level,
    userLabelIdsList: Array<string>,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class RequestUserGet extends jspb.Message {
  getId(): string;
  setId(value: string): RequestUserGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserGet): RequestUserGet.AsObject;
  static serializeBinaryToWriter(message: RequestUserGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserGet;
  static deserializeBinaryFromReader(message: RequestUserGet, reader: jspb.BinaryReader): RequestUserGet;
}

export namespace RequestUserGet {
  export type AsObject = {
    id: string,
  }
}

export class ResponseUserGet extends jspb.Message {
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): ResponseUserGet;
  hasUser(): boolean;
  clearUser(): ResponseUserGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserGet): ResponseUserGet.AsObject;
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
  getUsersList(): Array<auth_auth_message_pb.User>;
  setUsersList(value: Array<auth_auth_message_pb.User>): ResponseUserListGet;
  clearUsersList(): ResponseUserListGet;
  addUsers(value?: auth_auth_message_pb.User, index?: number): auth_auth_message_pb.User;

  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): ResponseUserListGet;
  hasPagination(): boolean;
  clearPagination(): ResponseUserListGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserListGet): ResponseUserListGet.AsObject;
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
  getId(): string;
  setId(value: string): RequestUserUpdate;

  getUsername(): string;
  setUsername(value: string): RequestUserUpdate;
  hasUsername(): boolean;
  clearUsername(): RequestUserUpdate;

  getName(): string;
  setName(value: string): RequestUserUpdate;
  hasName(): boolean;
  clearName(): RequestUserUpdate;

  getPhone(): string;
  setPhone(value: string): RequestUserUpdate;
  hasPhone(): boolean;
  clearPhone(): RequestUserUpdate;

  getEmail(): string;
  setEmail(value: string): RequestUserUpdate;
  hasEmail(): boolean;
  clearEmail(): RequestUserUpdate;

  getStudentSchool(): string;
  setStudentSchool(value: string): RequestUserUpdate;
  hasStudentSchool(): boolean;
  clearStudentSchool(): RequestUserUpdate;

  getStudentDescription(): string;
  setStudentDescription(value: string): RequestUserUpdate;
  hasStudentDescription(): boolean;
  clearStudentDescription(): RequestUserUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserUpdate): RequestUserUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestUserUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserUpdate;
  static deserializeBinaryFromReader(message: RequestUserUpdate, reader: jspb.BinaryReader): RequestUserUpdate;
}

export namespace RequestUserUpdate {
  export type AsObject = {
    id: string,
    username?: string,
    name?: string,
    phone?: string,
    email?: string,
    studentSchool?: string,
    studentDescription?: string,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 2,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 3,
  }

  export enum PhoneCase { 
    _PHONE_NOT_SET = 0,
    PHONE = 4,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 5,
  }

  export enum StudentSchoolCase { 
    _STUDENT_SCHOOL_NOT_SET = 0,
    STUDENT_SCHOOL = 6,
  }

  export enum StudentDescriptionCase { 
    _STUDENT_DESCRIPTION_NOT_SET = 0,
    STUDENT_DESCRIPTION = 7,
  }
}

export class ResponseUserUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserUpdate): ResponseUserUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseUserUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserUpdate;
  static deserializeBinaryFromReader(message: ResponseUserUpdate, reader: jspb.BinaryReader): ResponseUserUpdate;
}

export namespace ResponseUserUpdate {
  export type AsObject = {
  }
}

export class RequestParentUpdate extends jspb.Message {
  getId(): string;
  setId(value: string): RequestParentUpdate;

  getUsername(): string;
  setUsername(value: string): RequestParentUpdate;
  hasUsername(): boolean;
  clearUsername(): RequestParentUpdate;

  getPhone(): string;
  setPhone(value: string): RequestParentUpdate;
  hasPhone(): boolean;
  clearPhone(): RequestParentUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParentUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParentUpdate): RequestParentUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestParentUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParentUpdate;
  static deserializeBinaryFromReader(message: RequestParentUpdate, reader: jspb.BinaryReader): RequestParentUpdate;
}

export namespace RequestParentUpdate {
  export type AsObject = {
    id: string,
    username?: string,
    phone?: string,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 2,
  }

  export enum PhoneCase { 
    _PHONE_NOT_SET = 0,
    PHONE = 3,
  }
}

export class ResponseParentUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParentUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParentUpdate): ResponseParentUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseParentUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParentUpdate;
  static deserializeBinaryFromReader(message: ResponseParentUpdate, reader: jspb.BinaryReader): ResponseParentUpdate;
}

export namespace ResponseParentUpdate {
  export type AsObject = {
  }
}

export class RequestUserDelete extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestUserDelete;
  clearIdsList(): RequestUserDelete;
  addIds(value: string, index?: number): RequestUserDelete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserDelete): RequestUserDelete.AsObject;
  static serializeBinaryToWriter(message: RequestUserDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserDelete;
  static deserializeBinaryFromReader(message: RequestUserDelete, reader: jspb.BinaryReader): RequestUserDelete;
}

export namespace RequestUserDelete {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class ResponseUserDelete extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserDelete.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserDelete): ResponseUserDelete.AsObject;
  static serializeBinaryToWriter(message: ResponseUserDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserDelete;
  static deserializeBinaryFromReader(message: ResponseUserDelete, reader: jspb.BinaryReader): ResponseUserDelete;
}

export namespace ResponseUserDelete {
  export type AsObject = {
  }
}

export class RequestParentDelete extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestParentDelete;
  clearIdsList(): RequestParentDelete;
  addIds(value: string, index?: number): RequestParentDelete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParentDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParentDelete): RequestParentDelete.AsObject;
  static serializeBinaryToWriter(message: RequestParentDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParentDelete;
  static deserializeBinaryFromReader(message: RequestParentDelete, reader: jspb.BinaryReader): RequestParentDelete;
}

export namespace RequestParentDelete {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class ResponseParentDelete extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParentDelete.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParentDelete): ResponseParentDelete.AsObject;
  static serializeBinaryToWriter(message: ResponseParentDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParentDelete;
  static deserializeBinaryFromReader(message: ResponseParentDelete, reader: jspb.BinaryReader): ResponseParentDelete;
}

export namespace ResponseParentDelete {
  export type AsObject = {
  }
}

export class RequestUserLabelAttach extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestUserLabelAttach;
  clearIdsList(): RequestUserLabelAttach;
  addIds(value: string, index?: number): RequestUserLabelAttach;

  getUserLabelId(): string;
  setUserLabelId(value: string): RequestUserLabelAttach;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserLabelAttach.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserLabelAttach): RequestUserLabelAttach.AsObject;
  static serializeBinaryToWriter(message: RequestUserLabelAttach, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserLabelAttach;
  static deserializeBinaryFromReader(message: RequestUserLabelAttach, reader: jspb.BinaryReader): RequestUserLabelAttach;
}

export namespace RequestUserLabelAttach {
  export type AsObject = {
    idsList: Array<string>,
    userLabelId: string,
  }
}

export class RequestUserLabelUpdate extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestUserLabelUpdate;
  clearIdsList(): RequestUserLabelUpdate;
  addIds(value: string, index?: number): RequestUserLabelUpdate;

  getUserLabelIdsList(): Array<string>;
  setUserLabelIdsList(value: Array<string>): RequestUserLabelUpdate;
  clearUserLabelIdsList(): RequestUserLabelUpdate;
  addUserLabelIds(value: string, index?: number): RequestUserLabelUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserLabelUpdate): RequestUserLabelUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestUserLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserLabelUpdate;
  static deserializeBinaryFromReader(message: RequestUserLabelUpdate, reader: jspb.BinaryReader): RequestUserLabelUpdate;
}

export namespace RequestUserLabelUpdate {
  export type AsObject = {
    idsList: Array<string>,
    userLabelIdsList: Array<string>,
  }
}

export class ResponseUserLabelUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserLabelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserLabelUpdate): ResponseUserLabelUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseUserLabelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserLabelUpdate;
  static deserializeBinaryFromReader(message: ResponseUserLabelUpdate, reader: jspb.BinaryReader): ResponseUserLabelUpdate;
}

export namespace ResponseUserLabelUpdate {
  export type AsObject = {
  }
}

export class ResponseUserLabelAttach extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserLabelAttach.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserLabelAttach): ResponseUserLabelAttach.AsObject;
  static serializeBinaryToWriter(message: ResponseUserLabelAttach, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserLabelAttach;
  static deserializeBinaryFromReader(message: ResponseUserLabelAttach, reader: jspb.BinaryReader): ResponseUserLabelAttach;
}

export namespace ResponseUserLabelAttach {
  export type AsObject = {
  }
}

export class RequestUserLabelDetach extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestUserLabelDetach;
  clearIdsList(): RequestUserLabelDetach;
  addIds(value: string, index?: number): RequestUserLabelDetach;

  getUserLabelId(): string;
  setUserLabelId(value: string): RequestUserLabelDetach;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserLabelDetach.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserLabelDetach): RequestUserLabelDetach.AsObject;
  static serializeBinaryToWriter(message: RequestUserLabelDetach, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserLabelDetach;
  static deserializeBinaryFromReader(message: RequestUserLabelDetach, reader: jspb.BinaryReader): RequestUserLabelDetach;
}

export namespace RequestUserLabelDetach {
  export type AsObject = {
    idsList: Array<string>,
    userLabelId: string,
  }
}

export class ResponseUserLabelDetach extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserLabelDetach.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserLabelDetach): ResponseUserLabelDetach.AsObject;
  static serializeBinaryToWriter(message: ResponseUserLabelDetach, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserLabelDetach;
  static deserializeBinaryFromReader(message: ResponseUserLabelDetach, reader: jspb.BinaryReader): ResponseUserLabelDetach;
}

export namespace ResponseUserLabelDetach {
  export type AsObject = {
  }
}

export class RequestUserPasswordUpdate extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestUserPasswordUpdate;
  clearIdsList(): RequestUserPasswordUpdate;
  addIds(value: string, index?: number): RequestUserPasswordUpdate;

  getNewPassword(): string;
  setNewPassword(value: string): RequestUserPasswordUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUserPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUserPasswordUpdate): RequestUserPasswordUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestUserPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUserPasswordUpdate;
  static deserializeBinaryFromReader(message: RequestUserPasswordUpdate, reader: jspb.BinaryReader): RequestUserPasswordUpdate;
}

export namespace RequestUserPasswordUpdate {
  export type AsObject = {
    idsList: Array<string>,
    newPassword: string,
  }
}

export class ResponseUserPasswordUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUserPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUserPasswordUpdate): ResponseUserPasswordUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseUserPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUserPasswordUpdate;
  static deserializeBinaryFromReader(message: ResponseUserPasswordUpdate, reader: jspb.BinaryReader): ResponseUserPasswordUpdate;
}

export namespace ResponseUserPasswordUpdate {
  export type AsObject = {
  }
}

export class RequestParentPasswordUpdate extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RequestParentPasswordUpdate;
  clearIdsList(): RequestParentPasswordUpdate;
  addIds(value: string, index?: number): RequestParentPasswordUpdate;

  getNewPassword(): string;
  setNewPassword(value: string): RequestParentPasswordUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestParentPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestParentPasswordUpdate): RequestParentPasswordUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestParentPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestParentPasswordUpdate;
  static deserializeBinaryFromReader(message: RequestParentPasswordUpdate, reader: jspb.BinaryReader): RequestParentPasswordUpdate;
}

export namespace RequestParentPasswordUpdate {
  export type AsObject = {
    idsList: Array<string>,
    newPassword: string,
  }
}

export class ResponseParentPasswordUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseParentPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseParentPasswordUpdate): ResponseParentPasswordUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseParentPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseParentPasswordUpdate;
  static deserializeBinaryFromReader(message: ResponseParentPasswordUpdate, reader: jspb.BinaryReader): ResponseParentPasswordUpdate;
}

export namespace ResponseParentPasswordUpdate {
  export type AsObject = {
  }
}

