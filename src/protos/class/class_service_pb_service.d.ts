// package: class
// file: class/class_service.proto

import * as class_class_service_pb from "../class/class_service_pb";
import * as class_class_communication_pb from "../class/class_communication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ClassServiceClassCreate = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassCreate;
  readonly responseType: typeof class_class_communication_pb.ResponseClassCreate;
};

type ClassServiceClassGet = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassGet;
  readonly responseType: typeof class_class_communication_pb.ResponseClassGet;
};

type ClassServiceClassListGet = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassListGet;
  readonly responseType: typeof class_class_communication_pb.ResponseClassListGet;
};

type ClassServiceClassUpdate = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassUpdate;
  readonly responseType: typeof class_class_communication_pb.ResponseClassUpdate;
};

type ClassServiceClassDelete = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassDelete;
  readonly responseType: typeof class_class_communication_pb.ResponseClassDelete;
};

type ClassServiceClassTeacherUpdate = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassTeacherUpdate;
  readonly responseType: typeof class_class_communication_pb.ResponseClassTeacherUpdate;
};

type ClassServiceClassLabelUpdate = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassLabelUpdate;
  readonly responseType: typeof class_class_communication_pb.ResponseClassLabelUpdate;
};

type ClassServiceClassOpenStatusChange = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassOpenStatusChange;
  readonly responseType: typeof class_class_communication_pb.ResponseClassOpenStatusChange;
};

type ClassServiceClassPublicExposeStatusChange = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestClassPublicExposeStatusChange;
  readonly responseType: typeof class_class_communication_pb.ResponseClassPublicExposeStatusChange;
};

type ClassServiceParticipantInvite = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestParticipantInvite;
  readonly responseType: typeof class_class_communication_pb.ResponseParticipantInvite;
};

type ClassServiceParticipantListGet = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestParticipantListGet;
  readonly responseType: typeof class_class_communication_pb.ResponseParticipantListGet;
};

type ClassServiceParticipantKick = {
  readonly methodName: string;
  readonly service: typeof ClassService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof class_class_communication_pb.RequestParticipantKick;
  readonly responseType: typeof class_class_communication_pb.ResponseParticipantKick;
};

export class ClassService {
  static readonly serviceName: string;
  static readonly ClassCreate: ClassServiceClassCreate;
  static readonly ClassGet: ClassServiceClassGet;
  static readonly ClassListGet: ClassServiceClassListGet;
  static readonly ClassUpdate: ClassServiceClassUpdate;
  static readonly ClassDelete: ClassServiceClassDelete;
  static readonly ClassTeacherUpdate: ClassServiceClassTeacherUpdate;
  static readonly ClassLabelUpdate: ClassServiceClassLabelUpdate;
  static readonly ClassOpenStatusChange: ClassServiceClassOpenStatusChange;
  static readonly ClassPublicExposeStatusChange: ClassServiceClassPublicExposeStatusChange;
  static readonly ParticipantInvite: ClassServiceParticipantInvite;
  static readonly ParticipantListGet: ClassServiceParticipantListGet;
  static readonly ParticipantKick: ClassServiceParticipantKick;
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

export class ClassServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  classCreate(
    requestMessage: class_class_communication_pb.RequestClassCreate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassCreate|null) => void
  ): UnaryResponse;
  classCreate(
    requestMessage: class_class_communication_pb.RequestClassCreate,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassCreate|null) => void
  ): UnaryResponse;
  classGet(
    requestMessage: class_class_communication_pb.RequestClassGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassGet|null) => void
  ): UnaryResponse;
  classGet(
    requestMessage: class_class_communication_pb.RequestClassGet,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassGet|null) => void
  ): UnaryResponse;
  classListGet(
    requestMessage: class_class_communication_pb.RequestClassListGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassListGet|null) => void
  ): UnaryResponse;
  classListGet(
    requestMessage: class_class_communication_pb.RequestClassListGet,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassListGet|null) => void
  ): UnaryResponse;
  classUpdate(
    requestMessage: class_class_communication_pb.RequestClassUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassUpdate|null) => void
  ): UnaryResponse;
  classUpdate(
    requestMessage: class_class_communication_pb.RequestClassUpdate,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassUpdate|null) => void
  ): UnaryResponse;
  classDelete(
    requestMessage: class_class_communication_pb.RequestClassDelete,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassDelete|null) => void
  ): UnaryResponse;
  classDelete(
    requestMessage: class_class_communication_pb.RequestClassDelete,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassDelete|null) => void
  ): UnaryResponse;
  classTeacherUpdate(
    requestMessage: class_class_communication_pb.RequestClassTeacherUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassTeacherUpdate|null) => void
  ): UnaryResponse;
  classTeacherUpdate(
    requestMessage: class_class_communication_pb.RequestClassTeacherUpdate,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassTeacherUpdate|null) => void
  ): UnaryResponse;
  classLabelUpdate(
    requestMessage: class_class_communication_pb.RequestClassLabelUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassLabelUpdate|null) => void
  ): UnaryResponse;
  classLabelUpdate(
    requestMessage: class_class_communication_pb.RequestClassLabelUpdate,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassLabelUpdate|null) => void
  ): UnaryResponse;
  classOpenStatusChange(
    requestMessage: class_class_communication_pb.RequestClassOpenStatusChange,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassOpenStatusChange|null) => void
  ): UnaryResponse;
  classOpenStatusChange(
    requestMessage: class_class_communication_pb.RequestClassOpenStatusChange,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassOpenStatusChange|null) => void
  ): UnaryResponse;
  classPublicExposeStatusChange(
    requestMessage: class_class_communication_pb.RequestClassPublicExposeStatusChange,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassPublicExposeStatusChange|null) => void
  ): UnaryResponse;
  classPublicExposeStatusChange(
    requestMessage: class_class_communication_pb.RequestClassPublicExposeStatusChange,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseClassPublicExposeStatusChange|null) => void
  ): UnaryResponse;
  participantInvite(
    requestMessage: class_class_communication_pb.RequestParticipantInvite,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseParticipantInvite|null) => void
  ): UnaryResponse;
  participantInvite(
    requestMessage: class_class_communication_pb.RequestParticipantInvite,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseParticipantInvite|null) => void
  ): UnaryResponse;
  participantListGet(
    requestMessage: class_class_communication_pb.RequestParticipantListGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseParticipantListGet|null) => void
  ): UnaryResponse;
  participantListGet(
    requestMessage: class_class_communication_pb.RequestParticipantListGet,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseParticipantListGet|null) => void
  ): UnaryResponse;
  participantKick(
    requestMessage: class_class_communication_pb.RequestParticipantKick,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseParticipantKick|null) => void
  ): UnaryResponse;
  participantKick(
    requestMessage: class_class_communication_pb.RequestParticipantKick,
    callback: (error: ServiceError|null, responseMessage: class_class_communication_pb.ResponseParticipantKick|null) => void
  ): UnaryResponse;
}

