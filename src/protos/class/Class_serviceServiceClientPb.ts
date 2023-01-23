/**
 * @fileoverview gRPC-Web generated client stub for class
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoClassCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseClassCreate,
    (request: class_class_communication_pb.RequestClassCreate) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassCreate.deserializeBinary
  );

  classCreate(
    request: class_class_communication_pb.RequestClassCreate,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassCreate>;

  classCreate(
    request: class_class_communication_pb.RequestClassCreate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassCreate) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassCreate>;

  classCreate(
    request: class_class_communication_pb.RequestClassCreate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassCreate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassCreate',
        request,
        metadata || {},
        this.methodInfoClassCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassCreate',
    request,
    metadata || {},
    this.methodInfoClassCreate);
  }

  methodInfoClassGet = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseClassGet,
    (request: class_class_communication_pb.RequestClassGet) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassGet.deserializeBinary
  );

  classGet(
    request: class_class_communication_pb.RequestClassGet,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassGet>;

  classGet(
    request: class_class_communication_pb.RequestClassGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassGet) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassGet>;

  classGet(
    request: class_class_communication_pb.RequestClassGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassGet',
        request,
        metadata || {},
        this.methodInfoClassGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassGet',
    request,
    metadata || {},
    this.methodInfoClassGet);
  }

  methodInfoClassListGet = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassListGet) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassListGet>;

  classListGet(
    request: class_class_communication_pb.RequestClassListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassListGet',
        request,
        metadata || {},
        this.methodInfoClassListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassListGet',
    request,
    metadata || {},
    this.methodInfoClassListGet);
  }

  methodInfoClassUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseClassUpdate,
    (request: class_class_communication_pb.RequestClassUpdate) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassUpdate.deserializeBinary
  );

  classUpdate(
    request: class_class_communication_pb.RequestClassUpdate,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassUpdate>;

  classUpdate(
    request: class_class_communication_pb.RequestClassUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassUpdate) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassUpdate>;

  classUpdate(
    request: class_class_communication_pb.RequestClassUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassUpdate',
        request,
        metadata || {},
        this.methodInfoClassUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassUpdate',
    request,
    metadata || {},
    this.methodInfoClassUpdate);
  }

  methodInfoClassDelete = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassDelete) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassDelete>;

  classDelete(
    request: class_class_communication_pb.RequestClassDelete,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassDelete) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassDelete',
        request,
        metadata || {},
        this.methodInfoClassDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassDelete',
    request,
    metadata || {},
    this.methodInfoClassDelete);
  }

  methodInfoClassTeacherUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseClassTeacherUpdate,
    (request: class_class_communication_pb.RequestClassTeacherUpdate) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassTeacherUpdate.deserializeBinary
  );

  classTeacherUpdate(
    request: class_class_communication_pb.RequestClassTeacherUpdate,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassTeacherUpdate>;

  classTeacherUpdate(
    request: class_class_communication_pb.RequestClassTeacherUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassTeacherUpdate) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassTeacherUpdate>;

  classTeacherUpdate(
    request: class_class_communication_pb.RequestClassTeacherUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassTeacherUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassTeacherUpdate',
        request,
        metadata || {},
        this.methodInfoClassTeacherUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassTeacherUpdate',
    request,
    metadata || {},
    this.methodInfoClassTeacherUpdate);
  }

  methodInfoClassLabelUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
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
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassLabelUpdate) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassLabelUpdate>;

  classLabelUpdate(
    request: class_class_communication_pb.RequestClassLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassLabelUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassLabelUpdate',
        request,
        metadata || {},
        this.methodInfoClassLabelUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassLabelUpdate',
    request,
    metadata || {},
    this.methodInfoClassLabelUpdate);
  }

  methodInfoClassOpenStatusChange = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseClassOpenStatusChange,
    (request: class_class_communication_pb.RequestClassOpenStatusChange) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassOpenStatusChange.deserializeBinary
  );

  classOpenStatusChange(
    request: class_class_communication_pb.RequestClassOpenStatusChange,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassOpenStatusChange>;

  classOpenStatusChange(
    request: class_class_communication_pb.RequestClassOpenStatusChange,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassOpenStatusChange) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassOpenStatusChange>;

  classOpenStatusChange(
    request: class_class_communication_pb.RequestClassOpenStatusChange,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassOpenStatusChange) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassOpenStatusChange',
        request,
        metadata || {},
        this.methodInfoClassOpenStatusChange,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassOpenStatusChange',
    request,
    metadata || {},
    this.methodInfoClassOpenStatusChange);
  }

  methodInfoClassPublicExposeStatusChange = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseClassPublicExposeStatusChange,
    (request: class_class_communication_pb.RequestClassPublicExposeStatusChange) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseClassPublicExposeStatusChange.deserializeBinary
  );

  classPublicExposeStatusChange(
    request: class_class_communication_pb.RequestClassPublicExposeStatusChange,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseClassPublicExposeStatusChange>;

  classPublicExposeStatusChange(
    request: class_class_communication_pb.RequestClassPublicExposeStatusChange,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassPublicExposeStatusChange) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseClassPublicExposeStatusChange>;

  classPublicExposeStatusChange(
    request: class_class_communication_pb.RequestClassPublicExposeStatusChange,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseClassPublicExposeStatusChange) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ClassPublicExposeStatusChange',
        request,
        metadata || {},
        this.methodInfoClassPublicExposeStatusChange,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ClassPublicExposeStatusChange',
    request,
    metadata || {},
    this.methodInfoClassPublicExposeStatusChange);
  }

  methodInfoParticipantInvite = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseParticipantInvite,
    (request: class_class_communication_pb.RequestParticipantInvite) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseParticipantInvite.deserializeBinary
  );

  participantInvite(
    request: class_class_communication_pb.RequestParticipantInvite,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseParticipantInvite>;

  participantInvite(
    request: class_class_communication_pb.RequestParticipantInvite,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseParticipantInvite) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseParticipantInvite>;

  participantInvite(
    request: class_class_communication_pb.RequestParticipantInvite,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseParticipantInvite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ParticipantInvite',
        request,
        metadata || {},
        this.methodInfoParticipantInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ParticipantInvite',
    request,
    metadata || {},
    this.methodInfoParticipantInvite);
  }

  methodInfoParticipantListGet = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseParticipantListGet,
    (request: class_class_communication_pb.RequestParticipantListGet) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseParticipantListGet.deserializeBinary
  );

  participantListGet(
    request: class_class_communication_pb.RequestParticipantListGet,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseParticipantListGet>;

  participantListGet(
    request: class_class_communication_pb.RequestParticipantListGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseParticipantListGet) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseParticipantListGet>;

  participantListGet(
    request: class_class_communication_pb.RequestParticipantListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseParticipantListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ParticipantListGet',
        request,
        metadata || {},
        this.methodInfoParticipantListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ParticipantListGet',
    request,
    metadata || {},
    this.methodInfoParticipantListGet);
  }

  methodInfoParticipantKick = new grpcWeb.AbstractClientBase.MethodInfo(
    class_class_communication_pb.ResponseParticipantKick,
    (request: class_class_communication_pb.RequestParticipantKick) => {
      return request.serializeBinary();
    },
    class_class_communication_pb.ResponseParticipantKick.deserializeBinary
  );

  participantKick(
    request: class_class_communication_pb.RequestParticipantKick,
    metadata: grpcWeb.Metadata | null): Promise<class_class_communication_pb.ResponseParticipantKick>;

  participantKick(
    request: class_class_communication_pb.RequestParticipantKick,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseParticipantKick) => void): grpcWeb.ClientReadableStream<class_class_communication_pb.ResponseParticipantKick>;

  participantKick(
    request: class_class_communication_pb.RequestParticipantKick,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: class_class_communication_pb.ResponseParticipantKick) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/class.ClassService/ParticipantKick',
        request,
        metadata || {},
        this.methodInfoParticipantKick,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/class.ClassService/ParticipantKick',
    request,
    metadata || {},
    this.methodInfoParticipantKick);
  }

}

