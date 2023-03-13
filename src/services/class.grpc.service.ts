import { bindClassToProto, Class } from "@/models/class/class"
import {
  RequestClassCreateAsManager,
  RequestClassDelete, RequestClassGet, RequestClassLabelUpdate,
  RequestClassListGet
} from "@/protos/class/class_communication_pb"
import { bindPaginationInstance, bindPaginationToProto, Pagination } from "@/models/util/util"
import { ClassServiceClient } from "@/protos/class/Class_serviceServiceClientPb"

import grpcService from "@/services/grpc.service"

const _client: ClassServiceClient = new ClassServiceClient(grpcService.GRPC_HOST)

export default {

  async getClassList(classLabelIdList: string[], isClosed: boolean, pagination: Pagination): Promise<Class[]> {
    const req = new RequestClassListGet()
    req.setClassLabelIdsList(classLabelIdList)
    req.setClosed(isClosed)
    req.setPagination(bindPaginationToProto(pagination))
    return await new Promise(((resolve, reject) => {
      _client.classListGet(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(grpcService.resolvePaginationResponse(Class, res.getClassesList(), bindPaginationInstance(res.getPagination()!)))
        }
      })
    }))
  },

  // async getClass(classId: string): Promise<Class> {
  //   const req = new RequestClassGet()
  //   req.setId(classId)
  //   return await new Promise(((resolve, reject) => {
  //   }))
  // },

  async _createClassAsManager(newClass: Class) {
    const req = new RequestClassCreateAsManager()
    req.setClass(bindClassToProto(newClass))
    return await new Promise(((resolve, reject) => {
      _client.classCreateAsManager(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res)
        }
      })
    }))
  },

  async createClass(newClass: Class) {
    return await this._createClassAsManager(newClass)
  },

  async deleteClass(idList: string[]) {
    const req = new RequestClassDelete()
    req.setIdsList(idList)
    return await new Promise(((resolve, reject) => {
      _client.classDelete(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async updateClassLabel(classIdList: string[], labelIdList: string[]) {
    const req = new RequestClassLabelUpdate()
    req.setIdsList(classIdList)
    req.setClassLabelIdsList(labelIdList)
    return await new Promise(((resolve, reject) => {
      _client.classLabelUpdate(req, grpcService.setToken(), async (err, res) => {
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
