import { AuthLevel, AuthLevelToString } from "@/models/enum/auth.level"

import store from "@/stores/store"
import _ from 'lodash'

export default {
  // 권한 레벨 가져오기
  getMyAuthLevel(): AuthLevel {
    return store.getters["sessionStore/authLevel"] as AuthLevel
  },
  // 매니져 권한인지 체크
  isManager(authLevel?: AuthLevel): boolean {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return authLevel === AuthLevel.AUTH_LEVEL_TEACHER ||
           authLevel === AuthLevel.AUTH_LEVEL_MANAGER ||
           authLevel === AuthLevel.AUTH_LEVEL_SUPER
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
  // 권한 이름 가져오기
  getMyAuthName(authLevel?: AuthLevel): string {
    if (_.isUndefined(authLevel)) authLevel = this.getMyAuthLevel()
    return AuthLevelToString(authLevel)
  }
}
