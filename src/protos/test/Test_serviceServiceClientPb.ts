/**
 * @fileoverview gRPC-Web generated client stub for jisaem.test
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.15.8
// source: test/test_service.proto


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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorTestCreate = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestCreate',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestCreate,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestCreate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestCreate>;

  testCreate(
    request: test_test_communication_pb.RequestTestCreate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestCreate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestCreate',
        request,
        metadata || {},
        this.methodDescriptorTestCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestCreate',
    request,
    metadata || {},
    this.methodDescriptorTestCreate);
  }

  methodDescriptorTestGet = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestGet',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestGet,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestGet>;

  testGet(
    request: test_test_communication_pb.RequestTestGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestGet',
        request,
        metadata || {},
        this.methodDescriptorTestGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestGet',
    request,
    metadata || {},
    this.methodDescriptorTestGet);
  }

  methodDescriptorTestListGet = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestListGet',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestListGet,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestListGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestListGet>;

  testListGet(
    request: test_test_communication_pb.RequestTestListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestListGet',
        request,
        metadata || {},
        this.methodDescriptorTestListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestListGet',
    request,
    metadata || {},
    this.methodDescriptorTestListGet);
  }

  methodDescriptorTestUpdate = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestUpdate',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestUpdate,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestUpdate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestUpdate>;

  testUpdate(
    request: test_test_communication_pb.RequestTestUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestUpdate',
        request,
        metadata || {},
        this.methodDescriptorTestUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestUpdate',
    request,
    metadata || {},
    this.methodDescriptorTestUpdate);
  }

  methodDescriptorTestDelete = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestDelete',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestDelete,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestDelete) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestDelete>;

  testDelete(
    request: test_test_communication_pb.RequestTestDelete,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestDelete) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestDelete',
        request,
        metadata || {},
        this.methodDescriptorTestDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestDelete',
    request,
    metadata || {},
    this.methodDescriptorTestDelete);
  }

  methodDescriptorTestNextRoundGet = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestNextRoundGet',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestNextRoundGet,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestNextRoundGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestNextRoundGet>;

  testNextRoundGet(
    request: test_test_communication_pb.RequestTestNextRoundGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestNextRoundGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestNextRoundGet',
        request,
        metadata || {},
        this.methodDescriptorTestNextRoundGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestNextRoundGet',
    request,
    metadata || {},
    this.methodDescriptorTestNextRoundGet);
  }

  methodDescriptorExpectedGradeUpdate = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/ExpectedGradeUpdate',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestExpectedGradeUpdate,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseExpectedGradeUpdate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseExpectedGradeUpdate>;

  expectedGradeUpdate(
    request: test_test_communication_pb.RequestExpectedGradeUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseExpectedGradeUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/ExpectedGradeUpdate',
        request,
        metadata || {},
        this.methodDescriptorExpectedGradeUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/ExpectedGradeUpdate',
    request,
    metadata || {},
    this.methodDescriptorExpectedGradeUpdate);
  }

  methodDescriptorTestScoreUpdate = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/TestScoreUpdate',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestTestScoreUpdate,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestScoreUpdate) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseTestScoreUpdate>;

  testScoreUpdate(
    request: test_test_communication_pb.RequestTestScoreUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseTestScoreUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/TestScoreUpdate',
        request,
        metadata || {},
        this.methodDescriptorTestScoreUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/TestScoreUpdate',
    request,
    metadata || {},
    this.methodDescriptorTestScoreUpdate);
  }

  methodDescriptorClassTestScoreGet = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/ClassTestScoreGet',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestClassTestScoreGet,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseClassTestScoreGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseClassTestScoreGet>;

  classTestScoreGet(
    request: test_test_communication_pb.RequestClassTestScoreGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseClassTestScoreGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/ClassTestScoreGet',
        request,
        metadata || {},
        this.methodDescriptorClassTestScoreGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/ClassTestScoreGet',
    request,
    metadata || {},
    this.methodDescriptorClassTestScoreGet);
  }

  methodDescriptorStudentTestScoreGet = new grpcWeb.MethodDescriptor(
    '/jisaem.test.TestService/StudentTestScoreGet',
    grpcWeb.MethodType.UNARY,
    test_test_communication_pb.RequestStudentTestScoreGet,
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
    callback: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseStudentTestScoreGet) => void): grpcWeb.ClientReadableStream<test_test_communication_pb.ResponseStudentTestScoreGet>;

  studentTestScoreGet(
    request: test_test_communication_pb.RequestStudentTestScoreGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_test_communication_pb.ResponseStudentTestScoreGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.test.TestService/StudentTestScoreGet',
        request,
        metadata || {},
        this.methodDescriptorStudentTestScoreGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.test.TestService/StudentTestScoreGet',
    request,
    metadata || {},
    this.methodDescriptorStudentTestScoreGet);
  }

}
