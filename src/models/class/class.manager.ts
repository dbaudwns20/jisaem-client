import {
  ClassManager as ProtoClassManager,
} from "@/protos/class/class_message_pb"
import { AuthLevel, AuthLevelFromProto, AuthLevelToProto } from "@/models/auth/auth.level"

import _ from "lodash"

export class ClassManager {
  userId: string
  authLevel: AuthLevel
  name: string

  constructor(data: ProtoClassManager) {
    this.userId = data.getUserId()
    this.authLevel = AuthLevelFromProto(data.getAuthLevel())
    this.name = data.getName()
  }
}

export function bindClassManager(classManager: ClassManager): ProtoClassManager {
  const protoClassManager: ProtoClassManager = new ProtoClassManager()
  protoClassManager.setUserId(classManager.userId)
  protoClassManager.setName(classManager.name)
  protoClassManager.setAuthLevel(AuthLevelToProto(classManager.authLevel))
  return protoClassManager
}

export function bindClassManagerListToProto(classManagerList: ClassManager[]): ProtoClassManager[] {
  const protoClassManagerList: ProtoClassManager[] = []
  _.forEach(classManagerList, it => {
    protoClassManagerList.push(bindClassManager(it))
  })
  return protoClassManagerList
}
