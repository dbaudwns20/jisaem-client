// package: auth
// file: auth/auth_service.proto

import * as auth_auth_service_pb from "../auth/auth_service_pb";
import * as auth_auth_communication_pb from "../auth/auth_communication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceSignIn = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_communication_pb.RequestSignIn;
  readonly responseType: typeof auth_auth_communication_pb.ResponseSignIn;
};

type AuthServiceSignOut = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_communication_pb.RequestSignOut;
  readonly responseType: typeof auth_auth_communication_pb.ResponseSignOut;
};

type AuthServiceProfileGet = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_communication_pb.RequestProfileGet;
  readonly responseType: typeof auth_auth_communication_pb.ResponseProfileGet;
};

type AuthServiceProfileUpdate = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_communication_pb.RequestProfileUpdate;
  readonly responseType: typeof auth_auth_communication_pb.ResponseProfileUpdate;
};

type AuthServicePasswordUpdate = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_auth_communication_pb.RequestPasswordUpdate;
  readonly responseType: typeof auth_auth_communication_pb.ResponsePasswordUpdate;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly SignIn: AuthServiceSignIn;
  static readonly SignOut: AuthServiceSignOut;
  static readonly ProfileGet: AuthServiceProfileGet;
  static readonly ProfileUpdate: AuthServiceProfileUpdate;
  static readonly PasswordUpdate: AuthServicePasswordUpdate;
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

export class AuthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signIn(
    requestMessage: auth_auth_communication_pb.RequestSignIn,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseSignIn|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: auth_auth_communication_pb.RequestSignIn,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseSignIn|null) => void
  ): UnaryResponse;
  signOut(
    requestMessage: auth_auth_communication_pb.RequestSignOut,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseSignOut|null) => void
  ): UnaryResponse;
  signOut(
    requestMessage: auth_auth_communication_pb.RequestSignOut,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseSignOut|null) => void
  ): UnaryResponse;
  profileGet(
    requestMessage: auth_auth_communication_pb.RequestProfileGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseProfileGet|null) => void
  ): UnaryResponse;
  profileGet(
    requestMessage: auth_auth_communication_pb.RequestProfileGet,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseProfileGet|null) => void
  ): UnaryResponse;
  profileUpdate(
    requestMessage: auth_auth_communication_pb.RequestProfileUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseProfileUpdate|null) => void
  ): UnaryResponse;
  profileUpdate(
    requestMessage: auth_auth_communication_pb.RequestProfileUpdate,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponseProfileUpdate|null) => void
  ): UnaryResponse;
  passwordUpdate(
    requestMessage: auth_auth_communication_pb.RequestPasswordUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponsePasswordUpdate|null) => void
  ): UnaryResponse;
  passwordUpdate(
    requestMessage: auth_auth_communication_pb.RequestPasswordUpdate,
    callback: (error: ServiceError|null, responseMessage: auth_auth_communication_pb.ResponsePasswordUpdate|null) => void
  ): UnaryResponse;
}

