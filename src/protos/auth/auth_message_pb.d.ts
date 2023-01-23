// package: auth
// file: auth/auth_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as label_label_message_pb from "../label/label_message_pb";

export class User extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthLevel(): LevelMap[keyof LevelMap];
  setAuthLevel(value: LevelMap[keyof LevelMap]): void;

  getUsername(): string;
  setUsername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  hasUserLabel(): boolean;
  clearUserLabel(): void;
  getUserLabel(): label_label_message_pb.Label | undefined;
  setUserLabel(value?: label_label_message_pb.Label): void;

  hasStudentInfo(): boolean;
  clearStudentInfo(): void;
  getStudentInfo(): StudentInfo | undefined;
  setStudentInfo(value?: StudentInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    uid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authLevel: LevelMap[keyof LevelMap],
    username: string,
    name: string,
    phone: string,
    email: string,
    userLabel?: label_label_message_pb.Label.AsObject,
    studentInfo?: StudentInfo.AsObject,
  }
}

export class StudentInfo extends jspb.Message {
  getSchool(): string;
  setSchool(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParentUsername(): string;
  setParentUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StudentInfo): StudentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StudentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentInfo;
  static deserializeBinaryFromReader(message: StudentInfo, reader: jspb.BinaryReader): StudentInfo;
}

export namespace StudentInfo {
  export type AsObject = {
    school: string,
    description: string,
    parentUsername: string,
  }
}

export interface SignInTypeMap {
  SIGN_IN_TYPE_UNSPECIFIED: 0;
  SIGN_IN_TYPE_NORMAL: 1;
  SIGN_IN_TYPE_PARENT: 2;
}

export const SignInType: SignInTypeMap;

export interface LevelMap {
  AUTH_LEVEL_UNSPECIFIED: 0;
  AUTH_LEVEL_STUDENT: 1;
  AUTH_LEVEL_TEACHER: 2;
  AUTH_LEVEL_MANAGER: 3;
  AUTH_LEVEL_SUPER: 4;
}

export const Level: LevelMap;

