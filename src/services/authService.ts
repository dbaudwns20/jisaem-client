import {AuthServiceClient} from "@/protos/auth/Auth_serviceServiceClientPb";
import {RequestSignIn} from "@/protos/auth/auth_communication_pb";
import {SignInType} from "@/protos/auth/auth_message_pb";
import GrpcService from "@/services/grpcService";

class AuthClient {

    client = new AuthServiceClient(GrpcService.GRPC_HOST) // TODO credential, options 리서치

    signInParent(username: string, password: string) { // TODO 적절한 model 리턴
        // TODO async?
        this._signIn(SignInType.SIGN_IN_TYPE_PARENT, username, password)
    }

    signInNormal(username: string, password: string) { // TODO 적절한 model 리턴
        // TODO async?
        this._signIn(SignInType.SIGN_IN_TYPE_NORMAL, username, password)
    }

    _signIn(signInType: SignInType, username: string, password: string) {
        // validate
        if (username == null || username == "") return // TODO 적절한 에러 처리
        if (password == null || password == "") return // TODO 적절한 에러 처리
        // set params
        let req = new RequestSignIn()
        req.setSignInType(signInType)
        req.setUsername(username)
        req.setPassword(password)
        // call api
        this.client.signIn( // TODO 비동기?
            req,
            null, // TODO metadata? token 넣을 수 있는 건가
            (err, res) => {
                if (err == null) {
                    // TODO getter 로 값 추출해서 models 로 컨버팅
                    let token = res.getToken()
                    let name = res.getName()
                    let authLevel = res.getAuthLevel().valueOf()
                } else {
                    console.log(err) // TODO 에러 핸들링
                }
            })
    }
}