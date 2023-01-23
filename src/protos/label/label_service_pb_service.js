// package: label
// file: label/label_service.proto

var label_label_service_pb = require("../label/label_service_pb");
var label_label_communication_pb = require("../label/label_communication_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LabelService = (function () {
  function LabelService() {}
  LabelService.serviceName = "label.LabelService";
  return LabelService;
}());

LabelService.LabelCreate = {
  methodName: "LabelCreate",
  service: LabelService,
  requestStream: false,
  responseStream: false,
  requestType: label_label_communication_pb.RequestLabelCreate,
  responseType: label_label_communication_pb.ResponseLabelCreate
};

LabelService.LabelListGet = {
  methodName: "LabelListGet",
  service: LabelService,
  requestStream: false,
  responseStream: false,
  requestType: label_label_communication_pb.RequestLabelListGet,
  responseType: label_label_communication_pb.ResponseLabelListGet
};

LabelService.LabelUpdate = {
  methodName: "LabelUpdate",
  service: LabelService,
  requestStream: false,
  responseStream: false,
  requestType: label_label_communication_pb.RequestLabelUpdate,
  responseType: label_label_communication_pb.ResponseLabelUpdate
};

LabelService.LabelDelete = {
  methodName: "LabelDelete",
  service: LabelService,
  requestStream: false,
  responseStream: false,
  requestType: label_label_communication_pb.RequestLabelDelete,
  responseType: label_label_communication_pb.ResponseLabelDelete
};

exports.LabelService = LabelService;

function LabelServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LabelServiceClient.prototype.labelCreate = function labelCreate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelService.LabelCreate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LabelServiceClient.prototype.labelListGet = function labelListGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelService.LabelListGet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LabelServiceClient.prototype.labelUpdate = function labelUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelService.LabelUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LabelServiceClient.prototype.labelDelete = function labelDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LabelService.LabelDelete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.LabelServiceClient = LabelServiceClient;

