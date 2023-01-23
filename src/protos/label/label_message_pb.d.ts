import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Label extends jspb.Message {
  getUid(): string;
  setUid(value: string): Label;

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
    uid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelType: LabelType,
    name: string,
    description: string,
    color: string,
  }
}

export enum LabelType { 
  LABEL_TYPE_UNSPECIFIED = 0,
  LABEL_TYPE_USER = 1,
  LABEL_TYPE_CLASS = 2,
  LABEL_TYPE_TEST = 3,
  LABEL_TYPE_HOMEWORK = 4,
}
