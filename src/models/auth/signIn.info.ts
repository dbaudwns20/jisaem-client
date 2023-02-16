import { AuthLevel, AuthLevelFromProto } from "@/models/enum/auth.level"
import { ResponseSignIn } from "@/protos/auth/auth_communication_pb"

/**
 * 로그인 정보
 */
export interface SignInInfo {
  readonly token: string
  readonly name: string
  readonly authLevel: AuthLevel
}

function bindSingUpInfo(proto: ResponseSignIn) {
  return {
    token: proto.getToken(),
    name: proto.getName(),
    authLevel: AuthLevelFromProto(proto.getAuthLevel()),
  }
}

export { bindSingUpInfo }
