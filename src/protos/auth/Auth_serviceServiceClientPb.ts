/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_auth_communication_pb from '../auth/auth_communication_pb';


export class AuthServiceClient {
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

  methodInfoSignIn = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_auth_communication_pb.ResponseSignIn,
    (request: auth_auth_communication_pb.RequestSignIn) => {
      return request.serializeBinary();
    },
    auth_auth_communication_pb.ResponseSignIn.deserializeBinary
  );

  signIn(
    request: auth_auth_communication_pb.RequestSignIn,
    metadata: grpcWeb.Metadata | null): Promise<auth_auth_communication_pb.ResponseSignIn>;

  signIn(
    request: auth_auth_communication_pb.RequestSignIn,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseSignIn) => void): grpcWeb.ClientReadableStream<auth_auth_communication_pb.ResponseSignIn>;

  signIn(
    request: auth_auth_communication_pb.RequestSignIn,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseSignIn) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/SignIn',
        request,
        metadata || {},
        this.methodInfoSignIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/SignIn',
    request,
    metadata || {},
    this.methodInfoSignIn);
  }

  methodInfoSignOut = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_auth_communication_pb.ResponseSignOut,
    (request: auth_auth_communication_pb.RequestSignOut) => {
      return request.serializeBinary();
    },
    auth_auth_communication_pb.ResponseSignOut.deserializeBinary
  );

  signOut(
    request: auth_auth_communication_pb.RequestSignOut,
    metadata: grpcWeb.Metadata | null): Promise<auth_auth_communication_pb.ResponseSignOut>;

  signOut(
    request: auth_auth_communication_pb.RequestSignOut,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseSignOut) => void): grpcWeb.ClientReadableStream<auth_auth_communication_pb.ResponseSignOut>;

  signOut(
    request: auth_auth_communication_pb.RequestSignOut,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseSignOut) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/SignOut',
        request,
        metadata || {},
        this.methodInfoSignOut,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/SignOut',
    request,
    metadata || {},
    this.methodInfoSignOut);
  }

  methodInfoProfileGet = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_auth_communication_pb.ResponseProfileGet,
    (request: auth_auth_communication_pb.RequestProfileGet) => {
      return request.serializeBinary();
    },
    auth_auth_communication_pb.ResponseProfileGet.deserializeBinary
  );

  profileGet(
    request: auth_auth_communication_pb.RequestProfileGet,
    metadata: grpcWeb.Metadata | null): Promise<auth_auth_communication_pb.ResponseProfileGet>;

  profileGet(
    request: auth_auth_communication_pb.RequestProfileGet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseProfileGet) => void): grpcWeb.ClientReadableStream<auth_auth_communication_pb.ResponseProfileGet>;

  profileGet(
    request: auth_auth_communication_pb.RequestProfileGet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseProfileGet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/ProfileGet',
        request,
        metadata || {},
        this.methodInfoProfileGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/ProfileGet',
    request,
    metadata || {},
    this.methodInfoProfileGet);
  }

  methodInfoProfileUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_auth_communication_pb.ResponseProfileUpdate,
    (request: auth_auth_communication_pb.RequestProfileUpdate) => {
      return request.serializeBinary();
    },
    auth_auth_communication_pb.ResponseProfileUpdate.deserializeBinary
  );

  profileUpdate(
    request: auth_auth_communication_pb.RequestProfileUpdate,
    metadata: grpcWeb.Metadata | null): Promise<auth_auth_communication_pb.ResponseProfileUpdate>;

  profileUpdate(
    request: auth_auth_communication_pb.RequestProfileUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseProfileUpdate) => void): grpcWeb.ClientReadableStream<auth_auth_communication_pb.ResponseProfileUpdate>;

  profileUpdate(
    request: auth_auth_communication_pb.RequestProfileUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponseProfileUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/ProfileUpdate',
        request,
        metadata || {},
        this.methodInfoProfileUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/ProfileUpdate',
    request,
    metadata || {},
    this.methodInfoProfileUpdate);
  }

  methodInfoPasswordUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_auth_communication_pb.ResponsePasswordUpdate,
    (request: auth_auth_communication_pb.RequestPasswordUpdate) => {
      return request.serializeBinary();
    },
    auth_auth_communication_pb.ResponsePasswordUpdate.deserializeBinary
  );

  passwordUpdate(
    request: auth_auth_communication_pb.RequestPasswordUpdate,
    metadata: grpcWeb.Metadata | null): Promise<auth_auth_communication_pb.ResponsePasswordUpdate>;

  passwordUpdate(
    request: auth_auth_communication_pb.RequestPasswordUpdate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponsePasswordUpdate) => void): grpcWeb.ClientReadableStream<auth_auth_communication_pb.ResponsePasswordUpdate>;

  passwordUpdate(
    request: auth_auth_communication_pb.RequestPasswordUpdate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_auth_communication_pb.ResponsePasswordUpdate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/PasswordUpdate',
        request,
        metadata || {},
        this.methodInfoPasswordUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/PasswordUpdate',
    request,
    metadata || {},
    this.methodInfoPasswordUpdate);
  }

}

