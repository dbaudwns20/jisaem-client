// source: auth/auth_message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var label_label_message_pb = require('../label/label_message_pb.js');
goog.object.extend(proto, label_label_message_pb);
goog.exportSymbol('proto.jisaem.auth.Level', null, global);
goog.exportSymbol('proto.jisaem.auth.ParentInfo', null, global);
goog.exportSymbol('proto.jisaem.auth.SignInType', null, global);
goog.exportSymbol('proto.jisaem.auth.StudentInfo', null, global);
goog.exportSymbol('proto.jisaem.auth.User', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jisaem.auth.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jisaem.auth.User.repeatedFields_, null);
};
goog.inherits(proto.jisaem.auth.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jisaem.auth.User.displayName = 'proto.jisaem.auth.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jisaem.auth.StudentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jisaem.auth.StudentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jisaem.auth.StudentInfo.displayName = 'proto.jisaem.auth.StudentInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jisaem.auth.ParentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jisaem.auth.ParentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jisaem.auth.ParentInfo.displayName = 'proto.jisaem.auth.ParentInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jisaem.auth.User.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jisaem.auth.User.prototype.toObject = function(opt_includeInstance) {
  return proto.jisaem.auth.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jisaem.auth.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.auth.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    authLevel: jspb.Message.getFieldWithDefault(msg, 4, 0),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    password: jspb.Message.getFieldWithDefault(msg, 6, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    email: jspb.Message.getFieldWithDefault(msg, 9, ""),
    userLabelsList: jspb.Message.toObjectList(msg.getUserLabelsList(),
    label_label_message_pb.UserLabel.toObject, includeInstance),
    studentInfo: (f = msg.getStudentInfo()) && proto.jisaem.auth.StudentInfo.toObject(includeInstance, f),
    parentInfo: (f = msg.getParentInfo()) && proto.jisaem.auth.ParentInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jisaem.auth.User}
 */
proto.jisaem.auth.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jisaem.auth.User;
  return proto.jisaem.auth.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jisaem.auth.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jisaem.auth.User}
 */
proto.jisaem.auth.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {!proto.jisaem.auth.Level} */ (reader.readEnum());
      msg.setAuthLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 10:
      var value = new label_label_message_pb.UserLabel;
      reader.readMessage(value,label_label_message_pb.UserLabel.deserializeBinaryFromReader);
      msg.addUserLabels(value);
      break;
    case 11:
      var value = new proto.jisaem.auth.StudentInfo;
      reader.readMessage(value,proto.jisaem.auth.StudentInfo.deserializeBinaryFromReader);
      msg.setStudentInfo(value);
      break;
    case 12:
      var value = new proto.jisaem.auth.ParentInfo;
      reader.readMessage(value,proto.jisaem.auth.ParentInfo.deserializeBinaryFromReader);
      msg.setParentInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jisaem.auth.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jisaem.auth.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jisaem.auth.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.auth.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUserLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      label_label_message_pb.UserLabel.serializeBinaryToWriter
    );
  }
  f = message.getStudentInfo();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.jisaem.auth.StudentInfo.serializeBinaryToWriter
    );
  }
  f = message.getParentInfo();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.jisaem.auth.ParentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.jisaem.auth.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.auth.User.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.auth.User} returns this
*/
proto.jisaem.auth.User.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.auth.User.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.auth.User.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.auth.User} returns this
*/
proto.jisaem.auth.User.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.auth.User.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Level auth_level = 4;
 * @return {!proto.jisaem.auth.Level}
 */
proto.jisaem.auth.User.prototype.getAuthLevel = function() {
  return /** @type {!proto.jisaem.auth.Level} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.jisaem.auth.Level} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setAuthLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.jisaem.auth.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.jisaem.auth.User.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.jisaem.auth.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.jisaem.auth.User.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string email = 9;
 * @return {string}
 */
proto.jisaem.auth.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated jisaem.label.UserLabel user_labels = 10;
 * @return {!Array<!proto.jisaem.label.UserLabel>}
 */
proto.jisaem.auth.User.prototype.getUserLabelsList = function() {
  return /** @type{!Array<!proto.jisaem.label.UserLabel>} */ (
    jspb.Message.getRepeatedWrapperField(this, label_label_message_pb.UserLabel, 10));
};


/**
 * @param {!Array<!proto.jisaem.label.UserLabel>} value
 * @return {!proto.jisaem.auth.User} returns this
*/
proto.jisaem.auth.User.prototype.setUserLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.jisaem.label.UserLabel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jisaem.label.UserLabel}
 */
