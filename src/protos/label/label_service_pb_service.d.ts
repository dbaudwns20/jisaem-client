// package: label
// file: label/label_service.proto

import * as label_label_service_pb from "../label/label_service_pb";
import * as label_label_communication_pb from "../label/label_communication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LabelServiceLabelCreate = {
  readonly methodName: string;
  readonly service: typeof LabelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof label_label_communication_pb.RequestLabelCreate;
  readonly responseType: typeof label_label_communication_pb.ResponseLabelCreate;
};

type LabelServiceLabelListGet = {
  readonly methodName: string;
  readonly service: typeof LabelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof label_label_communication_pb.RequestLabelListGet;
  readonly responseType: typeof label_label_communication_pb.ResponseLabelListGet;
};

type LabelServiceLabelUpdate = {
  readonly methodName: string;
  readonly service: typeof LabelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof label_label_communication_pb.RequestLabelUpdate;
  readonly responseType: typeof label_label_communication_pb.ResponseLabelUpdate;
};

type LabelServiceLabelDelete = {
  readonly methodName: string;
  readonly service: typeof LabelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof label_label_communication_pb.RequestLabelDelete;
  readonly responseType: typeof label_label_communication_pb.ResponseLabelDelete;
};

export class LabelService {
  static readonly serviceName: string;
  static readonly LabelCreate: LabelServiceLabelCreate;
  static readonly LabelListGet: LabelServiceLabelListGet;
  static readonly LabelUpdate: LabelServiceLabelUpdate;
  static readonly LabelDelete: LabelServiceLabelDelete;
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

export class LabelServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  labelCreate(
    requestMessage: label_label_communication_pb.RequestLabelCreate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelCreate|null) => void
  ): UnaryResponse;
  labelCreate(
    requestMessage: label_label_communication_pb.RequestLabelCreate,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelCreate|null) => void
  ): UnaryResponse;
  labelListGet(
    requestMessage: label_label_communication_pb.RequestLabelListGet,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelListGet|null) => void
  ): UnaryResponse;
  labelListGet(
    requestMessage: label_label_communication_pb.RequestLabelListGet,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelListGet|null) => void
  ): UnaryResponse;
  labelUpdate(
    requestMessage: label_label_communication_pb.RequestLabelUpdate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelUpdate|null) => void
  ): UnaryResponse;
  labelUpdate(
    requestMessage: label_label_communication_pb.RequestLabelUpdate,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelUpdate|null) => void
  ): UnaryResponse;
  labelDelete(
    requestMessage: label_label_communication_pb.RequestLabelDelete,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelDelete|null) => void
  ): UnaryResponse;
  labelDelete(
    requestMessage: label_label_communication_pb.RequestLabelDelete,
    callback: (error: ServiceError|null, responseMessage: label_label_communication_pb.ResponseLabelDelete|null) => void
  ): UnaryResponse;
}

