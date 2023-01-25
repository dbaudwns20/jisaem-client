// import * as grpc from "grpc";
const GRPC_HOST: string = "http://localhost:50050"

// TODO 메타데이터에 토큰 담아서 보내주어야 함 -> 토큰은 어디서 관리하는지?
function setToken(): {} {
  // TODO token 넣어주기
  return {"authorization": "[TOKEN]"}
}

export default {
  GRPC_HOST,
  setToken
}
