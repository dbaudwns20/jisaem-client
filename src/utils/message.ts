import { PluginOptions, useToast } from "vue-toastification"
import * as _ from 'lodash';

const toast = useToast()

const setDefault = (): {} => {
  return {
    position: "top-center", // 위치
    timeout: 2000, // 보이는 시간
    closeOnClick: true, // 클릭으로 닫기
    pauseOnFocusLoss: true, // 화면에 포커스 유지 안할시 메시지 고정
    pauseOnHover: true, // 마우스 대고 있으면 유지
    draggable: true, // 드레그로 제거 여부
    draggablePercent: 0.6, // 드래그 길이
    showCloseButtonOnHover: true, // hover 시 닫기버튼 보이기
    hideProgressBar: true, // 메시지 창 유지시간 숨기기 여부
    rtl: false, // 프로그래스 바 방향 false 왼쪽에서 오른쪽, true 오른쪽에서 왼쪽
    closeButton: "button",
    icon: true, // 아이콘 icon: "fas fa-rocket" fontawesome 사용가능
  }
}

const setOptions = (options?: {}): {} => {
  if (_.isEmpty(options)) return setDefault()
  return _.merge(setDefault(), options)
}

export default {
  showToastMsg(msg: string, options?: {}): void {
    toast.info(msg, setOptions(options) as PluginOptions)
  },
  showSuccessToastMsg(msg: string, options?: {}): void {
    toast.success(msg, setOptions(options) as PluginOptions)
  },
  showWarningToastMsg(msg: string, options?: {}): void {
    toast.warning(msg, setOptions(options) as PluginOptions)
  },
  showErrorToastMsg(msg: string, options?: {}): void {
    toast.error(msg, setOptions(options) as PluginOptions)
  },
}
