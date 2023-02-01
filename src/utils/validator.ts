const EMAIL_RULE: RegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
const PASSWORD_RULE: RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/)
const USERNAME_RULE: RegExp = new RegExp(/^(?=.*[A-z\d])[A-z\d]{1,15}$/)
const KOR_RULE: RegExp = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)
const BLANK_RULE: RegExp = new RegExp(/[\s]/gm)

export default {
  /**
   * submit 된 form 데이터 검증
   * @param form
   */
  validateForm(form: HTMLFormElement): boolean {
    let isValid: boolean = true
    for (const input of form) {
      if (!(<HTMLSelectElement>input).checkValidity()) {
        isValid = false
        // break 이용하면 모든 필드에 입력여부를 확인할 수 없다.
      }
    }
    return isValid
  },

  /**
   * Email 규칙 체크
   * @param value
   */
  checkEmail(value: string): boolean {
    return EMAIL_RULE.test(value)
  },

  /**
   * 비밀번호 규칙 체크
   *
   * @param value
   */
  checkPassword(value: string): boolean {
    return PASSWORD_RULE.test(value)
  },

  /**
   * 한글 체크
   * @param value
   */
  checkKorean(value: string): boolean {
    return KOR_RULE.test(value)
  },

  /**
   * 공백이 존재하는 경우
   * @param value
   */
  checkBlank(value: string): boolean {
    return BLANK_RULE.test(value)
  },

  /**
   * 아이디 체크
   *
   * @param value
   */
  checkUsername(value: string): boolean {
    return USERNAME_RULE.test(value)
  },

}
