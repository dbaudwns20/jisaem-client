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
    _keys.forEach((key: string) => {
        if (defaultForm[key] instanceof Date) {
          if (defaultForm[key].getTime() !== currentForm[key].getTime())
            result[key] = currentForm[key]
        } else if (defaultForm[key] instanceof Object) {
          if (!_.eq(JSON.stringify(defaultForm[key]), JSON.stringify(currentForm[key])))
            result[key] = currentForm[key]
        } else {
          if (!_.eq(defaultForm[key], currentForm[key]))
            result[key] = currentForm[key]
        }
      }
    )
    return result
  },

  /**
   * 랜덤 컬러 코드 생성
   */
  generateRandomColorCode(): string {
    // 16진수 값 랜덤 생성
    const letters = '0123456789ABCDEF'
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
      colorCode += letters[Math.floor(Math.random() * 16)]
    }
    return colorCode
  },

  /**
   * 텍스트 컬러 가져오기
   * @param hex
   */
  getTextColor(hex: string) {
    if (!_validator.checkCodeCode(hex)) return
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!
    const rgb = [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    const brightness = Math.round((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000
    return (brightness > 125) ? 'black' : 'white'
  },

  /**
   * Date to String (format YYYY-MM-DD)
   * @param date
   */
  convertDateToString(date: Date): string {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()
    if (month.length < 2)
      month = '0' + month
    if (day.length < 2)
      day = '0' + day
    return [year, month, day].join('-')
  },

  validator: _validator,
  message: _message,
  authority: _authority
}
