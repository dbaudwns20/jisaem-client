// package: user
// file: user/user_service.proto

var user_user_service_pb = require("../user/user_service_pb");
var user_user_communication_pb = require("../user/user_communication_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UserService = (function () {
  function UserService() {}
  UserService.serviceName = "user.UserService";
  return UserService;
}());

UserService.StudentCreate = {
  methodName: "StudentCreate",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestStudentCreate,
  responseType: user_user_communication_pb.ResponseStudentCreate
};

UserService.TeacherCreate = {
  methodName: "TeacherCreate",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestTeacherCreate,
  responseType: user_user_communication_pb.ResponseTeacherCreate
};

UserService.UserListGet = {
  methodName: "UserListGet",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUserListGet,
  responseType: user_user_communication_pb.ResponseUserListGet
};

UserService.UserGet = {
  methodName: "UserGet",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUserGet,
  responseType: user_user_communication_pb.ResponseUserGet
};

UserService.UserUpdate = {
  methodName: "UserUpdate",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUserUpdate,
  responseType: user_user_communication_pb.ResponseUserUpdate
};

UserService.UserDelete = {
  methodName: "UserDelete",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUserDelete,
  responseType: user_user_communication_pb.ResponseUserDelete
};

UserService.UserLabelUpdate = {
  methodName: "UserLabelUpdate",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUserLabelUpdate,
  responseType: user_user_communication_pb.ResponseUserLabelUpdate
};

UserService.UserPasswordUpdate = {
  methodName: "UserPasswordUpdate",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUserPasswordUpdate,
  responseType: user_user_communication_pb.ResponseUserPasswordUpdate
};

UserService.UsernameDuplicationCheck = {
  methodName: "UsernameDuplicationCheck",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_user_communication_pb.RequestUsernameDuplicationCheck,
  responseType: user_user_communication_pb.ResponseUsernameDuplicationCheck
};

exports.UserService = UserService;

function UserServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserServiceClient.prototype.studentCreate = function studentCreate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.StudentCreate, {
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

UserServiceClient.prototype.teacherCreate = function teacherCreate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.TeacherCreate, {
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

UserServiceClient.prototype.userListGet = function userListGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserListGet, {
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

UserServiceClient.prototype.userGet = function userGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserGet, {
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

UserServiceClient.prototype.userUpdate = function userUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserUpdate, {
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

UserServiceClient.prototype.userDelete = function userDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserDelete, {
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

UserServiceClient.prototype.userLabelUpdate = function userLabelUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserLabelUpdate, {
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

UserServiceClient.prototype.userPasswordUpdate = function userPasswordUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UserPasswordUpdate, {
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

UserServiceClient.prototype.usernameDuplicationCheck = function usernameDuplicationCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UsernameDuplicationCheck, {
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

exports.UserServiceClient = UserServiceClient;

