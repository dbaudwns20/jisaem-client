import { Pagination } from "@/models/util/util"
import { getSessionToken } from '@/stores/store'
import { RpcError } from "grpc-web"

import router from "@/routers/router"
import utils from "@/utils/utils"

import _ from 'lodash'

// gRPC 설정
const GRPC_HOST: string = "http://localhost:50050"

// 토큰 값 가져오기
function setToken(): {authorization: string} {
  return {authorization: getSessionToken()}
}

// 토큰관련 에러 처리
function handlingTokenError() {
  utils.message.showErrorToastMsg('로그인 세션이 만료되었습니다')
  window.localStorage.removeItem('vuex')
  router.push('/')
}

// 인증정보 에러 처리
function handlingUnauthenticatedError() {
  utils.message.showErrorToastMsg('유효하지 않은 인증정보입니다')
  window.localStorage.removeItem('vuex')
  router.push('/')
}

// gRPC 응답값 해당유형으로 Resolve
function resolveResponse<T, K>(type: { new ({}: T): K}, res: any): any  {
  if (_.isArray(res)) {
    const result: K[] = []
    res.forEach((it) => {
      result.push(new type(it))
    })
    return result
  } else {
    return new type(res) as K
  }
}

// Pagination 정보를 포함한 응답값 Resolve
function resolvePaginationResponse<T, K>(type: { new ({}: T): K}, res: any, pageInfo: Pagination): any  {
  return {
    list: resolveResponse(type, res),
    pageInfo: pageInfo
  }
}

// gRPC 에러 헨들링
function handlingError(err: RpcError): void {
  const code: number = err.code
  if (code === 16 && err.message === 'unauthenticated error') {
    handlingUnauthenticatedError()
    return
  }
  const msg = err.message.split(" : ")[1]
  switch (msg) {
    case 'expired token':
      handlingTokenError()
      break
    case 'user not exist':
      utils.message.showErrorToastMsg('아이디 또는 비밀번호가 일치하지 않습니다')
      break
    case 'empty username':
      utils.message.showErrorToastMsg('아이디 값이 존재하지 않습니다')
      break
    case 'username already exist':
      utils.message.showErrorToastMsg('이미 사용 중인 아이디입니다')
      break
    default:
      utils.message.showErrorToastMsg('처리되지 않은 오류가 발생하였습니다')
  }
}

export default {
  GRPC_HOST,
  setToken,
  handlingError,
  resolveResponse,
  resolvePaginationResponse
}
