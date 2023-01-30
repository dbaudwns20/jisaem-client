import _validator from "@/utils/validator"
import _message from "@/utils/message"
import _authority from "@/utils/authority"

import _ from 'lodash'

export default {

  /**
   * 변경된 필드 가져오기
   * @param defaultForm 변경 전 데이터
   * @param currentForm 수정 된 데이터
   * @param keys 정의된 key 만 가져오기, 미정의 시 defaultForm 의 key 사용
   */
  getUpdatedFields(defaultForm: any, currentForm: any, keys: string[] = []) {
    let result: any = {}
    const _keys = _.isEmpty(keys) ? Object.keys(defaultForm) : keys
    _keys.forEach((key) => {
        if (defaultForm[key] instanceof Date) {
          if (defaultForm[key].getTime() !== currentForm[key].getTime())
            result[key] = currentForm[key]
        } else {
          if (!_.eq(defaultForm[key], currentForm[key]))
            result[key] = currentForm[key]
        }
      }
    )
    return result
  },

  validator: _validator,
  message: _message,
  authority: _authority
}
