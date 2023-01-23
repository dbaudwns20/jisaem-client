// package: class
// file: class/class_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as auth_auth_message_pb from "../auth/auth_message_pb";
import * as label_label_message_pb from "../label/label_message_pb";

export class Class extends jspb.Message {
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

  clearTeachersList(): void;
  getTeachersList(): Array<ClassParticipant>;
  setTeachersList(value: Array<ClassParticipant>): void;
  addTeachers(value?: ClassParticipant, index?: number): ClassParticipant;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasClassLabel(): boolean;
  clearClassLabel(): void;
  getClassLabel(): label_label_message_pb.Label | undefined;
  setClassLabel(value?: label_label_message_pb.Label): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasClosedAt(): boolean;
  clearClosedAt(): void;
  getClosedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPublicExposedAt(): boolean;
  clearPublicExposedAt(): void;
  getPublicExposedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublicExposedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearClassParticipantsList(): void;
  getClassParticipantsList(): Array<ClassParticipant>;
  setClassParticipantsList(value: Array<ClassParticipant>): void;
  addClassParticipants(value?: ClassParticipant, index?: number): ClassParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Class.AsObject;
  static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Class;
  static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
}

export namespace Class {
  export type AsObject = {
    uid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    teachersList: Array<ClassParticipant.AsObject>,
    name: string,
    description: string,
    classLabel?: label_label_message_pb.Label.AsObject,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicExposedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    classParticipantsList: Array<ClassParticipant.AsObject>,
  }
}

export class ClassParticipant extends jspb.Message {
  getUserUid(): string;
  setUserUid(value: string): void;

  getAuthLevel(): auth_auth_message_pb.LevelMap[keyof auth_auth_message_pb.LevelMap];
  setAuthLevel(value: auth_auth_message_pb.LevelMap[keyof auth_auth_message_pb.LevelMap]): void;

  getName(): string;
  setName(value: string): void;

  hasUserLabel(): boolean;
  clearUserLabel(): void;
  getUserLabel(): label_label_message_pb.Label | undefined;
  setUserLabel(value?: label_label_message_pb.Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: ClassParticipant): ClassParticipant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassParticipant;
  static deserializeBinaryFromReader(message: ClassParticipant, reader: jspb.BinaryReader): ClassParticipant;
}

export namespace ClassParticipant {
  export type AsObject = {
    userUid: string,
    authLevel: auth_auth_message_pb.LevelMap[keyof auth_auth_message_pb.LevelMap],
    name: string,
    userLabel?: label_label_message_pb.Label.AsObject,
  }
}

