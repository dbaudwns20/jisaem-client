import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Label extends jspb.Message {
  getId(): string;
  setId(value: string): Label;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Label;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Label;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Label;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Label;

  getLabelType(): LabelType;
  setLabelType(value: LabelType): Label;

  getName(): string;
  setName(value: string): Label;

  getDescription(): string;
  setDescription(value: string): Label;

  getColor(): string;
  setColor(value: string): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelType: LabelType,
    name: string,
    description: string,
    color: string,
  }
}

export class UserLabel extends jspb.Message {
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserLabel;
  hasCreatedAt(): boolean;
  clearCreatedAt(): UserLabel;

  getUserId(): string;
  setUserId(value: string): UserLabel;

  getLabelInfo(): Label | undefined;
  setLabelInfo(value?: Label): UserLabel;
  hasLabelInfo(): boolean;
  clearLabelInfo(): UserLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLabel.AsObject;
  static toObject(includeInstance: boolean, msg: UserLabel): UserLabel.AsObject;
  static serializeBinaryToWriter(message: UserLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLabel;
  static deserializeBinaryFromReader(message: UserLabel, reader: jspb.BinaryReader): UserLabel;
}

export namespace UserLabel {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId: string,
    labelInfo?: Label.AsObject,
  }
}

export class ClassLabel extends jspb.Message {
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClassLabel;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ClassLabel;

  getClassId(): string;
  setClassId(value: string): ClassLabel;

  getLabelInfo(): Label | undefined;
  setLabelInfo(value?: Label): ClassLabel;
  hasLabelInfo(): boolean;
  clearLabelInfo(): ClassLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassLabel.AsObject;
  static toObject(includeInstance: boolean, msg: ClassLabel): ClassLabel.AsObject;
  static serializeBinaryToWriter(message: ClassLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassLabel;
  static deserializeBinaryFromReader(message: ClassLabel, reader: jspb.BinaryReader): ClassLabel;
}

export namespace ClassLabel {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    classId: string,
    labelInfo?: Label.AsObject,
  }
}

export enum LabelType { 
  LABEL_TYPE_UNSPECIFIED = 0,
  LABEL_TYPE_USER = 1,
  LABEL_TYPE_CLASS = 2,
  LABEL_TYPE_TEST = 3,
  LABEL_TYPE_HOMEWORK = 4,
}
