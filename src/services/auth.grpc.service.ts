import { AuthServiceClient } from '@/protos/auth/Auth_serviceServiceClientPb'
import { SignInType } from '@/protos/auth/auth_message_pb'
import {
  RequestPasswordUpdate,
  RequestProfileGet,
  RequestSignIn,
  RequestSignOut, RequestUsernameDuplicationCheck, RequestUsernameUpdate
} from '@/protos/auth/auth_communication_pb'
import { SignInInfo } from '@/models/auth/signInInfo'
import { User } from '@/models/auth/user'
import { UpdateUser } from '@/models/auth/updateUser'
import GrpcService from '@/services/grpc.service'

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
          console.log(err) // TODO 에러 핸들링
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
    return await new Promise((resolve, reject) => {
      _client.signOut(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          // TODO 스토리지 토큰 및 정보 제거하기
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
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          let profile = new User(res.getUser()!)
          resolve(profile)
        }
      })
    })
  },

  async profileUpdate(update: UpdateUser) {
    // TODO vue의 computed를 사용하는게 효율적인지 모르겠음
    return await new Promise((resolve, reject) => {
      _client.profileUpdate(update.getRequestProfileUpdate(), GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
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
          console.log(err) // TODO 에러 핸들링
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
          console.log(err) // TODO 에러 핸들링
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
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          resolve(res.getExist()!)
        }
      })
    })
  }
}
