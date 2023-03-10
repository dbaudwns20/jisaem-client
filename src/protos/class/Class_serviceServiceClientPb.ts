/**
 * @fileoverview gRPC-Web generated client stub for jisaem.class
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: class/class_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as class_class_communication_pb from '../class/class_communication_pb';


export class ClassServiceClient {
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

  methodDescriptorClassCreateAsManager = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassCreateAsManager',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassCreateAsManager,
    class_class_communication_pb.ResponseClassCreateAsManager,
    (request: class_class_communication_pb.RequestClassCreateAsManager) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassCreateAsManager.deserializeBinary
  );

  classCreateAsManager(
    request: class_class_communication_pb.RequestClassCreateAsManager,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassCreateAsManager>;

  classCreateAsManager(
    request: class_class_communication_pb.RequestClassCreateAsManager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassCreateAsManager) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassCreateAsManager>;

  classCreateAsManager(
    request: class_class_communication_pb.RequestClassCreateAsManager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassCreateAsManager) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassCreateAsManager',
        request,
        metadata || {},
        this.methodDescriptorClassCreateAsManager,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassCreateAsManager',
    request,
    metadata || {},
    this.methodDescriptorClassCreateAsManager);
  }

  methodDescriptorClassCreateWithoutManager = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassCreateWithoutManager',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassCreateWithoutManager,
    class_class_communication_pb.ResponseClassCreateWithoutManager,
    (request: class_class_communication_pb.RequestClassCreateWithoutManager) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassCreateWithoutManager.deserializeBinary
  );

  classCreateWithoutManager(
    request: class_class_communication_pb.RequestClassCreateWithoutManager,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassCreateWithoutManager>;

  classCreateWithoutManager(
    request: class_class_communication_pb.RequestClassCreateWithoutManager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassCreateWithoutManager) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassCreateWithoutManager>;

  classCreateWithoutManager(
    request: class_class_communication_pb.RequestClassCreateWithoutManager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassCreateWithoutManager) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassCreateWithoutManager',
        request,
        metadata || {},
        this.methodDescriptorClassCreateWithoutManager,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassCreateWithoutManager',
    request,
    metadata || {},
    this.methodDescriptorClassCreateWithoutManager);
  }

  methodDescriptorClassListGet = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassListGet',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassListGet,
    class_class_communication_pb.ResponseClassListGet,
    (request: class_class_communication_pb.RequestClassListGet) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassListGet.deserializeBinary
  );

  classListGet(
    request: class_class_communication_pb.RequestClassListGet,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassListGet>;

  classListGet(
    request: class_class_communication_pb.RequestClassListGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassListGet) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassListGet>;

  classListGet(
    request: class_class_communication_pb.RequestClassListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassListGet',
        request,
        metadata || {},
        this.methodDescriptorClassListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassListGet',
    request,
    metadata || {},
    this.methodDescriptorClassListGet);
  }

  methodDescriptorClassDelete = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassDelete',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassDelete,
    class_class_communication_pb.ResponseClassDelete,
    (request: class_class_communication_pb.RequestClassDelete) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassDelete.deserializeBinary
  );

  classDelete(
    request: class_class_communication_pb.RequestClassDelete,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassDelete>;

  classDelete(
    request: class_class_communication_pb.RequestClassDelete,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassDelete) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassDelete>;

  classDelete(
    request: class_class_communication_pb.RequestClassDelete,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassDelete) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassDelete',
        request,
        metadata || {},
        this.methodDescriptorClassDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassDelete',
    request,
    metadata || {},
    this.methodDescriptorClassDelete);
  }

  methodDescriptorClassManagerInvite = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassManagerInvite',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassManagerInvite,
    class_class_communication_pb.ResponseClassManagerInvite,
    (request: class_class_communication_pb.RequestClassManagerInvite) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassManagerInvite.deserializeBinary
  );

  classManagerInvite(
    request: class_class_communication_pb.RequestClassManagerInvite,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassManagerInvite>;

  classManagerInvite(
    request: class_class_communication_pb.RequestClassManagerInvite,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassManagerInvite) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassManagerInvite>;

  classManagerInvite(
    request: class_class_communication_pb.RequestClassManagerInvite,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassManagerInvite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassManagerInvite',
        request,
        metadata || {},
        this.methodDescriptorClassManagerInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassManagerInvite',
    request,
    metadata || {},
    this.methodDescriptorClassManagerInvite);
  }

  methodDescriptorClassManagerListGet = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassManagerListGet',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassManagerListGet,
    class_class_communication_pb.ResponseClassManagerListGet,
    (request: class_class_communication_pb.RequestClassManagerListGet) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassManagerListGet.deserializeBinary
  );

  classManagerListGet(
    request: class_class_communication_pb.RequestClassManagerListGet,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassManagerListGet>;

  classManagerListGet(
    request: class_class_communication_pb.RequestClassManagerListGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassManagerListGet) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassManagerListGet>;

  classManagerListGet(
    request: class_class_communication_pb.RequestClassManagerListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassManagerListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassManagerListGet',
        request,
        metadata || {},
        this.methodDescriptorClassManagerListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassManagerListGet',
    request,
    metadata || {},
    this.methodDescriptorClassManagerListGet);
  }

  methodDescriptorClassManagerKick = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassManagerKick',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassManagerKick,
    class_class_communication_pb.ResponseClassManagerKick,
    (request: class_class_communication_pb.RequestClassManagerKick) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassManagerKick.deserializeBinary
  );

  classManagerKick(
    request: class_class_communication_pb.RequestClassManagerKick,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassManagerKick>;

  classManagerKick(
    request: class_class_communication_pb.RequestClassManagerKick,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassManagerKick) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassManagerKick>;

  classManagerKick(
    request: class_class_communication_pb.RequestClassManagerKick,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassManagerKick) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassManagerKick',
        request,
        metadata || {},
        this.methodDescriptorClassManagerKick,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassManagerKick',
    request,
    metadata || {},
    this.methodDescriptorClassManagerKick);
  }

  methodDescriptorClassLabelUpdate = new grpcWeb.MethodDescriptor(
    '/jisaem.class.ClassService/ClassLabelUpdate',
    grpcWeb.MethodType.UNARY,
    class_class_communication_pb.RequestClassLabelUpdate,
    class_class_communication_pb.ResponseClassLabelUpdate,
    (request: class_class_communication_pb.RequestClassLabelUpdate) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassLabelUpdate.deserializeBinary
  );

  classLabelUpdate(
    request: class_class_communication_pb.RequestClassLabelUpdate,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassLabelUpdate>;

  classLabelUpdate(
    request: class_class_communication_pb.RequestClassLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassLabelUpdate) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassLabelUpdate>;

  classLabelUpdate(
    request: class_class_communication_pb.RequestClassLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: class_class_communication_pb.ResponseClassLabelUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jisaem.class.ClassService/ClassLabelUpdate',
        request,
        metadata || {},
        this.methodDescriptorClassLabelUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jisaem.class.ClassService/ClassLabelUpdate',
    request,
    metadata || {},
    this.methodDescriptorClassLabelUpdate);
  }

}

