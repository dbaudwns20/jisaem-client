import {SignInType as ProtoSignInType} from "@/protos/auth/auth_message_pb";

export enum SignInType {
    SIGN_IN_TYPE_UNSPECIFIED,
    SIGN_IN_TYPE_NORMAL,
    SIGN_IN_TYPE_PARENT
}

export function SignInTypeFromProto(pv: ProtoSignInType): SignInType {
    switch (pv.valueOf()) {
        case SignInType.SIGN_IN_TYPE_NORMAL.valueOf():
            return SignInType.SIGN_IN_TYPE_NORMAL
        case SignInType.SIGN_IN_TYPE_PARENT.valueOf():
            return SignInType.SIGN_IN_TYPE_PARENT
        default:
            return SignInType.SIGN_IN_TYPE_UNSPECIFIED
    }
}

export function SignInTypeToProto(mv: SignInType): ProtoSignInType {
    switch (mv.valueOf()) {
        case SignInType.SIGN_IN_TYPE_NORMAL.valueOf():
            return ProtoSignInType.SIGN_IN_TYPE_NORMAL
        case SignInType.SIGN_IN_TYPE_PARENT.valueOf():
            return ProtoSignInType.SIGN_IN_TYPE_PARENT
        default:
            return ProtoSignInType.SIGN_IN_TYPE_UNSPECIFIED
    }
}

export function SignInTypeToString(mv: SignInType): string {
    switch (mv.valueOf()) {
        case SignInType.SIGN_IN_TYPE_NORMAL.valueOf():
            return "기본"
        case SignInType.SIGN_IN_TYPE_PARENT.valueOf():
            return "부모님"
        default:
            return "미지정"
    }
}