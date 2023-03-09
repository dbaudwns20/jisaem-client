import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as auth_auth_message_pb from '../auth/auth_message_pb';
import * as label_label_message_pb from '../label/label_message_pb';


export class Class extends jspb.Message {
  getId(): string;
  setId(value: string): Class;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Class;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Class;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Class;

  getManagersList(): Array<ClassManager>;
  setManagersList(value: Array<ClassManager>): Class;
  clearManagersList(): Class;
  addManagers(value?: ClassManager, index?: number): ClassManager;

  getName(): string;
  setName(value: string): Class;

  getDescription(): string;
  setDescription(value: string): Class;

  getClassLabelsList(): Array<label_label_message_pb.ClassLabel>;
  setClassLabelsList(value: Array<label_label_message_pb.ClassLabel>): Class;
  clearClassLabelsList(): Class;
  addClassLabels(value?: label_label_message_pb.ClassLabel, index?: number): label_label_message_pb.ClassLabel;

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

  getParticipantsList(): Array<ClassParticipant>;
  setParticipantsList(value: Array<ClassParticipant>): Class;
  clearParticipantsList(): Class;
  addParticipants(value?: ClassParticipant, index?: number): ClassParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Class.AsObject;
  static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
  static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Class;
  static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
}

export namespace Class {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    managersList: Array<ClassManager.AsObject>,
    name: string,
    description: string,
    classLabelsList: Array<label_label_message_pb.ClassLabel.AsObject>,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicExposedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    participantsList: Array<ClassParticipant.AsObject>,
  }
}

export class ClassManager extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ClassManager;

  getAuthLevel(): auth_auth_message_pb.Level;
  setAuthLevel(value: auth_auth_message_pb.Level): ClassManager;

  getName(): string;
  setName(value: string): ClassManager;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassManager.AsObject;
  static toObject(includeInstance: boolean, msg: ClassManager): ClassManager.AsObject;
  static serializeBinaryToWriter(message: ClassManager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassManager;
  static deserializeBinaryFromReader(message: ClassManager, reader: jspb.BinaryReader): ClassManager;
}

export namespace ClassManager {
  export type AsObject = {
    userId: string,
    authLevel: auth_auth_message_pb.Level,
    name: string,
  }
}

export class ClassParticipant extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ClassParticipant;

  getAuthLevel(): auth_auth_message_pb.Level;
  setAuthLevel(value: auth_auth_message_pb.Level): ClassParticipant;

  getName(): string;
  setName(value: string): ClassParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: ClassParticipant): ClassParticipant.AsObject;
  static serializeBinaryToWriter(message: ClassParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassParticipant;
  static deserializeBinaryFromReader(message: ClassParticipant, reader: jspb.BinaryReader): ClassParticipant;
}

export namespace ClassParticipant {
  export type AsObject = {
    userId: string,
    authLevel: auth_auth_message_pb.Level,
    name: string,
  }
}

