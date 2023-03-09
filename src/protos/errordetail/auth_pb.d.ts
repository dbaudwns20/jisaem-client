import * as jspb from 'google-protobuf'



export class TokenErrorInvalid extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenErrorInvalid.AsObject;
  static toObject(includeInstance: boolean, msg: TokenErrorInvalid): TokenErrorInvalid.AsObject;
  static serializeBinaryToWriter(message: TokenErrorInvalid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenErrorInvalid;
  static deserializeBinaryFromReader(message: TokenErrorInvalid, reader: jspb.BinaryReader): TokenErrorInvalid;
}

export namespace TokenErrorInvalid {
  export type AsObject = {
  }
}

export class TokenErrorExpired extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenErrorExpired.AsObject;
  static toObject(includeInstance: boolean, msg: TokenErrorExpired): TokenErrorExpired.AsObject;
  static serializeBinaryToWriter(message: TokenErrorExpired, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenErrorExpired;
  static deserializeBinaryFromReader(message: TokenErrorExpired, reader: jspb.BinaryReader): TokenErrorExpired;
}

export namespace TokenErrorExpired {
  export type AsObject = {
  }
}

export class TokenErrorElse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenErrorElse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenErrorElse): TokenErrorElse.AsObject;
  static serializeBinaryToWriter(message: TokenErrorElse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenErrorElse;
  static deserializeBinaryFromReader(message: TokenErrorElse, reader: jspb.BinaryReader): TokenErrorElse;
}

export namespace TokenErrorElse {
  export type AsObject = {
  }
}

