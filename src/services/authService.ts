import {AuthServiceClient} from "@/protos/auth/Auth_serviceServiceClientPb";
import {
  RequestPasswordUpdate,
  RequestProfileGet,
  RequestSignIn,
  RequestSignOut,
  RequestUsernameDuplicationCheck,
  RequestUsernameUpdate
} from "@/protos/auth/auth_communication_pb";
import {SignInType} from "@/protos/auth/auth_message_pb";
import GrpcService from "@/services/grpcService";
import {SignInInfo} from "@/models/auth/signInInfo";
import {User} from "@/models/auth/user";
import {UpdateUser} from "@/models/auth/updateUser";

class AuthGrpcClient {
  _client: AuthServiceClient

  constructor() {
    this._client = new AuthServiceClient(GrpcService.GRPC_HOST) // TODO credential, options 리서치
  }

  async signInParent(username: string, password: string) {
    await this._signIn(SignInType.SIGN_IN_TYPE_PARENT, username, password)
  }

  async signInNormal(username: string, password: string) {
    await this._signIn(SignInType.SIGN_IN_TYPE_NORMAL, username, password)
  }

  async _signIn(signInType: SignInType, username: string, password: string) {
    // validate
    if (username == null || username == "") return // TODO 에러 핸들링
    if (password == null || password == "") return // TODO 에러 핸들링
    // set params
    let req = new RequestSignIn()
    req.setSignInType(signInType)
    req.setUsername(username)
    req.setPassword(password)
    // call api
    return await new Promise((resolve, reject) => {
      this._client.signIn(req, {}, async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          // TODO signInInfo 가지고 있기
          let signInInfo = new SignInInfo(res!)
          resolve(res)
        }
      })
    })
  }

  async signOut() {
    let req = new RequestSignOut()
    return await new Promise((resolve, reject) => {
      this._client.signOut(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          // TODO 스토리지 토큰 및 정보 제거하기
          resolve(res)
        }
      })
    })
  }

  async profileGet(): Promise<User> {
    let req = new RequestProfileGet()
    return await new Promise((resolve, reject) => {
      this._client.profileGet(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          let profile = new User(res.getUser()!)
          resolve(profile)
        }
      })
    })
  }

  async profileUpdate(update: UpdateUser) {
    // TODO vue의 computed를 사용하는게 효율적인지 모르겠음
    return await new Promise((resolve, reject) => {
      this._client.profileUpdate(update.getRequestProfileUpdate(), GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          resolve(res!)
        }
      })
    })
  }

  async passwordUpdate(prevPassword: string, newPassword: string) {
    let req = new RequestPasswordUpdate()
    req.setPrevPassword(prevPassword)
    req.setNewPassword(newPassword)
    return await new Promise((resolve, reject) => {
      this._client.passwordUpdate(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  async usernameUpdate(username: string) {
    let req = new RequestUsernameUpdate()
    req.setUsername(username)
    return await new Promise((resolve, reject) => {
      this._client.usernameUpdate(req, GrpcService.setToken(), async (err, res) => {
        if (err) {
          console.log(err) // TODO 에러 핸들링
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  async usernameDuplicationCheck(username: string): Promise<boolean> {
    let req = new RequestUsernameDuplicationCheck()
    req.setUsername(username)
    return await new Promise((resolve, reject) => {
      this._client.usernameDuplicationCheck(req, GrpcService.setToken(), async (err, res) => {
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

const AuthClient: AuthGrpcClient = new AuthGrpcClient() // 초기화

export {AuthClient}