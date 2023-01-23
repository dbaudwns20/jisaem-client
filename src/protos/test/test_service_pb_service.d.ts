// package: test
// file: test/test_service.proto

import * as test_test_service_pb from "../test/test_service_pb";
import * as test_test_communication_pb from "../test/test_communication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TestServiceTestCreate = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestCreate;
  readonly responseType: typeof test_test_communication_pb.ResponseTestCreate;
};

type TestServiceTestGet = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestGet;
  readonly responseType: typeof test_test_communication_pb.ResponseTestGet;
};

type TestServiceTestListGet = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestListGet;
  readonly responseType: typeof test_test_communication_pb.ResponseTestListGet;
};

type TestServiceTestUpdate = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestUpdate;
  readonly responseType: typeof test_test_communication_pb.ResponseTestUpdate;
};

type TestServiceTestDelete = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestDelete;
  readonly responseType: typeof test_test_communication_pb.ResponseTestDelete;
};

type TestServiceTestNextRoundGet = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestNextRoundGet;
  readonly responseType: typeof test_test_communication_pb.ResponseTestNextRoundGet;
};

type TestServiceExpectedGradeUpdate = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestExpectedGradeUpdate;
  readonly responseType: typeof test_test_communication_pb.ResponseExpectedGradeUpdate;
};

type TestServiceTestScoreUpdate = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestTestScoreUpdate;
  readonly responseType: typeof test_test_communication_pb.ResponseTestScoreUpdate;
};

type TestServiceClassTestScoreGet = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestClassTestScoreGet;
  readonly responseType: typeof test_test_communication_pb.ResponseClassTestScoreGet;
};

type TestServiceStudentTestScoreGet = {
  readonly methodName: string;
  readonly service: typeof TestService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof test_test_communication_pb.RequestStudentTestScoreGet;
  readonly responseType: typeof test_test_communication_pb.ResponseStudentTestScoreGet;
};

export class TestService {
  static readonly serviceName: string;
  static readonly TestCreate: TestServiceTestCreate;
  static readonly TestGet: TestServiceTestGet;
  static readonly TestListGet: TestServiceTestListGet;
  static readonly TestUpdate: TestServiceTestUpdate;
  static readonly TestDelete: TestServiceTestDelete;
  static readonly TestNextRoundGet: TestServiceTestNextRoundGet;
  static readonly ExpectedGradeUpdate: TestServiceExpectedGradeUpdate;
  static readonly TestScoreUpdate: TestServiceTestScoreUpdate;
  static readonly ClassTestScoreGet: TestServiceClassTestScoreGet;
  static readonly StudentTestScoreGet: TestServiceStudentTestScoreGet;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TestServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  testCreate(
    requestMessage: test_test_communication_pb.RequestTestCreate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestCreate|null) => void
  ): UnaryResponse;
  testCreate(
    requestMessage: test_test_communication_pb.RequestTestCreate,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestCreate|null) => void
  ): UnaryResponse;
  testGet(
    requestMessage: test_test_communication_pb.RequestTestGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestGet|null) => void
  ): UnaryResponse;
  testGet(
    requestMessage: test_test_communication_pb.RequestTestGet,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestGet|null) => void
  ): UnaryResponse;
  testListGet(
    requestMessage: test_test_communication_pb.RequestTestListGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestListGet|null) => void
  ): UnaryResponse;
  testListGet(
    requestMessage: test_test_communication_pb.RequestTestListGet,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestListGet|null) => void
  ): UnaryResponse;
  testUpdate(
    requestMessage: test_test_communication_pb.RequestTestUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestUpdate|null) => void
  ): UnaryResponse;
  testUpdate(
    requestMessage: test_test_communication_pb.RequestTestUpdate,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestUpdate|null) => void
  ): UnaryResponse;
  testDelete(
    requestMessage: test_test_communication_pb.RequestTestDelete,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestDelete|null) => void
  ): UnaryResponse;
  testDelete(
    requestMessage: test_test_communication_pb.RequestTestDelete,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestDelete|null) => void
  ): UnaryResponse;
  testNextRoundGet(
    requestMessage: test_test_communication_pb.RequestTestNextRoundGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestNextRoundGet|null) => void
  ): UnaryResponse;
  testNextRoundGet(
    requestMessage: test_test_communication_pb.RequestTestNextRoundGet,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestNextRoundGet|null) => void
  ): UnaryResponse;
  expectedGradeUpdate(
    requestMessage: test_test_communication_pb.RequestExpectedGradeUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseExpectedGradeUpdate|null) => void
  ): UnaryResponse;
  expectedGradeUpdate(
    requestMessage: test_test_communication_pb.RequestExpectedGradeUpdate,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseExpectedGradeUpdate|null) => void
  ): UnaryResponse;
  testScoreUpdate(
    requestMessage: test_test_communication_pb.RequestTestScoreUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestScoreUpdate|null) => void
  ): UnaryResponse;
  testScoreUpdate(
    requestMessage: test_test_communication_pb.RequestTestScoreUpdate,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseTestScoreUpdate|null) => void
  ): UnaryResponse;
  classTestScoreGet(
    requestMessage: test_test_communication_pb.RequestClassTestScoreGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseClassTestScoreGet|null) => void
  ): UnaryResponse;
  classTestScoreGet(
    requestMessage: test_test_communication_pb.RequestClassTestScoreGet,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseClassTestScoreGet|null) => void
  ): UnaryResponse;
  studentTestScoreGet(
    requestMessage: test_test_communication_pb.RequestStudentTestScoreGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseStudentTestScoreGet|null) => void
  ): UnaryResponse;
  studentTestScoreGet(
    requestMessage: test_test_communication_pb.RequestStudentTestScoreGet,
    callback: (error: ServiceError|null, responseMessage: test_test_communication_pb.ResponseStudentTestScoreGet|null) => void
  ): UnaryResponse;
}