proto.jisaem.auth.User.prototype.addUserLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.jisaem.label.UserLabel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.clearUserLabelsList = function() {
  return this.setUserLabelsList([]);
};


/**
 * optional StudentInfo student_info = 11;
 * @return {?proto.jisaem.auth.StudentInfo}
 */
proto.jisaem.auth.User.prototype.getStudentInfo = function() {
  return /** @type{?proto.jisaem.auth.StudentInfo} */ (
    jspb.Message.getWrapperField(this, proto.jisaem.auth.StudentInfo, 11));
};


/**
 * @param {?proto.jisaem.auth.StudentInfo|undefined} value
 * @return {!proto.jisaem.auth.User} returns this
*/
proto.jisaem.auth.User.prototype.setStudentInfo = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.clearStudentInfo = function() {
  return this.setStudentInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.auth.User.prototype.hasStudentInfo = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ParentInfo parent_info = 12;
 * @return {?proto.jisaem.auth.ParentInfo}
 */
proto.jisaem.auth.User.prototype.getParentInfo = function() {
  return /** @type{?proto.jisaem.auth.ParentInfo} */ (
    jspb.Message.getWrapperField(this, proto.jisaem.auth.ParentInfo, 12));
};


/**
 * @param {?proto.jisaem.auth.ParentInfo|undefined} value
 * @return {!proto.jisaem.auth.User} returns this
*/
proto.jisaem.auth.User.prototype.setParentInfo = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.auth.User} returns this
 */
proto.jisaem.auth.User.prototype.clearParentInfo = function() {
  return this.setParentInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.auth.User.prototype.hasParentInfo = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jisaem.auth.StudentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.jisaem.auth.StudentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jisaem.auth.StudentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.auth.StudentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    school: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jisaem.auth.StudentInfo}
 */
proto.jisaem.auth.StudentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jisaem.auth.StudentInfo;
  return proto.jisaem.auth.StudentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jisaem.auth.StudentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jisaem.auth.StudentInfo}
 */
proto.jisaem.auth.StudentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchool(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jisaem.auth.StudentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jisaem.auth.StudentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jisaem.auth.StudentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.auth.StudentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchool();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string school = 1;
 * @return {string}
 */
proto.jisaem.auth.StudentInfo.prototype.getSchool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.StudentInfo} returns this
 */
proto.jisaem.auth.StudentInfo.prototype.setSchool = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.jisaem.auth.StudentInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.StudentInfo} returns this
 */
proto.jisaem.auth.StudentInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jisaem.auth.ParentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.jisaem.auth.ParentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jisaem.auth.ParentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.auth.ParentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jisaem.auth.ParentInfo}
 */
proto.jisaem.auth.ParentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jisaem.auth.ParentInfo;
  return proto.jisaem.auth.ParentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jisaem.auth.ParentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jisaem.auth.ParentInfo}
 */
proto.jisaem.auth.ParentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jisaem.auth.ParentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jisaem.auth.ParentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jisaem.auth.ParentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.auth.ParentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.jisaem.auth.ParentInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.ParentInfo} returns this
 */
proto.jisaem.auth.ParentInfo.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.jisaem.auth.ParentInfo.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.ParentInfo} returns this
 */
proto.jisaem.auth.ParentInfo.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone = 3;
 * @return {string}
 */
proto.jisaem.auth.ParentInfo.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.auth.ParentInfo} returns this
 */
proto.jisaem.auth.ParentInfo.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool active = 4;
 * @return {boolean}
 */
proto.jisaem.auth.ParentInfo.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.jisaem.auth.ParentInfo} returns this
 */
proto.jisaem.auth.ParentInfo.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.jisaem.auth.SignInType = {
  SIGN_IN_TYPE_UNSPECIFIED: 0,
  SIGN_IN_TYPE_NORMAL: 1,
  SIGN_IN_TYPE_PARENT: 2
};

/**
 * @enum {number}
 */
proto.jisaem.auth.Level = {
  AUTH_LEVEL_UNSPECIFIED: 0,
  AUTH_LEVEL_PARENT: 1,
  AUTH_LEVEL_STUDENT: 2,
  AUTH_LEVEL_TEACHER: 3,
  AUTH_LEVEL_MANAGER: 4,
  AUTH_LEVEL_SUPER: 5
};

goog.object.extend(exports, proto.jisaem.auth);
