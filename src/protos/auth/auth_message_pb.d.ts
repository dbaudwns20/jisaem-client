import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as label_label_message_pb from '../label/label_message_pb';


export class User extends jspb.Message {
  getUid(): string;
  setUid(value: string): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): User;

  getAuthLevel(): Level;
  setAuthLevel(value: Level): User;

  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getName(): string;
  setName(value: string): User;

  getPhone(): string;
  setPhone(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getUserLabel(): label_label_message_pb.Label | undefined;
  setUserLabel(value?: label_label_message_pb.Label): User;
  hasUserLabel(): boolean;
  clearUserLabel(): User;

  getStudentInfo(): StudentInfo | undefined;
  setStudentInfo(value?: StudentInfo): User;
  hasStudentInfo(): boolean;
  clearStudentInfo(): User;

  getParentInfo(): ParentInfo | undefined;
  setParentInfo(value?: ParentInfo): User;
  hasParentInfo(): boolean;
  clearParentInfo(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    uid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authLevel: Level,
    username: string,
    password: string,
    name: string,
    phone: string,
    email: string,
    userLabel?: label_label_message_pb.Label.AsObject,
    studentInfo?: StudentInfo.AsObject,
    parentInfo?: ParentInfo.AsObject,
  }
}

export class StudentInfo extends jspb.Message {
  getSchool(): string;
  setSchool(value: string): StudentInfo;

  getDescription(): string;
  setDescription(value: string): StudentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StudentInfo): StudentInfo.AsObject;
  static serializeBinaryToWriter(message: StudentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentInfo;
  static deserializeBinaryFromReader(message: StudentInfo, reader: jspb.BinaryReader): StudentInfo;
}

export namespace StudentInfo {
  export type AsObject = {
    school: string,
    description: string,
  }
}

export class ParentInfo extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ParentInfo;

  getPassword(): string;
  setPassword(value: string): ParentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ParentInfo): ParentInfo.AsObject;
  static serializeBinaryToWriter(message: ParentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentInfo;
  static deserializeBinaryFromReader(message: ParentInfo, reader: jspb.BinaryReader): ParentInfo;
}

export namespace ParentInfo {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export enum SignInType { 
  SIGN_IN_TYPE_UNSPECIFIED = 0,
  SIGN_IN_TYPE_NORMAL = 1,
  SIGN_IN_TYPE_PARENT = 2,
}
export enum Level { 
  AUTH_LEVEL_UNSPECIFIED = 0,
  AUTH_LEVEL_PARENT = 1,
  AUTH_LEVEL_STUDENT = 2,
  AUTH_LEVEL_TEACHER = 3,
  AUTH_LEVEL_MANAGER = 4,
  AUTH_LEVEL_SUPER = 5,
}
