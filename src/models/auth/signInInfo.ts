import {AuthLevel, AuthLevelFromProto} from "@/models/enum/authLevel";
import {ResponseSignIn} from "@/protos/auth/auth_communication_pb";

export class SignInInfo {
  token: string
  name: string
  authLevel: AuthLevel

  constructor(proto: ResponseSignIn) {
    this.token = proto.getToken()
    this.name = proto.getName()
    this.authLevel = AuthLevelFromProto(proto.getAuthLevel())
  }
}
