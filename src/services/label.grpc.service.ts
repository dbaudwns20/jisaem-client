import { LabelServiceClient } from "@/protos/label/Label_serviceServiceClientPb";
import { Label, bindLabelToProto } from "@/models/label/label"
import {
  RequestLabelCreate,
  RequestLabelDelete,
  RequestLabelListGet
} from "@/protos/label/label_communication_pb"
import { LabelType } from "@/models/label/label.type"
import { getRequestLabelUpdate, UpdateLabel } from "@/models/label/update.label"
import grpcService from '@/services/grpc.service'

const _client: LabelServiceClient = new LabelServiceClient(grpcService.GRPC_HOST)

export default {
  async getLabels(labelType: LabelType): Promise<Label[]> {
    const req = new RequestLabelListGet()
    req.setLabelType(labelType)
    return await new Promise(((resolve, reject) => {
      _client.labelListGet(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          const result: Label[] = grpcService.resolveResponse(Label, res.getLabelsList())
          resolve(result)
        }
      })
    }))
  },

  async createLabel(label: Label) {
    const req = new RequestLabelCreate()
    req.setLabel(bindLabelToProto(label))
    return await new Promise(((resolve, reject) => {
      _client.labelCreate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async updateLabel(update: UpdateLabel) {
    return await new Promise(((resolve, reject) => {
      _client.labelUpdate(getRequestLabelUpdate(update), grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  },

  async deleteLabels(idList: string[]) {
    const req = new RequestLabelDelete()
    req.setIdsList(idList)
    return await new Promise(((resolve, reject) => {
      _client.labelDelete(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    }))
  }

}
