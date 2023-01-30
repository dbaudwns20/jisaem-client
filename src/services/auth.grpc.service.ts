import { AuthServiceClient } from '@/protos/auth/Auth_serviceServiceClientPb'
import { SignInType } from '@/protos/auth/auth_message_pb'
import {
  RequestPasswordUpdate,
  RequestProfileGet, RequestProfileUpdate,
  RequestSignIn,
  RequestSignOut, RequestUsernameDuplicationCheck, RequestUsernameUpdate
} from '@/protos/auth/auth_communication_pb'
import { SignInInfo } from '@/models/auth/signInInfo'
import { User } from '@/models/auth/user'
import { UpdateUser, getRequestProfileUpdate } from '@/models/auth/updateUser'
import GrpcService from '@/services/grpc.service'

import utils from "@/utils/utils"

const _client: AuthServiceClient = new AuthServiceClient(GrpcService.GRPC_HOST)

export default {
  async _signIn(signInType: SignInType, username: string, password: string) {
    // set params
    let req = new RequestSignIn()
    req.setSignInType(signInType)
    req.setUsername(username)
    req.setPassword(password)
    // call api
    return await new Promise((resolve, reject) => {
      _client.signIn(req, {}, async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(new SignInInfo(res))
        }
      })
    })
  },

  async signInParent(username: string, password: string) {
    return await this._signIn(SignInType.SIGN_IN_TYPE_PARENT, username, password)
  },

  async signInNormal(username: string, password: string) {
    return await this._signIn(SignInType.SIGN_IN_TYPE_NORMAL, username, password)
  },

  async signOut() {
    let req = new RequestSignOut()
    await new Promise((resolve, reject) => {
      _client.signOut(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  },

  async profileGet(): Promise<User> {
    let req = new RequestProfileGet()
    return await new Promise((resolve, reject) => {
      _client.profileGet(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(new User(res.getUser()!))
        }
      })
    })
  },

  async profileUpdate(update: UpdateUser) {
    return await new Promise((resolve, reject) => {
      _client.profileUpdate(getRequestProfileUpdate(update), GrpcService.setToken(), async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(res!)
        }
      })
    })
  },

  async passwordUpdate(prevPassword: string, newPassword: string) {
    let req = new RequestPasswordUpdate()
    req.setPrevPassword(prevPassword)
    req.setNewPassword(newPassword)
    return await new Promise((resolve, reject) => {
      _client.passwordUpdate(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  },

  async usernameUpdate(username: string) {
    let req = new RequestUsernameUpdate()
    req.setUsername(username)
    return await new Promise((resolve, reject) => {
      _client.usernameUpdate(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  },

  async usernameDuplicationCheck(username: string): Promise<boolean> {
    let req = new RequestUsernameDuplicationCheck()
    req.setUsername(username)
    return await new Promise((resolve, reject) => {
      _client.usernameDuplicationCheck(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          utils.message.showErrorToastMsg(err.message)
          reject(err)
        } else {
          resolve(res.getExist()!)
        }
      })
    })
  }
}
