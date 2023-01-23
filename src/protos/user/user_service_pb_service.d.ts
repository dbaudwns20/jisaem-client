// package: user
// file: user/user_service.proto

import * as user_user_service_pb from "../user/user_service_pb";
import * as user_user_communication_pb from "../user/user_communication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceStudentCreate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestStudentCreate;
  readonly responseType: typeof user_user_communication_pb.ResponseStudentCreate;
};

type UserServiceTeacherCreate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestTeacherCreate;
  readonly responseType: typeof user_user_communication_pb.ResponseTeacherCreate;
};

type UserServiceUserListGet = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUserListGet;
  readonly responseType: typeof user_user_communication_pb.ResponseUserListGet;
};

type UserServiceUserGet = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUserGet;
  readonly responseType: typeof user_user_communication_pb.ResponseUserGet;
};

type UserServiceUserUpdate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUserUpdate;
  readonly responseType: typeof user_user_communication_pb.ResponseUserUpdate;
};

type UserServiceUserDelete = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUserDelete;
  readonly responseType: typeof user_user_communication_pb.ResponseUserDelete;
};

type UserServiceUserLabelUpdate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUserLabelUpdate;
  readonly responseType: typeof user_user_communication_pb.ResponseUserLabelUpdate;
};

type UserServiceUserPasswordUpdate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUserPasswordUpdate;
  readonly responseType: typeof user_user_communication_pb.ResponseUserPasswordUpdate;
};

type UserServiceUsernameDuplicationCheck = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_user_communication_pb.RequestUsernameDuplicationCheck;
  readonly responseType: typeof user_user_communication_pb.ResponseUsernameDuplicationCheck;
};

export class UserService {
  static readonly serviceName: string;
  static readonly StudentCreate: UserServiceStudentCreate;
  static readonly TeacherCreate: UserServiceTeacherCreate;
  static readonly UserListGet: UserServiceUserListGet;
  static readonly UserGet: UserServiceUserGet;
  static readonly UserUpdate: UserServiceUserUpdate;
  static readonly UserDelete: UserServiceUserDelete;
  static readonly UserLabelUpdate: UserServiceUserLabelUpdate;
  static readonly UserPasswordUpdate: UserServiceUserPasswordUpdate;
  static readonly UsernameDuplicationCheck: UserServiceUsernameDuplicationCheck;
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

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  studentCreate(
    requestMessage: user_user_communication_pb.RequestStudentCreate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseStudentCreate|null) => void
  ): UnaryResponse;
  studentCreate(
    requestMessage: user_user_communication_pb.RequestStudentCreate,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseStudentCreate|null) => void
  ): UnaryResponse;
  teacherCreate(
    requestMessage: user_user_communication_pb.RequestTeacherCreate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseTeacherCreate|null) => void
  ): UnaryResponse;
  teacherCreate(
    requestMessage: user_user_communication_pb.RequestTeacherCreate,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseTeacherCreate|null) => void
  ): UnaryResponse;
  userListGet(
    requestMessage: user_user_communication_pb.RequestUserListGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserListGet|null) => void
  ): UnaryResponse;
  userListGet(
    requestMessage: user_user_communication_pb.RequestUserListGet,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserListGet|null) => void
  ): UnaryResponse;
  userGet(
    requestMessage: user_user_communication_pb.RequestUserGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserGet|null) => void
  ): UnaryResponse;
  userGet(
    requestMessage: user_user_communication_pb.RequestUserGet,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserGet|null) => void
  ): UnaryResponse;
  userUpdate(
    requestMessage: user_user_communication_pb.RequestUserUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserUpdate|null) => void
  ): UnaryResponse;
  userUpdate(
    requestMessage: user_user_communication_pb.RequestUserUpdate,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserUpdate|null) => void
  ): UnaryResponse;
  userDelete(
    requestMessage: user_user_communication_pb.RequestUserDelete,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserDelete|null) => void
  ): UnaryResponse;
  userDelete(
    requestMessage: user_user_communication_pb.RequestUserDelete,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserDelete|null) => void
  ): UnaryResponse;
  userLabelUpdate(
    requestMessage: user_user_communication_pb.RequestUserLabelUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserLabelUpdate|null) => void
  ): UnaryResponse;
  userLabelUpdate(
    requestMessage: user_user_communication_pb.RequestUserLabelUpdate,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserLabelUpdate|null) => void
  ): UnaryResponse;
  userPasswordUpdate(
    requestMessage: user_user_communication_pb.RequestUserPasswordUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserPasswordUpdate|null) => void
  ): UnaryResponse;
  userPasswordUpdate(
    requestMessage: user_user_communication_pb.RequestUserPasswordUpdate,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUserPasswordUpdate|null) => void
  ): UnaryResponse;
  usernameDuplicationCheck(
    requestMessage: user_user_communication_pb.RequestUsernameDuplicationCheck,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUsernameDuplicationCheck|null) => void
  ): UnaryResponse;
  usernameDuplicationCheck(
    requestMessage: user_user_communication_pb.RequestUsernameDuplicationCheck,
    callback: (error: ServiceError|null, responseMessage: user_user_communication_pb.ResponseUsernameDuplicationCheck|null) => void
  ): UnaryResponse;
}

