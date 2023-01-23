// import * as grpc from "grpc";
// TODO 환경 변수화가 필요할지, 다른 방식으로 보관할지
const GRPC_HOST : string = "localhost:50052"

// TODO 메타데이터에 토큰 담아서 보내주어야 함 -> 토큰은 어디서 관리하는지?
// function setToken(): grpc.Metadata {
//     let md = new grpc.Metadata()
//     md.add('authorization', '[TOKEN]') // TODO 토큰
//     return md
// }

export default {
    GRPC_HOST,
}