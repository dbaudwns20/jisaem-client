/**
 * @fileoverview gRPC-Web generated client stub for label
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as label_label_communication_pb from '../label/label_communication_pb';


export class LabelServiceClient {
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

  methodInfoLabelCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    label_label_communication_pb.ResponseLabelCreate,
    (request: label_label_communication_pb.RequestLabelCreate) => {
      return request.serializeBinary();
    },
    label_label_communication_pb.ResponseLabelCreate.deserializeBinary
  );

  labelCreate(
    request: label_label_communication_pb.RequestLabelCreate,
    metadata: grpcWeb.Metadata | null): Promise<label_label_communication_pb.ResponseLabelCreate>;

  labelCreate(
    request: label_label_communication_pb.RequestLabelCreate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelCreate) => void): grpcWeb.ClientReadableStream<label_label_communication_pb.ResponseLabelCreate>;

  labelCreate(
    request: label_label_communication_pb.RequestLabelCreate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelCreate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/label.LabelService/LabelCreate',
        request,
        metadata || {},
        this.methodInfoLabelCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/label.LabelService/LabelCreate',
    request,
    metadata || {},
    this.methodInfoLabelCreate);
  }

  methodInfoLabelListGet = new grpcWeb.AbstractClientBase.MethodInfo(
    label_label_communication_pb.ResponseLabelListGet,
    (request: label_label_communication_pb.RequestLabelListGet) => {
      return request.serializeBinary();
    },
    label_label_communication_pb.ResponseLabelListGet.deserializeBinary
  );

  labelListGet(
    request: label_label_communication_pb.RequestLabelListGet,
    metadata: grpcWeb.Metadata | null): Promise<label_label_communication_pb.ResponseLabelListGet>;

  labelListGet(
    request: label_label_communication_pb.RequestLabelListGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelListGet) => void): grpcWeb.ClientReadableStream<label_label_communication_pb.ResponseLabelListGet>;

  labelListGet(
    request: label_label_communication_pb.RequestLabelListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/label.LabelService/LabelListGet',
        request,
        metadata || {},
        this.methodInfoLabelListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/label.LabelService/LabelListGet',
    request,
    metadata || {},
    this.methodInfoLabelListGet);
  }

  methodInfoLabelUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    label_label_communication_pb.ResponseLabelUpdate,
    (request: label_label_communication_pb.RequestLabelUpdate) => {
      return request.serializeBinary();
    },
    label_label_communication_pb.ResponseLabelUpdate.deserializeBinary
  );

  labelUpdate(
    request: label_label_communication_pb.RequestLabelUpdate,
    metadata: grpcWeb.Metadata | null): Promise<label_label_communication_pb.ResponseLabelUpdate>;

  labelUpdate(
    request: label_label_communication_pb.RequestLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelUpdate) => void): grpcWeb.ClientReadableStream<label_label_communication_pb.ResponseLabelUpdate>;

  labelUpdate(
    request: label_label_communication_pb.RequestLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/label.LabelService/LabelUpdate',
        request,
        metadata || {},
        this.methodInfoLabelUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/label.LabelService/LabelUpdate',
    request,
    metadata || {},
    this.methodInfoLabelUpdate);
  }

  methodInfoLabelDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    label_label_communication_pb.ResponseLabelDelete,
    (request: label_label_communication_pb.RequestLabelDelete) => {
      return request.serializeBinary();
    },
    label_label_communication_pb.ResponseLabelDelete.deserializeBinary
  );

  labelDelete(
    request: label_label_communication_pb.RequestLabelDelete,
    metadata: grpcWeb.Metadata | null): Promise<label_label_communication_pb.ResponseLabelDelete>;

  labelDelete(
    request: label_label_communication_pb.RequestLabelDelete,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelDelete) => void): grpcWeb.ClientReadableStream<label_label_communication_pb.ResponseLabelDelete>;

  labelDelete(
    request: label_label_communication_pb.RequestLabelDelete,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: label_label_communication_pb.ResponseLabelDelete) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/label.LabelService/LabelDelete',
        request,
        metadata || {},
        this.methodInfoLabelDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/label.LabelService/LabelDelete',
    request,
    metadata || {},
    this.methodInfoLabelDelete);
  }

}

