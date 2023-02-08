import { AuthServiceClient } from '@/protos/auth/Auth_serviceServiceClientPb'
import {
  RequestPasswordUpdate, RequestProfileGet, RequestSignIn,
  RequestSignOut, RequestUsernameDuplicationCheck, RequestUsernameUpdate
} from '@/protos/auth/auth_communication_pb'
import { SignInInfo, bindSingUpInfo } from '@/models/auth/signIn.info'
import { SignInType } from "@/models/enum/signIn.type"
import { User } from '@/models/auth/user'
import { UpdateUser, getRequestProfileUpdate } from '@/models/auth/update.user'

import grpcService from '@/services/grpc.service'

const _client: AuthServiceClient = new AuthServiceClient(grpcService.GRPC_HOST)

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
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(bindSingUpInfo(res) as SignInInfo)
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
      _client.signOut(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
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
      _client.profileGet(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          const result: User = grpcService.resolveResponse(User, res.getUser()!)
          resolve(result)
        }
      })
    })
  },

  async profileUpdate(update: UpdateUser) {
    return await new Promise((resolve, reject) => {
      _client.profileUpdate(getRequestProfileUpdate(update), grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
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
      _client.passwordUpdate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
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
      _client.usernameUpdate(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
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
      _client.usernameDuplicationCheck(req, grpcService.setToken(), async (err, res) => {
        if (err) {
          grpcService.handlingError(err)
          reject(err)
        } else {
          resolve(res.getExist()!)
        }
      })
    })
  }
}
