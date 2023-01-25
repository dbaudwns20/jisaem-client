import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as test_test_message_pb from '../test/test_message_pb';
import * as utils_utils_pb from '../utils/utils_pb';


export class RequestTestCreate extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestTestCreate;

  getTest(): test_test_message_pb.Test | undefined;
  setTest(value?: test_test_message_pb.Test): RequestTestCreate;
  hasTest(): boolean;
  clearTest(): RequestTestCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestCreate): RequestTestCreate.AsObject;
  static serializeBinaryToWriter(message: RequestTestCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestCreate;
  static deserializeBinaryFromReader(message: RequestTestCreate, reader: jspb.BinaryReader): RequestTestCreate;
}

export namespace RequestTestCreate {
  export type AsObject = {
    classUid: string,
    test?: test_test_message_pb.Test.AsObject,
  }
}

export class ResponseTestCreate extends jspb.Message {
  getTest(): test_test_message_pb.Test | undefined;
  setTest(value?: test_test_message_pb.Test): ResponseTestCreate;
  hasTest(): boolean;
  clearTest(): ResponseTestCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestCreate): ResponseTestCreate.AsObject;
  static serializeBinaryToWriter(message: ResponseTestCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestCreate;
  static deserializeBinaryFromReader(message: ResponseTestCreate, reader: jspb.BinaryReader): ResponseTestCreate;
}

export namespace ResponseTestCreate {
  export type AsObject = {
    test?: test_test_message_pb.Test.AsObject,
  }
}

export class RequestTestGet extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestTestGet;

  getTestUid(): string;
  setTestUid(value: string): RequestTestGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestGet): RequestTestGet.AsObject;
  static serializeBinaryToWriter(message: RequestTestGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestGet;
  static deserializeBinaryFromReader(message: RequestTestGet, reader: jspb.BinaryReader): RequestTestGet;
}

export namespace RequestTestGet {
  export type AsObject = {
    classUid: string,
    testUid: string,
  }
}

export class ResponseTestGet extends jspb.Message {
  getTest(): test_test_message_pb.Test | undefined;
  setTest(value?: test_test_message_pb.Test): ResponseTestGet;
  hasTest(): boolean;
  clearTest(): ResponseTestGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestGet): ResponseTestGet.AsObject;
  static serializeBinaryToWriter(message: ResponseTestGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestGet;
  static deserializeBinaryFromReader(message: ResponseTestGet, reader: jspb.BinaryReader): ResponseTestGet;
}

export namespace ResponseTestGet {
  export type AsObject = {
    test?: test_test_message_pb.Test.AsObject,
  }
}

export class RequestTestListGet extends jspb.Message {
  getTestLabelUidsList(): Array<string>;
  setTestLabelUidsList(value: Array<string>): RequestTestListGet;
  clearTestLabelUidsList(): RequestTestListGet;
  addTestLabelUids(value: string, index?: number): RequestTestListGet;

  getClosedTest(): boolean;
  setClosedTest(value: boolean): RequestTestListGet;

  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): RequestTestListGet;
  hasPagination(): boolean;
  clearPagination(): RequestTestListGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestListGet): RequestTestListGet.AsObject;
  static serializeBinaryToWriter(message: RequestTestListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestListGet;
  static deserializeBinaryFromReader(message: RequestTestListGet, reader: jspb.BinaryReader): RequestTestListGet;
}

export namespace RequestTestListGet {
  export type AsObject = {
    testLabelUidsList: Array<string>,
    closedTest: boolean,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class ResponseTestListGet extends jspb.Message {
  getTestsList(): Array<test_test_message_pb.Test>;
  setTestsList(value: Array<test_test_message_pb.Test>): ResponseTestListGet;
  clearTestsList(): ResponseTestListGet;
  addTests(value?: test_test_message_pb.Test, index?: number): test_test_message_pb.Test;

  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): ResponseTestListGet;
  hasPagination(): boolean;
  clearPagination(): ResponseTestListGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestListGet): ResponseTestListGet.AsObject;
  static serializeBinaryToWriter(message: ResponseTestListGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestListGet;
  static deserializeBinaryFromReader(message: ResponseTestListGet, reader: jspb.BinaryReader): ResponseTestListGet;
}

export namespace ResponseTestListGet {
  export type AsObject = {
    testsList: Array<test_test_message_pb.Test.AsObject>,
    pagination?: utils_utils_pb.Pagination.AsObject,
  }
}

export class RequestTestUpdate extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestTestUpdate;

  getTestUid(): string;
  setTestUid(value: string): RequestTestUpdate;

  getName(): string;
  setName(value: string): RequestTestUpdate;
  hasName(): boolean;
  clearName(): RequestTestUpdate;

  getDescription(): string;
  setDescription(value: string): RequestTestUpdate;
  hasDescription(): boolean;
  clearDescription(): RequestTestUpdate;

  getRound(): number;
  setRound(value: number): RequestTestUpdate;
  hasRound(): boolean;
  clearRound(): RequestTestUpdate;

