/**
 * @fileoverview gRPC-Web generated client stub for test
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as test_test_communication_pb from '../test/test_communication_pb';


export class TestServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoTestCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestCreate,
    (request: test_test_communication_pb.RequestTestCreate) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestCreate.deserializeBinary
  );

  testCreate(
    request: test_test_communication_pb.RequestTestCreate,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestCreate>;

  testCreate(
    request: test_test_communication_pb.RequestTestCreate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestCreate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestCreate>;

  testCreate(
    request: test_test_communication_pb.RequestTestCreate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestCreate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestCreate',
        request,
        metadata || {},
        this.methodInfoTestCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestCreate',
    request,
    metadata || {},
    this.methodInfoTestCreate);
  }

  methodInfoTestGet = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestGet,
    (request: test_test_communication_pb.RequestTestGet) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestGet.deserializeBinary
  );

  testGet(
    request: test_test_communication_pb.RequestTestGet,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestGet>;

  testGet(
    request: test_test_communication_pb.RequestTestGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestGet>;

  testGet(
    request: test_test_communication_pb.RequestTestGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestGet',
        request,
        metadata || {},
        this.methodInfoTestGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestGet',
    request,
    metadata || {},
    this.methodInfoTestGet);
  }

  methodInfoTestListGet = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestListGet,
    (request: test_test_communication_pb.RequestTestListGet) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestListGet.deserializeBinary
  );

  testListGet(
    request: test_test_communication_pb.RequestTestListGet,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestListGet>;

  testListGet(
    request: test_test_communication_pb.RequestTestListGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestListGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestListGet>;

  testListGet(
    request: test_test_communication_pb.RequestTestListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestListGet',
        request,
        metadata || {},
        this.methodInfoTestListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestListGet',
    request,
    metadata || {},
    this.methodInfoTestListGet);
  }

  methodInfoTestUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestUpdate,
    (request: test_test_communication_pb.RequestTestUpdate) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestUpdate.deserializeBinary
  );

  testUpdate(
    request: test_test_communication_pb.RequestTestUpdate,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestUpdate>;

  testUpdate(
    request: test_test_communication_pb.RequestTestUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestUpdate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestUpdate>;

  testUpdate(
    request: test_test_communication_pb.RequestTestUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestUpdate',
        request,
        metadata || {},
        this.methodInfoTestUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestUpdate',
    request,
    metadata || {},
    this.methodInfoTestUpdate);
  }

  methodInfoTestDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestDelete,
    (request: test_test_communication_pb.RequestTestDelete) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestDelete.deserializeBinary
  );

  testDelete(
    request: test_test_communication_pb.RequestTestDelete,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestDelete>;

  testDelete(
    request: test_test_communication_pb.RequestTestDelete,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestDelete) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestDelete>;

  testDelete(
    request: test_test_communication_pb.RequestTestDelete,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestDelete) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestDelete',
        request,
        metadata || {},
        this.methodInfoTestDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestDelete',
    request,
    metadata || {},
    this.methodInfoTestDelete);
  }

  methodInfoTestNextRoundGet = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestNextRoundGet,
    (request: test_test_communication_pb.RequestTestNextRoundGet) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestNextRoundGet.deserializeBinary
  );

  testNextRoundGet(
    request: test_test_communication_pb.RequestTestNextRoundGet,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestNextRoundGet>;

  testNextRoundGet(
    request: test_test_communication_pb.RequestTestNextRoundGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestNextRoundGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestNextRoundGet>;

  testNextRoundGet(
    request: test_test_communication_pb.RequestTestNextRoundGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestNextRoundGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestNextRoundGet',
        request,
        metadata || {},
        this.methodInfoTestNextRoundGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestNextRoundGet',
    request,
    metadata || {},
    this.methodInfoTestNextRoundGet);
  }

  methodInfoExpectedGradeUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseExpectedGradeUpdate,
    (request: test_test_communication_pb.RequestExpectedGradeUpdate) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseExpectedGradeUpdate.deserializeBinary
  );

  expectedGradeUpdate(
    request: test_test_communication_pb.RequestExpectedGradeUpdate,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseExpectedGradeUpdate>;

  expectedGradeUpdate(
    request: test_test_communication_pb.RequestExpectedGradeUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseExpectedGradeUpdate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseExpectedGradeUpdate>;

  expectedGradeUpdate(
    request: test_test_communication_pb.RequestExpectedGradeUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseExpectedGradeUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/ExpectedGradeUpdate',
        request,
        metadata || {},
        this.methodInfoExpectedGradeUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/ExpectedGradeUpdate',
    request,
    metadata || {},
    this.methodInfoExpectedGradeUpdate);
  }

  methodInfoTestScoreUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseTestScoreUpdate,
    (request: test_test_communication_pb.RequestTestScoreUpdate) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseTestScoreUpdate.deserializeBinary
  );

  testScoreUpdate(
    request: test_test_communication_pb.RequestTestScoreUpdate,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseTestScoreUpdate>;

  testScoreUpdate(
    request: test_test_communication_pb.RequestTestScoreUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestScoreUpdate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestScoreUpdate>;

  testScoreUpdate(
    request: test_test_communication_pb.RequestTestScoreUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseTestScoreUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/TestScoreUpdate',
        request,
        metadata || {},
        this.methodInfoTestScoreUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/TestScoreUpdate',
    request,
    metadata || {},
    this.methodInfoTestScoreUpdate);
  }

  methodInfoClassTestScoreGet = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseClassTestScoreGet,
    (request: test_test_communication_pb.RequestClassTestScoreGet) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseClassTestScoreGet.deserializeBinary
  );

  classTestScoreGet(
    request: test_test_communication_pb.RequestClassTestScoreGet,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseClassTestScoreGet>;

  classTestScoreGet(
    request: test_test_communication_pb.RequestClassTestScoreGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseClassTestScoreGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseClassTestScoreGet>;

  classTestScoreGet(
    request: test_test_communication_pb.RequestClassTestScoreGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseClassTestScoreGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/ClassTestScoreGet',
        request,
        metadata || {},
        this.methodInfoClassTestScoreGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/ClassTestScoreGet',
    request,
    metadata || {},
    this.methodInfoClassTestScoreGet);
  }

  methodInfoStudentTestScoreGet = new grpcWeb.AbstractClientBase.MethodInfo(
    test_test_communication_pb.ResponseStudentTestScoreGet,
    (request: test_test_communication_pb.RequestStudentTestScoreGet) => {
      return request.serializeBinary();
    },
    test_test_communication_pb.ResponseStudentTestScoreGet.deserializeBinary
  );

  studentTestScoreGet(
    request: test_test_communication_pb.RequestStudentTestScoreGet,
    metadata: grpcWeb.Metadata | null): Promise<test_test_communication_pb.ResponseStudentTestScoreGet>;

  studentTestScoreGet(
    request: test_test_communication_pb.RequestStudentTestScoreGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseStudentTestScoreGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseStudentTestScoreGet>;

  studentTestScoreGet(
    request: test_test_communication_pb.RequestStudentTestScoreGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: test_test_communication_pb.ResponseStudentTestScoreGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/StudentTestScoreGet',
        request,
        metadata || {},
        this.methodInfoStudentTestScoreGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/StudentTestScoreGet',
    request,
    metadata || {},
    this.methodInfoStudentTestScoreGet);
  }

}

