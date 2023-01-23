/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_user_communication_pb from '../user/user_communication_pb';


export class UserServiceClient {
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

  methodInfoStudentCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseStudentCreate,
    (request: user_user_communication_pb.RequestStudentCreate) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseStudentCreate.deserializeBinary
  );

  studentCreate(
    request: user_user_communication_pb.RequestStudentCreate,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseStudentCreate>;

  studentCreate(
    request: user_user_communication_pb.RequestStudentCreate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseStudentCreate) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseStudentCreate>;

  studentCreate(
    request: user_user_communication_pb.RequestStudentCreate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseStudentCreate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/StudentCreate',
        request,
        metadata || {},
        this.methodInfoStudentCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/StudentCreate',
    request,
    metadata || {},
    this.methodInfoStudentCreate);
  }

  methodInfoTeacherCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseTeacherCreate,
    (request: user_user_communication_pb.RequestTeacherCreate) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseTeacherCreate.deserializeBinary
  );

  teacherCreate(
    request: user_user_communication_pb.RequestTeacherCreate,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseTeacherCreate>;

  teacherCreate(
    request: user_user_communication_pb.RequestTeacherCreate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseTeacherCreate) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseTeacherCreate>;

  teacherCreate(
    request: user_user_communication_pb.RequestTeacherCreate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseTeacherCreate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/TeacherCreate',
        request,
        metadata || {},
        this.methodInfoTeacherCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/TeacherCreate',
    request,
    metadata || {},
    this.methodInfoTeacherCreate);
  }

  methodInfoUserListGet = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUserListGet,
    (request: user_user_communication_pb.RequestUserListGet) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUserListGet.deserializeBinary
  );

  userListGet(
    request: user_user_communication_pb.RequestUserListGet,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUserListGet>;

  userListGet(
    request: user_user_communication_pb.RequestUserListGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserListGet) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUserListGet>;

  userListGet(
    request: user_user_communication_pb.RequestUserListGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserListGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UserListGet',
        request,
        metadata || {},
        this.methodInfoUserListGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UserListGet',
    request,
    metadata || {},
    this.methodInfoUserListGet);
  }

  methodInfoUserGet = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUserGet,
    (request: user_user_communication_pb.RequestUserGet) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUserGet.deserializeBinary
  );

  userGet(
    request: user_user_communication_pb.RequestUserGet,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUserGet>;

  userGet(
    request: user_user_communication_pb.RequestUserGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserGet) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUserGet>;

  userGet(
    request: user_user_communication_pb.RequestUserGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UserGet',
        request,
        metadata || {},
        this.methodInfoUserGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UserGet',
    request,
    metadata || {},
    this.methodInfoUserGet);
  }

  methodInfoUserUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUserUpdate,
    (request: user_user_communication_pb.RequestUserUpdate) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUserUpdate.deserializeBinary
  );

  userUpdate(
    request: user_user_communication_pb.RequestUserUpdate,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUserUpdate>;

  userUpdate(
    request: user_user_communication_pb.RequestUserUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserUpdate) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUserUpdate>;

  userUpdate(
    request: user_user_communication_pb.RequestUserUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UserUpdate',
        request,
        metadata || {},
        this.methodInfoUserUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UserUpdate',
    request,
    metadata || {},
    this.methodInfoUserUpdate);
  }

  methodInfoUserDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUserDelete,
    (request: user_user_communication_pb.RequestUserDelete) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUserDelete.deserializeBinary
  );

  userDelete(
    request: user_user_communication_pb.RequestUserDelete,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUserDelete>;

  userDelete(
    request: user_user_communication_pb.RequestUserDelete,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserDelete) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUserDelete>;

  userDelete(
    request: user_user_communication_pb.RequestUserDelete,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserDelete) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UserDelete',
        request,
        metadata || {},
        this.methodInfoUserDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UserDelete',
    request,
    metadata || {},
    this.methodInfoUserDelete);
  }

  methodInfoUserLabelUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUserLabelUpdate,
    (request: user_user_communication_pb.RequestUserLabelUpdate) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUserLabelUpdate.deserializeBinary
  );

  userLabelUpdate(
    request: user_user_communication_pb.RequestUserLabelUpdate,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUserLabelUpdate>;

  userLabelUpdate(
    request: user_user_communication_pb.RequestUserLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserLabelUpdate) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUserLabelUpdate>;

  userLabelUpdate(
    request: user_user_communication_pb.RequestUserLabelUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserLabelUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UserLabelUpdate',
        request,
        metadata || {},
        this.methodInfoUserLabelUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UserLabelUpdate',
    request,
    metadata || {},
    this.methodInfoUserLabelUpdate);
  }

  methodInfoUserPasswordUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUserPasswordUpdate,
    (request: user_user_communication_pb.RequestUserPasswordUpdate) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUserPasswordUpdate.deserializeBinary
  );

  userPasswordUpdate(
    request: user_user_communication_pb.RequestUserPasswordUpdate,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUserPasswordUpdate>;

  userPasswordUpdate(
    request: user_user_communication_pb.RequestUserPasswordUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserPasswordUpdate) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUserPasswordUpdate>;

  userPasswordUpdate(
    request: user_user_communication_pb.RequestUserPasswordUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUserPasswordUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UserPasswordUpdate',
        request,
        metadata || {},
        this.methodInfoUserPasswordUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UserPasswordUpdate',
    request,
    metadata || {},
    this.methodInfoUserPasswordUpdate);
  }

  methodInfoUsernameDuplicationCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    user_user_communication_pb.ResponseUsernameDuplicationCheck,
    (request: user_user_communication_pb.RequestUsernameDuplicationCheck) => {
      return request.serializeBinary();
    },
    user_user_communication_pb.ResponseUsernameDuplicationCheck.deserializeBinary
  );

  usernameDuplicationCheck(
    request: user_user_communication_pb.RequestUsernameDuplicationCheck,
    metadata: grpcWeb.Metadata | null): Promise<user_user_communication_pb.ResponseUsernameDuplicationCheck>;

  usernameDuplicationCheck(
    request: user_user_communication_pb.RequestUsernameDuplicationCheck,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUsernameDuplicationCheck) => void): grpcWeb.ClientReadableStream<user_user_communication_pb.ResponseUsernameDuplicationCheck>;

  usernameDuplicationCheck(
    request: user_user_communication_pb.RequestUsernameDuplicationCheck,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_user_communication_pb.ResponseUsernameDuplicationCheck) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UsernameDuplicationCheck',
        request,
        metadata || {},
        this.methodInfoUsernameDuplicationCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UsernameDuplicationCheck',
    request,
    metadata || {},
    this.methodInfoUsernameDuplicationCheck);
  }

}

