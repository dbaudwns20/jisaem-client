import * as jspb from 'google-protobuf'

import * as auth_auth_message_pb from '../auth/auth_message_pb';


export class RequestSignIn extends jspb.Message {
  getSignInType(): auth_auth_message_pb.SignInType;
  setSignInType(value: auth_auth_message_pb.SignInType): RequestSignIn;

  getUsername(): string;
  setUsername(value: string): RequestSignIn;

  getPassword(): string;
  setPassword(value: string): RequestSignIn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSignIn.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSignIn): RequestSignIn.AsObject;
  static serializeBinaryToWriter(message: RequestSignIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSignIn;
  static deserializeBinaryFromReader(message: RequestSignIn, reader: jspb.BinaryReader): RequestSignIn;
}

export namespace RequestSignIn {
  export type AsObject = {
    signInType: auth_auth_message_pb.SignInType,
    username: string,
    password: string,
  }
}

export class ResponseSignIn extends jspb.Message {
  getToken(): string;
  setToken(value: string): ResponseSignIn;

  getName(): string;
  setName(value: string): ResponseSignIn;

  getAuthLevel(): auth_auth_message_pb.Level;
  setAuthLevel(value: auth_auth_message_pb.Level): ResponseSignIn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSignIn.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSignIn): ResponseSignIn.AsObject;
  static serializeBinaryToWriter(message: ResponseSignIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSignIn;
  static deserializeBinaryFromReader(message: ResponseSignIn, reader: jspb.BinaryReader): ResponseSignIn;
}

export namespace ResponseSignIn {
  export type AsObject = {
    token: string,
    name: string,
    authLevel: auth_auth_message_pb.Level,
  }
}

export class RequestSignOut extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestSignOut.AsObject;
  static toObject(includeInstance: boolean, msg: RequestSignOut): RequestSignOut.AsObject;
  static serializeBinaryToWriter(message: RequestSignOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestSignOut;
  static deserializeBinaryFromReader(message: RequestSignOut, reader: jspb.BinaryReader): RequestSignOut;
}

export namespace RequestSignOut {
  export type AsObject = {
  }
}

export class ResponseSignOut extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSignOut.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSignOut): ResponseSignOut.AsObject;
  static serializeBinaryToWriter(message: ResponseSignOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSignOut;
  static deserializeBinaryFromReader(message: ResponseSignOut, reader: jspb.BinaryReader): ResponseSignOut;
}

export namespace ResponseSignOut {
  export type AsObject = {
  }
}

export class RequestProfileGet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestProfileGet.AsObject;
  static toObject(includeInstance: boolean, msg: RequestProfileGet): RequestProfileGet.AsObject;
  static serializeBinaryToWriter(message: RequestProfileGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestProfileGet;
  static deserializeBinaryFromReader(message: RequestProfileGet, reader: jspb.BinaryReader): RequestProfileGet;
}

export namespace RequestProfileGet {
  export type AsObject = {
  }
}

export class ResponseProfileGet extends jspb.Message {
  getUser(): auth_auth_message_pb.User | undefined;
  setUser(value?: auth_auth_message_pb.User): ResponseProfileGet;
  hasUser(): boolean;
  clearUser(): ResponseProfileGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseProfileGet.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseProfileGet): ResponseProfileGet.AsObject;
  static serializeBinaryToWriter(message: ResponseProfileGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseProfileGet;
  static deserializeBinaryFromReader(message: ResponseProfileGet, reader: jspb.BinaryReader): ResponseProfileGet;
}

export namespace ResponseProfileGet {
  export type AsObject = {
    user?: auth_auth_message_pb.User.AsObject,
  }
}

export class RequestProfileUpdate extends jspb.Message {
  getName(): string;
  setName(value: string): RequestProfileUpdate;

  getPhone(): string;
  setPhone(value: string): RequestProfileUpdate;

  getEmail(): string;
  setEmail(value: string): RequestProfileUpdate;

  getUserLabelUid(): string;
  setUserLabelUid(value: string): RequestProfileUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestProfileUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestProfileUpdate): RequestProfileUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestProfileUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestProfileUpdate;
  static deserializeBinaryFromReader(message: RequestProfileUpdate, reader: jspb.BinaryReader): RequestProfileUpdate;
}

export namespace RequestProfileUpdate {
  export type AsObject = {
    name: string,
    phone: string,
    email: string,
    userLabelUid: string,
  }
}

export class ResponseProfileUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseProfileUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseProfileUpdate): ResponseProfileUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponseProfileUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseProfileUpdate;
  static deserializeBinaryFromReader(message: ResponseProfileUpdate, reader: jspb.BinaryReader): ResponseProfileUpdate;
}

export namespace ResponseProfileUpdate {
  export type AsObject = {
  }
}

export class RequestPasswordUpdate extends jspb.Message {
  getPrevPassword(): string;
  setPrevPassword(value: string): RequestPasswordUpdate;

  getNewPassword(): string;
  setNewPassword(value: string): RequestPasswordUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPasswordUpdate): RequestPasswordUpdate.AsObject;
  static serializeBinaryToWriter(message: RequestPasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPasswordUpdate;
  static deserializeBinaryFromReader(message: RequestPasswordUpdate, reader: jspb.BinaryReader): RequestPasswordUpdate;
}

export namespace RequestPasswordUpdate {
  export type AsObject = {
    prevPassword: string,
    newPassword: string,
  }
}

export class ResponsePasswordUpdate extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsePasswordUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsePasswordUpdate): ResponsePasswordUpdate.AsObject;
  static serializeBinaryToWriter(message: ResponsePasswordUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsePasswordUpdate;
  static deserializeBinaryFromReader(message: ResponsePasswordUpdate, reader: jspb.BinaryReader): ResponsePasswordUpdate;
}

export namespace ResponsePasswordUpdate {
  export type AsObject = {
  }
}

