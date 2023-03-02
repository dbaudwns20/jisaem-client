import { AuthLevel, AuthLevelToString } from "@/models/auth/auth.level"

import store from "@/stores/store"
import _ from 'lodash'

export default {
  // 내 권한 레벨 가져오기
  getMyAuthLevel(): AuthLevel {
    return store.getters["sessionStore/authLevel"] as AuthLevel
  },
  // 미지정(전체) 권한인지 체크
  isUnspecified(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_UNSPECIFIED
  },
  // 학생 권한인지 체크
  isStudent(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_STUDENT
  },
  // 부모 권한인지 체크
  isParent(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_PARENT
  },
  // 선생님 권한인지 체크
  isTeacher(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_TEACHER
  },
  // 매니져 권한인지 체크
  isManager(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_MANAGER
  },
  // 수퍼관리지 권한인지 체크
  isSuper(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_SUPER
  },
  // 권한 이름 가져오기
  getMyAuthName(authLevel?: AuthLevel): string {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return AuthLevelToString(authLevel)
  }
}
