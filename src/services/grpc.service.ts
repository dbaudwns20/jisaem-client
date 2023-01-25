import { getSessionToken } from '@/stores/store'

// GRPC 설정
const GRPC_HOST: string = "http://localhost:50050"

// 토큰 값 가져오기
function setToken(): {authorization: string} {
  return {authorization: getSessionToken()}
}

export default {
  GRPC_HOST,
  setToken
}
