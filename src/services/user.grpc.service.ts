import { UserServiceClient } from "@/protos/user/User_serviceServiceClientPb";
import {
  RequestParentCreate,
  RequestStudentCreate,
  RequestTeacherCreate,
  RequestUserGet,
  RequestUserListGet
} from "@/protos/user/user_communication_pb";
import {bindUserToProto, User} from "@/models/user/user"
import { Pagination, bindPaginationToProto } from "@/models/util/util"
import { AuthLevelToProto } from "@/models/enum/auth.level"

import grpcService from '@/services/grpc.service'
import utils from "@/utils/utils"
import {bindParentInfoToProto, ParentInfo} from "@/models/user/parent.info";

const _client: UserServiceClient = new UserServiceClient(grpcService.GRPC_HOST)

export default {
  async getUserList(labelIdList: string[], pagination: Pagination) {
    const req = new RequestUserListGet()
    // req.setUserLabelIdsList(labelIdList)
    req.setPagination(bindPaginationToProto(pagination))
    req.setAuthLevel(AuthLevelToProto(0))
    return await new Promise(((resolve, reject) => {
      _client.userListGet(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(grpcService.resolvePaginationResponse(User, res.getUsersList(), new Pagination(res.getPagination()!)))
        }
      })
    }))
  },

  async _createStudent(user: User) {
    const req = new RequestStudentCreate()
    req.setUser(bindUserToProto(user))
    return await new Promise(((resolve, reject) => {
      _client.studentCreate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async _createTeacher(user: User) {
    const req = new RequestTeacherCreate()
    req.setUser(bindUserToProto(user))
    return await new Promise(((resolve, reject) => {
      _client.studentCreate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async createUser(user: User) {
    return await this._createStudent(user)
  },

  async createParent(parentInfo: ParentInfo, studentId: string) {
    const req = new RequestParentCreate()
    req.setParentInfo(bindParentInfoToProto(parentInfo))
    req.setStudentId(studentId)
    return await new Promise(((resolve, reject) => {
      _client.parentCreate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async getUser(userId: string): Promise<User> {
    const req = new RequestUserGet()
    req.setId(userId)
    return await new Promise(((resolve, reject) => {
      _client.userGet(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(grpcService.resolveResponse(User, res.getUser()))
        }
      })
    }))
  }
}
