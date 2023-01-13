export default {
  /**
   * required 속성을 갖고 있는 데이터 검증
   */
  validate(): boolean {
    let isValid: boolean = true
    for (const input of document.querySelectorAll('*[required]')) {
      if (!(<HTMLSelectElement>input).checkValidity()) {
        isValid = false
        // break 이용하면 모든 필드에 입력여부를 확인할 수 없다.
      }
    }
    return isValid
  }
}
