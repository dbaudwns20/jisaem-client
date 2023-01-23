import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as label_label_message_pb from '../label/label_message_pb';
import * as class_class_message_pb from '../class/class_message_pb';


export class Test extends jspb.Message {
  getUid(): string;
  setUid(value: string): Test;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Test;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Test;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Test;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Test;

  getClassUid(): string;
  setClassUid(value: string): Test;

  getName(): string;
  setName(value: string): Test;

  getDescription(): string;
  setDescription(value: string): Test;

  getRound(): number;
  setRound(value: number): Test;

  getAverage(): number;
  setAverage(value: number): Test;

  getStDev(): number;
  setStDev(value: number): Test;

  getHighScore(): number;
  setHighScore(value: number): Test;

  getLowScore(): number;
  setLowScore(value: number): Test;

  getTestLabel(): label_label_message_pb.Label | undefined;
  setTestLabel(value?: label_label_message_pb.Label): Test;
  hasTestLabel(): boolean;
  clearTestLabel(): Test;

  getExposeRankType(): ExposeRankType;
  setExposeRankType(value: ExposeRankType): Test;

  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): Test;
  hasStartAt(): boolean;
  clearStartAt(): Test;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): Test;
  hasEndAt(): boolean;
  clearEndAt(): Test;

  getClosedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosedAt(value?: google_protobuf_timestamp_pb.Timestamp): Test;
  hasClosedAt(): boolean;
  clearClosedAt(): Test;

  getPublicExposedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublicExposedAt(value?: google_protobuf_timestamp_pb.Timestamp): Test;
  hasPublicExposedAt(): boolean;
  clearPublicExposedAt(): Test;

  getScoresList(): Array<TestScore>;
  setScoresList(value: Array<TestScore>): Test;
  clearScoresList(): Test;
  addScores(value?: TestScore, index?: number): TestScore;

  getExpectedGradesList(): Array<TestExpectedGrade>;
  setExpectedGradesList(value: Array<TestExpectedGrade>): Test;
  clearExpectedGradesList(): Test;
  addExpectedGrades(value?: TestExpectedGrade, index?: number): TestExpectedGrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
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
    exposeRankType: ExposeRankType,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicExposedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    scoresList: Array<TestScore.AsObject>,
    expectedGradesList: Array<TestExpectedGrade.AsObject>,
  }
}

export class TestScore extends jspb.Message {
  getStudent(): class_class_message_pb.ClassParticipant | undefined;
  setStudent(value?: class_class_message_pb.ClassParticipant): TestScore;
  hasStudent(): boolean;
  clearStudent(): TestScore;

  getRank(): number;
  setRank(value: number): TestScore;

  getScore(): number;
  setScore(value: number): TestScore;

  getStandardScore(): number;
  setStandardScore(value: number): TestScore;

  getPercentage(): number;
  setPercentage(value: number): TestScore;

  getParticipated(): boolean;
  setParticipated(value: boolean): TestScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScore.AsObject;
  static toObject(includeInstance: boolean, msg: TestScore): TestScore.AsObject;
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
  getTest(): Test | undefined;
  setTest(value?: Test): OverallTestScore;
  hasTest(): boolean;
  clearTest(): OverallTestScore;

  getStudent(): class_class_message_pb.ClassParticipant | undefined;
  setStudent(value?: class_class_message_pb.ClassParticipant): OverallTestScore;
  hasStudent(): boolean;
  clearStudent(): OverallTestScore;

  getOverallRank(): number;
  setOverallRank(value: number): OverallTestScore;

  getOverallAverageScore(): number;
  setOverallAverageScore(value: number): OverallTestScore;

  getOverallAverageStandardScore(): number;
  setOverallAverageStandardScore(value: number): OverallTestScore;

  getOverallPercentage(): number;
  setOverallPercentage(value: number): OverallTestScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallTestScore.AsObject;
  static toObject(includeInstance: boolean, msg: OverallTestScore): OverallTestScore.AsObject;
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
  setStandardScore(value: number): TestExpectedGrade;

  getGrade(): number;
  setGrade(value: number): TestExpectedGrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestExpectedGrade.AsObject;
  static toObject(includeInstance: boolean, msg: TestExpectedGrade): TestExpectedGrade.AsObject;
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

export enum ExposeRankType { 
  EXPOSE_RANK_TYPE_UNSPECIFIED = 0,
  EXPOSE_RANK_TYPE_ONLY_SELF = 1,
  EXPOSE_RANK_TYPE_FIRST = 2,
  EXPOSE_RANK_TYPE_SECOND = 3,
  EXPOSE_RANK_TYPE_THIRD = 4,
  EXPOSE_RANK_TYPE_ALL = 5,
}
