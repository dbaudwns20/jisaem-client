import _validator from "@/utils/validator"
import _message from "@/utils/message"
import _ from 'lodash'

export default {

  getUpdatedFields(defaultForm: any, currentForm: any) {
    let result: any = {}
    const _keys = Object.keys(defaultForm)
    _keys.forEach((key) => {
        if (defaultForm[key] instanceof Date) {
          if (defaultForm[key].getTime() !== currentForm[key].getTime()) {
            result[key] = currentForm[key]
          }
        } else {
          if (!_.eq(defaultForm[key], currentForm[key])) {
            result[key] = currentForm[key]
          }
        }
      }
    )
    return result
  },

  validator: _validator,
  message: _message
}
