// package: label
// file: label/label_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Label extends jspb.Message {
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

  getLabelType(): LabelTypeMap[keyof LabelTypeMap];
  setLabelType(value: LabelTypeMap[keyof LabelTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getColor(): string;
  setColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    uid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelType: LabelTypeMap[keyof LabelTypeMap],
    name: string,
    description: string,
    color: string,
  }
}

export interface LabelTypeMap {
  LABEL_TYPE_UNSPECIFIED: 0;
  LABEL_TYPE_USER: 1;
  LABEL_TYPE_CLASS: 2;
  LABEL_TYPE_TEST: 3;
  LABEL_TYPE_HOMEWORK: 4;
}

export const LabelType: LabelTypeMap;

