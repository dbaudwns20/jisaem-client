import { getSessionToken } from '@/stores/store'
import { RpcError } from "grpc-web"

import router from "@/routers/router"
import utils from "@/utils/utils"

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

// gRPC 에러 헨들링
function handlingError(err: RpcError): void {
  const code = err.code

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
  handlingError
}
