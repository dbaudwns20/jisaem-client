// source: class/class_message.proto
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
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var auth_auth_message_pb = require('../auth/auth_message_pb.js');
goog.object.extend(proto, auth_auth_message_pb);
var label_label_message_pb = require('../label/label_message_pb.js');
goog.object.extend(proto, label_label_message_pb);
goog.exportSymbol('proto.jisaem.class.Class', null, global);
goog.exportSymbol('proto.jisaem.class.ClassParticipant', null, global);
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
proto.jisaem.class.Class = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jisaem.class.Class.repeatedFields_, null);
};
goog.inherits(proto.jisaem.class.Class, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jisaem.class.Class.displayName = 'proto.jisaem.class.Class';
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
proto.jisaem.class.ClassParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jisaem.class.ClassParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jisaem.class.ClassParticipant.displayName = 'proto.jisaem.class.ClassParticipant';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jisaem.class.Class.repeatedFields_ = [4,12];



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
proto.jisaem.class.Class.prototype.toObject = function(opt_includeInstance) {
  return proto.jisaem.class.Class.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jisaem.class.Class} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.class.Class.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    teachersList: jspb.Message.toObjectList(msg.getTeachersList(),
    proto.jisaem.class.ClassParticipant.toObject, includeInstance),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    classLabel: (f = msg.getClassLabel()) && label_label_message_pb.Label.toObject(includeInstance, f),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    closedAt: (f = msg.getClosedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    publicExposedAt: (f = msg.getPublicExposedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    classParticipantsList: jspb.Message.toObjectList(msg.getClassParticipantsList(),
    proto.jisaem.class.ClassParticipant.toObject, includeInstance)
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
 * @return {!proto.jisaem.class.Class}
 */
proto.jisaem.class.Class.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jisaem.class.Class;
  return proto.jisaem.class.Class.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jisaem.class.Class} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jisaem.class.Class}
 */
proto.jisaem.class.Class.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
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
      var value = new proto.jisaem.class.ClassParticipant;
      reader.readMessage(value,proto.jisaem.class.ClassParticipant.deserializeBinaryFromReader);
      msg.addTeachers(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new label_label_message_pb.Label;
      reader.readMessage(value,label_label_message_pb.Label.deserializeBinaryFromReader);
      msg.setClassLabel(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setClosedAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPublicExposedAt(value);
      break;
    case 12:
      var value = new proto.jisaem.class.ClassParticipant;
      reader.readMessage(value,proto.jisaem.class.ClassParticipant.deserializeBinaryFromReader);
      msg.addClassParticipants(value);
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
proto.jisaem.class.Class.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jisaem.class.Class.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jisaem.class.Class} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.class.Class.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
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
  f = message.getTeachersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.jisaem.class.ClassParticipant.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClassLabel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      label_label_message_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClosedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPublicExposedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClassParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.jisaem.class.ClassParticipant.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uid = 1;
 * @return {string}
 */
proto.jisaem.class.Class.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.class.Class.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.class.Class.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ClassParticipant teachers = 4;
 * @return {!Array<!proto.jisaem.class.ClassParticipant>}
 */
proto.jisaem.class.Class.prototype.getTeachersList = function() {
  return /** @type{!Array<!proto.jisaem.class.ClassParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jisaem.class.ClassParticipant, 4));
};


/**
 * @param {!Array<!proto.jisaem.class.ClassParticipant>} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setTeachersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.jisaem.class.ClassParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jisaem.class.ClassParticipant}
 */
proto.jisaem.class.Class.prototype.addTeachers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.jisaem.class.ClassParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearTeachersList = function() {
  return this.setTeachersList([]);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.jisaem.class.Class.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.jisaem.class.Class.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional jisaem.label.Label class_label = 7;
 * @return {?proto.jisaem.label.Label}
 */
proto.jisaem.class.Class.prototype.getClassLabel = function() {
  return /** @type{?proto.jisaem.label.Label} */ (
    jspb.Message.getWrapperField(this, label_label_message_pb.Label, 7));
};


/**
 * @param {?proto.jisaem.label.Label|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setClassLabel = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearClassLabel = function() {
  return this.setClassLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasClassLabel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp start_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.class.Class.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.class.Class.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp closed_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.class.Class.prototype.getClosedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setClosedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearClosedAt = function() {
  return this.setClosedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasClosedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp public_exposed_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jisaem.class.Class.prototype.getPublicExposedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setPublicExposedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearPublicExposedAt = function() {
  return this.setPublicExposedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.Class.prototype.hasPublicExposedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated ClassParticipant class_participants = 12;
 * @return {!Array<!proto.jisaem.class.ClassParticipant>}
 */
proto.jisaem.class.Class.prototype.getClassParticipantsList = function() {
  return /** @type{!Array<!proto.jisaem.class.ClassParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jisaem.class.ClassParticipant, 12));
};


/**
 * @param {!Array<!proto.jisaem.class.ClassParticipant>} value
 * @return {!proto.jisaem.class.Class} returns this
*/
proto.jisaem.class.Class.prototype.setClassParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.jisaem.class.ClassParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jisaem.class.ClassParticipant}
 */
proto.jisaem.class.Class.prototype.addClassParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.jisaem.class.ClassParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jisaem.class.Class} returns this
 */
proto.jisaem.class.Class.prototype.clearClassParticipantsList = function() {
  return this.setClassParticipantsList([]);
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
proto.jisaem.class.ClassParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.jisaem.class.ClassParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jisaem.class.ClassParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.class.ClassParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    userUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authLevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userLabel: (f = msg.getUserLabel()) && label_label_message_pb.Label.toObject(includeInstance, f)
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
 * @return {!proto.jisaem.class.ClassParticipant}
 */
proto.jisaem.class.ClassParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jisaem.class.ClassParticipant;
  return proto.jisaem.class.ClassParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jisaem.class.ClassParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jisaem.class.ClassParticipant}
 */
proto.jisaem.class.ClassParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUid(value);
      break;
    case 2:
      var value = /** @type {!proto.jisaem.auth.Level} */ (reader.readEnum());
      msg.setAuthLevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new label_label_message_pb.Label;
      reader.readMessage(value,label_label_message_pb.Label.deserializeBinaryFromReader);
      msg.setUserLabel(value);
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
proto.jisaem.class.ClassParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jisaem.class.ClassParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jisaem.class.ClassParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jisaem.class.ClassParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserLabel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      label_label_message_pb.Label.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_uid = 1;
 * @return {string}
 */
proto.jisaem.class.ClassParticipant.prototype.getUserUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.class.ClassParticipant} returns this
 */
proto.jisaem.class.ClassParticipant.prototype.setUserUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional jisaem.auth.Level auth_level = 2;
 * @return {!proto.jisaem.auth.Level}
 */
proto.jisaem.class.ClassParticipant.prototype.getAuthLevel = function() {
  return /** @type {!proto.jisaem.auth.Level} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.jisaem.auth.Level} value
 * @return {!proto.jisaem.class.ClassParticipant} returns this
 */
proto.jisaem.class.ClassParticipant.prototype.setAuthLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.jisaem.class.ClassParticipant.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.jisaem.class.ClassParticipant} returns this
 */
proto.jisaem.class.ClassParticipant.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional jisaem.label.Label user_label = 4;
 * @return {?proto.jisaem.label.Label}
 */
proto.jisaem.class.ClassParticipant.prototype.getUserLabel = function() {
  return /** @type{?proto.jisaem.label.Label} */ (
    jspb.Message.getWrapperField(this, label_label_message_pb.Label, 4));
};


/**
 * @param {?proto.jisaem.label.Label|undefined} value
 * @return {!proto.jisaem.class.ClassParticipant} returns this
*/
proto.jisaem.class.ClassParticipant.prototype.setUserLabel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jisaem.class.ClassParticipant} returns this
 */
proto.jisaem.class.ClassParticipant.prototype.clearUserLabel = function() {
  return this.setUserLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jisaem.class.ClassParticipant.prototype.hasUserLabel = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.jisaem.class);
