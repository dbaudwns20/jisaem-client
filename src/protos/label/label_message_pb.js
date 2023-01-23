/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.label.Label', null, global);
goog.exportSymbol('proto.label.LabelType', null, global);

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
proto.label.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.label.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.label.Label.displayName = 'proto.label.Label';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.label.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.label.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.label.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.label.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    labelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    color: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.label.Label}
 */
proto.label.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.label.Label;
  return proto.label.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.label.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.label.Label}
 */
proto.label.Label.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.label.LabelType} */ (reader.readEnum());
      msg.setLabelType(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
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
proto.label.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.label.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.label.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.label.Label.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLabelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
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
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string uid = 1;
 * @return {string}
 */
proto.label.Label.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.label.Label.prototype.setUid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.label.Label.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.label.Label.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.label.Label.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.label.Label.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.label.Label.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.label.Label.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.label.Label.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.label.Label.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LabelType label_type = 4;
 * @return {!proto.label.LabelType}
 */
proto.label.Label.prototype.getLabelType = function() {
  return /** @type {!proto.label.LabelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.label.LabelType} value */
proto.label.Label.prototype.setLabelType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.label.Label.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.label.Label.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.label.Label.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.label.Label.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string color = 7;
 * @return {string}
 */
proto.label.Label.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.label.Label.prototype.setColor = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * @enum {number}
 */
proto.label.LabelType = {
  LABEL_TYPE_UNSPECIFIED: 0,
  LABEL_TYPE_USER: 1,
  LABEL_TYPE_CLASS: 2,
  LABEL_TYPE_TEST: 3,
  LABEL_TYPE_HOMEWORK: 4
};

goog.object.extend(exports, proto.label);
