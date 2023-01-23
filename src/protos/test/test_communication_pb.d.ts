// package: test
// file: test/test_communication.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as test_test_message_pb from "../test/test_message_pb";
import * as utils_utils_pb from "../utils/utils_pb";

export class RequestTestCreate extends jspb.Message {
  getClassUid(): string;
  setClassUid(value: string): void;

  hasTest(): boolean;
  clearTest(): void;
  getTest(): test_test_message_pb.Test | undefined;
  setTest(value?: test_test_message_pb.Test): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestCreate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestCreate): RequestTestCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  hasTest(): boolean;
  clearTest(): void;
  getTest(): test_test_message_pb.Test | undefined;
  setTest(value?: test_test_message_pb.Test): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestCreate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestCreate): ResponseTestCreate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  getTestUid(): string;
  setTestUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestGet): RequestTestGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  hasTest(): boolean;
  clearTest(): void;
  getTest(): test_test_message_pb.Test | undefined;
  setTest(value?: test_test_message_pb.Test): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestGet): ResponseTestGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearTestLabelUidsList(): void;
  getTestLabelUidsList(): Array<string>;
  setTestLabelUidsList(value: Array<string>): void;
  addTestLabelUids(value: string, index?: number): string;

  getClosedTest(): boolean;
  setClosedTest(value: boolean): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestListGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestListGet): RequestTestListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearTestsList(): void;
  getTestsList(): Array<test_test_message_pb.Test>;
  setTestsList(value: Array<test_test_message_pb.Test>): void;
  addTests(value?: test_test_message_pb.Test, index?: number): test_test_message_pb.Test;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): utils_utils_pb.Pagination | undefined;
  setPagination(value?: utils_utils_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestListGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestListGet): ResponseTestListGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  getTestUid(): string;
  setTestUid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRound(): number;
  setRound(value: number): void;

  getTestLabelUid(): string;
  setTestLabelUid(value: string): void;

  getExposeRankType(): test_test_message_pb.ExposeRankTypeMap[keyof test_test_message_pb.ExposeRankTypeMap];
  setExposeRankType(value: test_test_message_pb.ExposeRankTypeMap[keyof test_test_message_pb.ExposeRankTypeMap]): void;

  hasStartAt(): boolean;
  clearStartAt(): void;
  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndAt(): boolean;
  clearEndAt(): void;
  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getClose(): boolean;
  setClose(value: boolean): void;

  getPublicExpose(): boolean;
  setPublicExpose(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestUpdate): RequestTestUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestTestUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestTestUpdate;
  static deserializeBinaryFromReader(message: RequestTestUpdate, reader: jspb.BinaryReader): RequestTestUpdate;
}

export namespace RequestTestUpdate {
  export type AsObject = {
    classUid: string,
    testUid: string,
    name: string,
    description: string,
    round: number,
    testLabelUid: string,
    exposeRankType: test_test_message_pb.ExposeRankTypeMap[keyof test_test_message_pb.ExposeRankTypeMap],
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    close: boolean,
    publicExpose: boolean,
  }
}

export class ResponseTestUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestUpdate): ResponseTestUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseTestUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTestUpdate;
  static deserializeBinaryFromReader(message: ResponseTestUpdate, reader: jspb.BinaryReader): ResponseTestUpdate;
}

export namespace ResponseTestUpdate {
  export type AsObject = {
  }
}

export class RequestTestDelete extends jspb.Message {
  clearTestUidsList(): void;
  getTestUidsList(): Array<string>;
  setTestUidsList(value: Array<string>): void;
  addTestUids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestDelete.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestDelete): RequestTestDelete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestNextRoundGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestNextRoundGet): RequestTestNextRoundGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setNextRound(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTestNextRoundGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTestNextRoundGet): ResponseTestNextRoundGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  getTestUid(): string;
  setTestUid(value: string): void;

  clearExpectedGradesList(): void;
  getExpectedGradesList(): Array<test_test_message_pb.TestExpectedGrade>;
  setExpectedGradesList(value: Array<test_test_message_pb.TestExpectedGrade>): void;
  addExpectedGrades(value?: test_test_message_pb.TestExpectedGrade, index?: number): test_test_message_pb.TestExpectedGrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestExpectedGradeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestExpectedGradeUpdate): RequestExpectedGradeUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  getTestUid(): string;
  setTestUid(value: string): void;

  clearScoresList(): void;
  getScoresList(): Array<test_test_message_pb.TestScore>;
  setScoresList(value: Array<test_test_message_pb.TestScore>): void;
  addScores(value?: test_test_message_pb.TestScore, index?: number): test_test_message_pb.TestScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestTestScoreUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestTestScoreUpdate): RequestTestScoreUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestClassTestScoreGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestClassTestScoreGet): RequestClassTestScoreGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClassUid(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStudentTestScoreGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStudentTestScoreGet): RequestStudentTestScoreGet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseStudentTestScoreGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStudentTestScoreGet;
  static deserializeBinaryFromReader(message: ResponseStudentTestScoreGet, reader: jspb.BinaryReader): ResponseStudentTestScoreGet;
}

export namespace ResponseStudentTestScoreGet {
  export type AsObject = {
  }
}

