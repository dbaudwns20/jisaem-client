// package: test
// file: test/test_service.proto

var test_test_service_pb = require("../test/test_service_pb");
var test_test_communication_pb = require("../test/test_communication_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TestService = (function () {
  function TestService() {}
  TestService.serviceName = "test.TestService";
  return TestService;
}());

TestService.TestCreate = {
  methodName: "TestCreate",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestCreate,
  responseType: test_test_communication_pb.ResponseTestCreate
};

TestService.TestGet = {
  methodName: "TestGet",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestGet,
  responseType: test_test_communication_pb.ResponseTestGet
};

TestService.TestListGet = {
  methodName: "TestListGet",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestListGet,
  responseType: test_test_communication_pb.ResponseTestListGet
};

TestService.TestUpdate = {
  methodName: "TestUpdate",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestUpdate,
  responseType: test_test_communication_pb.ResponseTestUpdate
};

TestService.TestDelete = {
  methodName: "TestDelete",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestDelete,
  responseType: test_test_communication_pb.ResponseTestDelete
};

TestService.TestNextRoundGet = {
  methodName: "TestNextRoundGet",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestNextRoundGet,
  responseType: test_test_communication_pb.ResponseTestNextRoundGet
};

TestService.ExpectedGradeUpdate = {
  methodName: "ExpectedGradeUpdate",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestExpectedGradeUpdate,
  responseType: test_test_communication_pb.ResponseExpectedGradeUpdate
};

TestService.TestScoreUpdate = {
  methodName: "TestScoreUpdate",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestTestScoreUpdate,
  responseType: test_test_communication_pb.ResponseTestScoreUpdate
};

TestService.ClassTestScoreGet = {
  methodName: "ClassTestScoreGet",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestClassTestScoreGet,
  responseType: test_test_communication_pb.ResponseClassTestScoreGet
};

TestService.StudentTestScoreGet = {
  methodName: "StudentTestScoreGet",
  service: TestService,
  requestStream: false,
  responseStream: false,
  requestType: test_test_communication_pb.RequestStudentTestScoreGet,
  responseType: test_test_communication_pb.ResponseStudentTestScoreGet
};

exports.TestService = TestService;

function TestServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TestServiceClient.prototype.testCreate = function testCreate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestCreate, {
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

TestServiceClient.prototype.testGet = function testGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestGet, {
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

TestServiceClient.prototype.testListGet = function testListGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestListGet, {
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

TestServiceClient.prototype.testUpdate = function testUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestUpdate, {
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

TestServiceClient.prototype.testDelete = function testDelete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestDelete, {
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

TestServiceClient.prototype.testNextRoundGet = function testNextRoundGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestNextRoundGet, {
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

TestServiceClient.prototype.expectedGradeUpdate = function expectedGradeUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.ExpectedGradeUpdate, {
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

TestServiceClient.prototype.testScoreUpdate = function testScoreUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.TestScoreUpdate, {
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

TestServiceClient.prototype.classTestScoreGet = function classTestScoreGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.ClassTestScoreGet, {
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

TestServiceClient.prototype.studentTestScoreGet = function studentTestScoreGet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TestService.StudentTestScoreGet, {
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

exports.TestServiceClient = TestServiceClient;

