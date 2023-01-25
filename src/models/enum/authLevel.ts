import {Level} from "@/protos/auth/auth_message_pb";

export enum AuthLevel {
  AUTH_LEVEL_UNSPECIFIED,
  AUTH_LEVEL_PARENT,
  AUTH_LEVEL_STUDENT,
  AUTH_LEVEL_TEACHER,
  AUTH_LEVEL_MANAGER,
  AUTH_LEVEL_SUPER
}

export function AuthLevelFromProto(pv: Level): AuthLevel {
  switch (pv.valueOf()) {
    case AuthLevel.AUTH_LEVEL_PARENT.valueOf():
      return AuthLevel.AUTH_LEVEL_PARENT
    case AuthLevel.AUTH_LEVEL_STUDENT.valueOf():
      return AuthLevel.AUTH_LEVEL_STUDENT
    case AuthLevel.AUTH_LEVEL_TEACHER.valueOf():
      return AuthLevel.AUTH_LEVEL_TEACHER
    case AuthLevel.AUTH_LEVEL_MANAGER.valueOf():
      return AuthLevel.AUTH_LEVEL_MANAGER
    case AuthLevel.AUTH_LEVEL_SUPER.valueOf():
      return AuthLevel.AUTH_LEVEL_SUPER
    default:
      return AuthLevel.AUTH_LEVEL_UNSPECIFIED
  }
}

export function AuthLevelToProto(mv: AuthLevel): Level {
  switch (mv.valueOf()) {
    case AuthLevel.AUTH_LEVEL_PARENT.valueOf():
      return Level.AUTH_LEVEL_PARENT
    case AuthLevel.AUTH_LEVEL_STUDENT.valueOf():
      return Level.AUTH_LEVEL_STUDENT
    case AuthLevel.AUTH_LEVEL_TEACHER.valueOf():
      return Level.AUTH_LEVEL_TEACHER
    case AuthLevel.AUTH_LEVEL_MANAGER.valueOf():
      return Level.AUTH_LEVEL_MANAGER
    case AuthLevel.AUTH_LEVEL_SUPER.valueOf():
      return Level.AUTH_LEVEL_SUPER
    default:
      return Level.AUTH_LEVEL_UNSPECIFIED
  }
}

export function AuthLevelToString(mv: AuthLevel): string {
  switch (mv.valueOf()) {
    case AuthLevel.AUTH_LEVEL_PARENT.valueOf():
      return "부모님"
    case AuthLevel.AUTH_LEVEL_STUDENT.valueOf():
      return "학생"
    case AuthLevel.AUTH_LEVEL_TEACHER.valueOf():
      return "선생님"
    case AuthLevel.AUTH_LEVEL_MANAGER.valueOf():
      return "관리자"
    case AuthLevel.AUTH_LEVEL_SUPER.valueOf():
      return "개발자"
    default:
      return "미지정"
  }
}

export function isManager(mv: AuthLevel): boolean {
  return mv === AuthLevel.AUTH_LEVEL_TEACHER ||
    mv === AuthLevel.AUTH_LEVEL_MANAGER ||
    mv === AuthLevel.AUTH_LEVEL_SUPER
}
