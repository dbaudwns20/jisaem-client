import {UserServiceClient} from "@/protos/user/User_serviceServiceClientPb"
import {
  RequestManagerCreate,
  RequestParentCreate,
  RequestStudentCreate,
  RequestTeacherCreate,
  RequestUserDelete,
  RequestUserGet, RequestUserLabelUpdate,
  RequestUserListGet, RequestUserUpdate
} from "@/protos/user/user_communication_pb"
import { bindUserToProto, User } from "@/models/user/user"
import { bindPaginationToProto, Pagination } from "@/models/util/util"
import { bindParentInfoToProto, ParentInfo } from "@/models/user/parent.info"
import { AuthLevel, AuthLevelToProto } from "@/models/auth/auth.level"

import grpcService from '@/services/grpc.service'
import {getRequestProfileUpdate, getRequestUserUpdate, UpdateUser} from "@/models/user/update.user";
import {Label} from "@/models/label/label";

const _client: UserServiceClient = new UserServiceClient(grpcService.GRPC_HOST)

export default {

  async getUserList(labelIdList: string[], authLevel: AuthLevel ,pagination: Pagination) {
    const req = new RequestUserListGet()
    // req.setUserLabelIdsList(labelIdList)
    req.setPagination(bindPaginationToProto(pagination))
    req.setAuthLevel(AuthLevelToProto(authLevel))
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
      _client.teacherCreate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async _createManager(user: User) {
    const req = new RequestManagerCreate()
    req.setUser(bindUserToProto(user))
    return await new Promise(((resolve, reject) => {
      _client.managerCreate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async createUser(user: User, authLevel: AuthLevel) {
    if (authLevel === AuthLevel.AUTH_LEVEL_STUDENT)
      return await this._createStudent(user)
    else if (authLevel === AuthLevel.AUTH_LEVEL_TEACHER)
      return await this._createTeacher(user)
    else if (authLevel === AuthLevel.AUTH_LEVEL_MANAGER)
      return await this._createManager(user)
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
  },

  async updateUser(id: string, updateUser: UpdateUser) {
    return await new Promise(((resolve, reject) => {
      _client.userUpdate(getRequestUserUpdate(id, updateUser), grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res)
        }
      })
    }))
  },

  async deleteUser(idList: string[]) {
    const req = new RequestUserDelete()
    req.setIdsList(idList)
    return await new Promise(((resolve, reject) => {
      _client.userDelete(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res)
        }
      })
    }))
  },

  async updateUserLabel(userIdList: string[], labelIdList: string[]) {
    const req = new RequestUserLabelUpdate()
    req.setIdsList(userIdList)
    req.setUserLabelIdsList(labelIdList)
    return await new Promise(((resolve, reject) => {
      _client.userLabelUpdate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res)
        }
      })
    }))
  }
}
