// package: class
// file: class/class_service.proto

var class_class_service_pb = require("../class/class_service_pb");
var class_class_communication_pb = require("../class/class_communication_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ClassService = (function () {
  function ClassService() {}
  ClassService.serviceName = "class.ClassService";
  return ClassService;
}());

ClassService.ClassCreate = {
  methodName: "ClassCreate",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassCreate,
  responseType: class_class_communication_pb.ResponseClassCreate
};

ClassService.ClassGet = {
  methodName: "ClassGet",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassGet,
  responseType: class_class_communication_pb.ResponseClassGet
};

ClassService.ClassListGet = {
  methodName: "ClassListGet",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassListGet,
  responseType: class_class_communication_pb.ResponseClassListGet
};

ClassService.ClassUpdate = {
  methodName: "ClassUpdate",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassUpdate,
  responseType: class_class_communication_pb.ResponseClassUpdate
};

ClassService.ClassDelete = {
  methodName: "ClassDelete",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassDelete,
  responseType: class_class_communication_pb.ResponseClassDelete
};

ClassService.ClassTeacherUpdate = {
  methodName: "ClassTeacherUpdate",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassTeacherUpdate,
  responseType: class_class_communication_pb.ResponseClassTeacherUpdate
};

ClassService.ClassLabelUpdate = {
  methodName: "ClassLabelUpdate",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassLabelUpdate,
  responseType: class_class_communication_pb.ResponseClassLabelUpdate
};

ClassService.ClassOpenStatusChange = {
  methodName: "ClassOpenStatusChange",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassOpenStatusChange,
  responseType: class_class_communication_pb.ResponseClassOpenStatusChange
};

ClassService.ClassPublicExposeStatusChange = {
  methodName: "ClassPublicExposeStatusChange",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestClassPublicExposeStatusChange,
  responseType: class_class_communication_pb.ResponseClassPublicExposeStatusChange
};

ClassService.ParticipantInvite = {
  methodName: "ParticipantInvite",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestParticipantInvite,
  responseType: class_class_communication_pb.ResponseParticipantInvite
};

ClassService.ParticipantListGet = {
  methodName: "ParticipantListGet",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestParticipantListGet,
  responseType: class_class_communication_pb.ResponseParticipantListGet
};

ClassService.ParticipantKick = {
  methodName: "ParticipantKick",
  service: ClassService,
  requestStream: false,
  responseStream: false,
  requestType: class_class_communication_pb.RequestParticipantKick,
  responseType: class_class_communication_pb.ResponseParticipantKick
};

exports.ClassService = ClassService;

function ClassServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ClassServiceClient.prototype.classCreate = function classCreate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassCreate, {
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

ClassServiceClient.prototype.classGet = function classGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassGet, {
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

ClassServiceClient.prototype.classListGet = function classListGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassListGet, {
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

ClassServiceClient.prototype.classUpdate = function classUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassUpdate, {
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

ClassServiceClient.prototype.classDelete = function classDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassDelete, {
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

ClassServiceClient.prototype.classTeacherUpdate = function classTeacherUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassTeacherUpdate, {
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

ClassServiceClient.prototype.classLabelUpdate = function classLabelUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassLabelUpdate, {
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

ClassServiceClient.prototype.classOpenStatusChange = function classOpenStatusChange(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassOpenStatusChange, {
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

ClassServiceClient.prototype.classPublicExposeStatusChange = function classPublicExposeStatusChange(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ClassPublicExposeStatusChange, {
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

ClassServiceClient.prototype.participantInvite = function participantInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ParticipantInvite, {
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

ClassServiceClient.prototype.participantListGet = function participantListGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ParticipantListGet, {
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

ClassServiceClient.prototype.participantKick = function participantKick(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassService.ParticipantKick, {
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

exports.ClassServiceClient = ClassServiceClient;

