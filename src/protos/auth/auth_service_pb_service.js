// package: auth
// file: auth/auth_service.proto

var auth_auth_service_pb = require("../auth/auth_service_pb");
var auth_auth_communication_pb = require("../auth/auth_communication_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthService = (function () {
  function AuthService() {}
  AuthService.serviceName = "auth.AuthService";
  return AuthService;
}());

AuthService.SignIn = {
  methodName: "SignIn",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_communication_pb.RequestSignIn,
  responseType: auth_auth_communication_pb.ResponseSignIn
};

AuthService.SignOut = {
  methodName: "SignOut",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_communication_pb.RequestSignOut,
  responseType: auth_auth_communication_pb.ResponseSignOut
};

AuthService.ProfileGet = {
  methodName: "ProfileGet",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_communication_pb.RequestProfileGet,
  responseType: auth_auth_communication_pb.ResponseProfileGet
};

AuthService.ProfileUpdate = {
  methodName: "ProfileUpdate",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_communication_pb.RequestProfileUpdate,
  responseType: auth_auth_communication_pb.ResponseProfileUpdate
};

AuthService.PasswordUpdate = {
  methodName: "PasswordUpdate",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: auth_auth_communication_pb.RequestPasswordUpdate,
  responseType: auth_auth_communication_pb.ResponsePasswordUpdate
};

exports.AuthService = AuthService;

function AuthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthServiceClient.prototype.signIn = function signIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.SignIn, {
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

AuthServiceClient.prototype.signOut = function signOut(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.SignOut, {
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

AuthServiceClient.prototype.profileGet = function profileGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.ProfileGet, {
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

AuthServiceClient.prototype.profileUpdate = function profileUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.ProfileUpdate, {
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

AuthServiceClient.prototype.passwordUpdate = function passwordUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.PasswordUpdate, {
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

exports.AuthServiceClient = AuthServiceClient;

