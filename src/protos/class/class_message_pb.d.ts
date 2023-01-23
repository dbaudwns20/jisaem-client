import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as auth_auth_message_pb from '../auth/auth_message_pb';
import * as label_label_message_pb from '../label/label_message_pb';


export class Class extends jspb.Message {
  getUid(): string;
  setUid(value: string): Class;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Class;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Class;

  getTeachersList(): Array<ClassParticipant>;
  setTeachersList(value: Array<ClassParticipant>): Class;
  clearTeachersList(): Class;
  addTeachers(value?: ClassParticipant, index?: number): ClassParticipant;

  getName(): string;
  setName(value: string): Class;

  getDescription(): string;
  setDescription(value: string): Class;

  getClassLabel(): label_label_message_pb.Label | undefined;
  setClassLabel(value?: label_label_message_pb.Label): Class;
  hasClassLabel(): boolean;
  clearClassLabel(): Class;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasStartDate(): boolean;
  clearStartDate(): Class;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasEndDate(): boolean;
  clearEndDate(): Class;

  getClosedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosedAt(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasClosedAt(): boolean;
  clearClosedAt(): Class;

  getPublicExposedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublicExposedAt(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasPublicExposedAt(): boolean;
  clearPublicExposedAt(): Class;

  getClassParticipantsList(): Array<ClassParticipant>;
  setClassParticipantsList(value: Array<ClassParticipant>): Class;
  clearClassParticipantsList(): Class;
  addClassParticipants(value?: ClassParticipant, index?: number): ClassParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Class.AsObject;
  static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
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
  setUserUid(value: string): ClassParticipant;

  getAuthLevel(): auth_auth_message_pb.Level;
  setAuthLevel(value: auth_auth_message_pb.Level): ClassParticipant;

  getName(): string;
  setName(value: string): ClassParticipant;

  getUserLabel(): label_label_message_pb.Label | undefined;
  setUserLabel(value?: label_label_message_pb.Label): ClassParticipant;
  hasUserLabel(): boolean;
  clearUserLabel(): ClassParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: ClassParticipant): ClassParticipant.AsObject;
  static serializeBinaryToWriter(message: ClassParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassParticipant;
  static deserializeBinaryFromReader(message: ClassParticipant, reader: jspb.BinaryReader): ClassParticipant;
}

export namespace ClassParticipant {
  export type AsObject = {
    userUid: string,
    authLevel: auth_auth_message_pb.Level,
    name: string,
    userLabel?: label_label_message_pb.Label.AsObject,
  }
}