  getTestLabelUid(): string;
  setTestLabelUid(value: string): RequestTestUpdate;
  hasTestLabelUid(): boolean;
  clearTestLabelUid(): RequestTestUpdate;

  getExposeRankType(): test_test_message_pb.ExposeRankType;
  setExposeRankType(value: test_test_message_pb.ExposeRankType): RequestTestUpdate;
  hasExposeRankType(): boolean;
  clearExposeRankType(): RequestTestUpdate;

  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): RequestTestUpdate;
  hasStartAt(): boolean;
  clearStartAt(): RequestTestUpdate;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): RequestTestUpdate;
  hasEndAt(): boolean;
  clearEndAt(): RequestTestUpdate;

  getClose(): boolean;
  setClose(value: boolean): RequestTestUpdate;
  hasClose(): boolean;
  clearClose(): RequestTestUpdate;

  getPublicExpose(): boolean;
  setPublicExpose(value: boolean): RequestTestUpdate;
  hasPublicExpose(): boolean;
  clearPublicExpose(): RequestTestUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestUpdate): RequestTestUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestTestUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestUpdate;
  static deserializeBinaryFromReader(message: RequestTestUpdate, reader: jspb.BinaryReader): RequestTestUpdate;
}

export namespace RequestTestUpdate {
  export type AsObject = {
    classUid: string,
    testUid: string,
    name?: string,
    description?: string,
    round?: number,
    testLabelUid?: string,
    exposeRankType?: test_test_message_pb.ExposeRankType,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    close?: boolean,
    publicExpose?: boolean,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 3,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 4,
  }

  export enum RoundCase { 
    _ROUND_NOT_SET = 0,
    ROUND = 5,
  }

  export enum TestLabelUidCase { 
    _TEST_LABEL_UID_NOT_SET = 0,
    TEST_LABEL_UID = 6,
  }

  export enum ExposeRankTypeCase { 
    _EXPOSE_RANK_TYPE_NOT_SET = 0,
    EXPOSE_RANK_TYPE = 7,
  }

  export enum StartAtCase { 
    _START_AT_NOT_SET = 0,
    START_AT = 8,
  }

  export enum EndAtCase { 
    _END_AT_NOT_SET = 0,
    END_AT = 9,
  }

  export enum CloseCase { 
    _CLOSE_NOT_SET = 0,
    CLOSE = 10,
  }

  export enum PublicExposeCase { 
    _PUBLIC_EXPOSE_NOT_SET = 0,
    PUBLIC_EXPOSE = 11,
  }
}

export class ResponseTestUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestUpdate): ResponseTestUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseTestUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestUpdate;
  static deserializeBinaryFromReader(message: ResponseTestUpdate, reader: jspb.BinaryReader): ResponseTestUpdate;
}

export namespace ResponseTestUpdate {
  export type AsObject = {
  }
}

export class RequestTestDelete extends jspb.Message {
  getTestUidsList(): Array<string>;
  setTestUidsList(value: Array<string>): RequestTestDelete;
  clearTestUidsList(): RequestTestDelete;
  addTestUids(value: string, index?: number): RequestTestDelete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestDelete): RequestTestDelete.AsObject;
  static serializeBinaryToWriter(message: RequestTestDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestDelete;
  static deserializeBinaryFromReader(message: RequestTestDelete, reader: jspb.BinaryReader): RequestTestDelete;
}

export namespace RequestTestDelete {
  export type AsObject = {
    testUidsList: Array<string>,
  }
}

export class ResponseTestDelete extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestDelete.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestDelete): ResponseTestDelete.AsObject;
  static serializeBinaryToWriter(message: ResponseTestDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestDelete;
  static deserializeBinaryFromReader(message: ResponseTestDelete, reader: jspb.BinaryReader): ResponseTestDelete;
}

export namespace ResponseTestDelete {
  export type AsObject = {
  }
}

export class RequestTestNextRoundGet extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestTestNextRoundGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestNextRoundGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestNextRoundGet): RequestTestNextRoundGet.AsObject;
  static serializeBinaryToWriter(message: RequestTestNextRoundGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestNextRoundGet;
  static deserializeBinaryFromReader(message: RequestTestNextRoundGet, reader: jspb.BinaryReader): RequestTestNextRoundGet;
}

export namespace RequestTestNextRoundGet {
  export type AsObject = {
    classUid: string,
  }
}

export class ResponseTestNextRoundGet extends jspb.Message {
  getNextRound(): number;
  setNextRound(value: number): ResponseTestNextRoundGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestNextRoundGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestNextRoundGet): ResponseTestNextRoundGet.AsObject;
  static serializeBinaryToWriter(message: ResponseTestNextRoundGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestNextRoundGet;
  static deserializeBinaryFromReader(message: ResponseTestNextRoundGet, reader: jspb.BinaryReader): ResponseTestNextRoundGet;
}

export namespace ResponseTestNextRoundGet {
  export type AsObject = {
    nextRound: number,
  }
}

