// package: test
// file: test/test_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as label_label_message_pb from "../label/label_message_pb";
import * as utils_utils_pb from "../utils/utils_pb";
import * as class_class_message_pb from "../class/class_message_pb";

export class Test extends jspb.Message {
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

  getClassUid(): string;
  setClassUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRound(): number;
  setRound(value: number): void;

  getAverage(): number;
  setAverage(value: number): void;

  getStDev(): number;
  setStDev(value: number): void;

  getHighScore(): number;
  setHighScore(value: number): void;

  getLowScore(): number;
  setLowScore(value: number): void;

  hasTestLabel(): boolean;
  clearTestLabel(): void;
  getTestLabel(): label_label_message_pb.Label | undefined;
  setTestLabel(value?: label_label_message_pb.Label): void;

  getExposeRankType(): ExposeRankTypeMap[keyof ExposeRankTypeMap];
  setExposeRankType(value: ExposeRankTypeMap[keyof ExposeRankTypeMap]): void;

  hasStartAt(): boolean;
  clearStartAt(): void;
  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndAt(): boolean;
  clearEndAt(): void;
  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasClosedAt(): boolean;
  clearClosedAt(): void;
  getClosedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPublicExposedAt(): boolean;
  clearPublicExposedAt(): void;
  getPublicExposedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublicExposedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearScoresList(): void;
  getScoresList(): Array<TestScore>;
  setScoresList(value: Array<TestScore>): void;
  addScores(value?: TestScore, index?: number): TestScore;

  clearExpectedGradesList(): void;
  getExpectedGradesList(): Array<TestExpectedGrade>;
  setExpectedGradesList(value: Array<TestExpectedGrade>): void;
  addExpectedGrades(value?: TestExpectedGrade, index?: number): TestExpectedGrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    uid: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    classUid: string,
    name: string,
    description: string,
    round: number,
    average: number,
    stDev: number,
    highScore: number,
    lowScore: number,
    testLabel?: label_label_message_pb.Label.AsObject,
    exposeRankType: ExposeRankTypeMap[keyof ExposeRankTypeMap],
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicExposedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    scoresList: Array<TestScore.AsObject>,
    expectedGradesList: Array<TestExpectedGrade.AsObject>,
  }
}

export class TestScore extends jspb.Message {
  hasStudent(): boolean;
  clearStudent(): void;
  getStudent(): class_class_message_pb.ClassParticipant | undefined;
  setStudent(value?: class_class_message_pb.ClassParticipant): void;

  getRank(): number;
  setRank(value: number): void;

  getScore(): number;
  setScore(value: number): void;

  getStandardScore(): number;
  setStandardScore(value: number): void;

  getPercentage(): number;
  setPercentage(value: number): void;

  getParticipated(): boolean;
  setParticipated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScore.AsObject;
  static toObject(includeInstance: boolean, msg: TestScore): TestScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScore;
  static deserializeBinaryFromReader(message: TestScore, reader: jspb.BinaryReader): TestScore;
}

export namespace TestScore {
  export type AsObject = {
    student?: class_class_message_pb.ClassParticipant.AsObject,
    rank: number,
    score: number,
    standardScore: number,
    percentage: number,
    participated: boolean,
  }
}

export class OverallTestScore extends jspb.Message {
  hasTest(): boolean;
  clearTest(): void;
  getTest(): Test | undefined;
  setTest(value?: Test): void;

  hasStudent(): boolean;
  clearStudent(): void;
  getStudent(): class_class_message_pb.ClassParticipant | undefined;
  setStudent(value?: class_class_message_pb.ClassParticipant): void;

  getOverallRank(): number;
  setOverallRank(value: number): void;

  getOverallAverageScore(): number;
  setOverallAverageScore(value: number): void;

  getOverallAverageStandardScore(): number;
  setOverallAverageStandardScore(value: number): void;

  getOverallPercentage(): number;
  setOverallPercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallTestScore.AsObject;
  static toObject(includeInstance: boolean, msg: OverallTestScore): OverallTestScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OverallTestScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallTestScore;
  static deserializeBinaryFromReader(message: OverallTestScore, reader: jspb.BinaryReader): OverallTestScore;
}

export namespace OverallTestScore {
  export type AsObject = {
    test?: Test.AsObject,
    student?: class_class_message_pb.ClassParticipant.AsObject,
    overallRank: number,
    overallAverageScore: number,
    overallAverageStandardScore: number,
    overallPercentage: number,
  }
}

export class TestExpectedGrade extends jspb.Message {
  getStandardScore(): number;
  setStandardScore(value: number): void;

  getGrade(): number;
  setGrade(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestExpectedGrade.AsObject;
  static toObject(includeInstance: boolean, msg: TestExpectedGrade): TestExpectedGrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestExpectedGrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestExpectedGrade;
  static deserializeBinaryFromReader(message: TestExpectedGrade, reader: jspb.BinaryReader): TestExpectedGrade;
}

export namespace TestExpectedGrade {
  export type AsObject = {
    standardScore: number,
    grade: number,
  }
}

export interface ExposeRankTypeMap {
  EXPOSE_RANK_TYPE_UNSPECIFIED: 0;
  EXPOSE_RANK_TYPE_ONLY_SELF: 1;
  EXPOSE_RANK_TYPE_FIRST: 2;
  EXPOSE_RANK_TYPE_SECOND: 3;
  EXPOSE_RANK_TYPE_THIRD: 4;
  EXPOSE_RANK_TYPE_ALL: 5;
}

export const ExposeRankType: ExposeRankTypeMap;