export class RequestExpectedGradeUpdate extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestExpectedGradeUpdate;

  getTestUid(): string;
  setTestUid(value: string): RequestExpectedGradeUpdate;

  getExpectedGradesList(): Array<test_test_message_pb.TestExpectedGrade>;
  setExpectedGradesList(value: Array<test_test_message_pb.TestExpectedGrade>): RequestExpectedGradeUpdate;
  clearExpectedGradesList(): RequestExpectedGradeUpdate;
  addExpectedGrades(value?: test_test_message_pb.TestExpectedGrade, index?: number): test_test_message_pb.TestExpectedGrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestExpectedGradeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestExpectedGradeUpdate): RequestExpectedGradeUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestExpectedGradeUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestExpectedGradeUpdate;
  static deserializeBinaryFromReader(message: RequestExpectedGradeUpdate, reader: jspb.BinaryReader): RequestExpectedGradeUpdate;
}

export namespace RequestExpectedGradeUpdate {
  export type AsObject = {
    classUid: string,
    testUid: string,
    expectedGradesList: Array<test_test_message_pb.TestExpectedGrade.AsObject>,
  }
}

export class ResponseExpectedGradeUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseExpectedGradeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseExpectedGradeUpdate): ResponseExpectedGradeUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseExpectedGradeUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseExpectedGradeUpdate;
  static deserializeBinaryFromReader(message: ResponseExpectedGradeUpdate, reader: jspb.BinaryReader): ResponseExpectedGradeUpdate;
}

export namespace ResponseExpectedGradeUpdate {
  export type AsObject = {
  }
}

export class RequestTestScoreUpdate extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestTestScoreUpdate;

  getTestUid(): string;
  setTestUid(value: string): RequestTestScoreUpdate;

  getScoresList(): Array<test_test_message_pb.TestScore>;
  setScoresList(value: Array<test_test_message_pb.TestScore>): RequestTestScoreUpdate;
  clearScoresList(): RequestTestScoreUpdate;
  addScores(value?: test_test_message_pb.TestScore, index?: number): test_test_message_pb.TestScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestScoreUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestScoreUpdate): RequestTestScoreUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestTestScoreUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestScoreUpdate;
  static deserializeBinaryFromReader(message: RequestTestScoreUpdate, reader: jspb.BinaryReader): RequestTestScoreUpdate;
}

export namespace RequestTestScoreUpdate {
  export type AsObject = {
    classUid: string,
    testUid: string,
    scoresList: Array<test_test_message_pb.TestScore.AsObject>,
  }
}

export class ResponseTestScoreUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestScoreUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestScoreUpdate): ResponseTestScoreUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseTestScoreUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestScoreUpdate;
  static deserializeBinaryFromReader(message: ResponseTestScoreUpdate, reader: jspb.BinaryReader): ResponseTestScoreUpdate;
}

export namespace ResponseTestScoreUpdate {
  export type AsObject = {
  }
}

export class RequestClassTestScoreGet extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestClassTestScoreGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassTestScoreGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassTestScoreGet): RequestClassTestScoreGet.AsObject;
  static serializeBinaryToWriter(message: RequestClassTestScoreGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestClassTestScoreGet;
  static deserializeBinaryFromReader(message: RequestClassTestScoreGet, reader: jspb.BinaryReader): RequestClassTestScoreGet;
}

export namespace RequestClassTestScoreGet {
  export type AsObject = {
    classUid: string,
  }
}

export class ResponseClassTestScoreGet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseClassTestScoreGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseClassTestScoreGet): ResponseClassTestScoreGet.AsObject;
  static serializeBinaryToWriter(message: ResponseClassTestScoreGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseClassTestScoreGet;
  static deserializeBinaryFromReader(message: ResponseClassTestScoreGet, reader: jspb.BinaryReader): ResponseClassTestScoreGet;
}

export namespace ResponseClassTestScoreGet {
  export type AsObject = {
  }
}

export class RequestStudentTestScoreGet extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): RequestStudentTestScoreGet;

  getUserId(): string;
  setUserId(value: string): RequestStudentTestScoreGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStudentTestScoreGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStudentTestScoreGet): RequestStudentTestScoreGet.AsObject;
  static serializeBinaryToWriter(message: RequestStudentTestScoreGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestStudentTestScoreGet;
  static deserializeBinaryFromReader(message: RequestStudentTestScoreGet, reader: jspb.BinaryReader): RequestStudentTestScoreGet;
}

export namespace RequestStudentTestScoreGet {
  export type AsObject = {
    classUid: string,
    userId: string,
  }
}

export class ResponseStudentTestScoreGet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStudentTestScoreGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStudentTestScoreGet): ResponseStudentTestScoreGet.AsObject;
  static serializeBinaryToWriter(message: ResponseStudentTestScoreGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStudentTestScoreGet;
  static deserializeBinaryFromReader(message: ResponseStudentTestScoreGet, reader: jspb.BinaryReader): ResponseStudentTestScoreGet;
}

export namespace ResponseStudentTestScoreGet {
  export type AsObject = {
  }
}

