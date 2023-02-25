<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="dropdown" :class="[{ 'is-active': isActive }, {'is-up': isUp}]">
      <div class="dropdown-trigger">
        <div class="control has-icons-left">
          <div ref="labelSelect" class="labels" aria-haspopup="true" aria-controls="dropdown-menu"
               :key="componentKey"
               :class="checkClass">
            <LabelElement v-for="(label, key) in selectedLabels" :key=key
                          :params="{data: {name: label.name, color: label.color, id: label.id}}"
                          :is-deletable="true"
                          @remove-label="removeLabel"/>
            <input ref="labelInput" type="text" class="input labels-input"
                   :disabled="isDisabled"
                   :required="isRequired"
                   :placeholder="showPlaceholder"
                   @keydown="keydown($event)" >
          </div>
          <span class="icon is-small is-left" :style="[ isActive ? 'color: hsl(0, 0%, 29%)' : '' ]">
            <i class="fa-solid fa-tags"></i>
          </span>
        </div>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div ref="dropdownContent" class="dropdown-content">
          <a class="dropdown-item" :class="[{'selected': label.selected}, {'focused': label.focused}]"
             v-for="(label, idx) in labelList" :key=idx
             @click="setLabel(label)">
            <span class="label-checked-icon" v-if="label.selected"><i class="fa-regular fa-circle-check"></i></span>
            <LabelElement :params="{data: {name: label.name, color: label.color, id: label.id}}" :size="'is-small'" />
            <span class="label-description" v-if="label.description"> - {{ label.description }}</span>
          </a>
        </div>
      </div>
    </div>
    <p class="help" :class="checkClass">
      {{ checkMsg }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { Label } from "@/models/label/label"
import LabelElement from '@/components/label/LabelElement.vue'
import labelGrpcService from "@/services/label.grpc.service"

import _ from 'lodash'

export default defineComponent({
  name: "LabelSelect",
  emits: ['update:modelValue'],
  props: {
    label: { type: String, default: "" },
    isUp: { type: Boolean, default: false },
    isRequired: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    placeholder: { type: String, default: '레이블을 선택해주세요' },
    labelType: { type: Number },
    modelValue: { type: Array, default: () => [] }
  },
  components: {
    LabelElement
  },
  setup(props, { emit }) {
    // valid 표시용 변수
    const checkClass = ref('')
    const checkMsg = ref('')
    // ref
    const labelSelect = ref()
    const labelInput = ref()
    const dropdownContent = ref()
    // 레이블 목록 보이기 여부
    const isActive = ref(false)
    // 컴포넌트 키
    const componentKey = ref(false)
    // gRPC 레이블 목록
    const labelList = ref([] as Label[])
    // 선택한 레이블 목록
    const selectedLabels = ref([] as Label[])
    // placeholder
    const showPlaceholder = ref(props.placeholder)

    // 컴포넌트 reload
    const reloadComponent = () => {
      componentKey.value = !componentKey.value
    }
    // props 값을 반영
    const setLabelList = () => {
      _.forEach(props.modelValue, (it: any) => {
        selectedLabels.value.push(it)
        for (const label of labelList.value) {
          if (label.id === it.id) {
            label.selected = true
            break
          }
        }
      })
      setPlaceholder()
    }
    // gRPC 레이블 목록 조회
    const getLabelList = async () => {
      labelList.value = await labelGrpcService.getLabels(props.labelType!)
      await setLabelInputFocus()
      if (props.modelValue.length > 0) {
        await setLabelList()
      }
    }
    // 레이블 선택, 복수 선택 가능. 같은 레이블을 선택하면 제거
    const setLabel = (label: Label) => {
      const idx = _.findIndex(selectedLabels.value, {id: label.id})
      if (idx !== -1) {
        // 같은 레이블이라면 제거
        selectedLabels.value.splice(idx, 1)
        label.selected = false
      } else {
        // 레이블 추가
        selectedLabels.value.push(label)
        label.selected = true
      }
      emit('update:modelValue', selectedLabels.value)
      reloadComponent()
      setPlaceholder()
      setLabelInputFocus()
      setLabelFocus(label.id)
    }
    // 레이블 삭제
    const removeLabel = (id: string) => {
      labelList.value[_.findIndex(labelList.value, {id: id})].selected = false
      selectedLabels.value.splice(_.findIndex(selectedLabels.value, {id: id}), 1)
      emit('update:modelValue', selectedLabels.value)
      reloadComponent()
      setPlaceholder()
    }
    // 레이블이 선택되면 placeholder 감추기
    const setPlaceholder = () => {
      showPlaceholder.value = selectedLabels.value.length > 0 ? '' : props.placeholder
    }
    // labelInput focus
    const setLabelInputFocus = () => {
      setTimeout(() => {
        checkClass.value = 'is-focused'
        labelInput.value.focus()
      })
    }
    // LabelInput 클릭 시
    const onLabelInputClick = () => {
      setLabelInputFocus()
      isActive.value = !isActive.value
      if (_.findIndex(labelList.value, {focused: true}) === -1) {
        // 리스트 목록이 닫혀있다면 열고 첫번째 목록에 focus
        setLabelFocus(labelList.value[0].id)
      }
    }
    // blur 시 처리
    const blur = (event: any) => {
      isActive.value = false
    }
    // 레이블 focus
    const setLabelFocus = (id: string | null = null)  => {
      if (_.isEmpty(labelList.value)) return
      if (_.isNull(id)) _.forEach(labelList.value, it => {it.focused = false})
      else _.forEach(labelList.value, it => {it.focused = it.id === id})
    }
    // 키보드 입력 이벤트
    const keydown = (event: any) => {
      let focusedIdx: number = _.findIndex(labelList.value, {focused: true})
      switch (event.code) {
        case 'ArrowDown':
          if (focusedIdx === -1) {
            isActive.value = true
            setLabelFocus(labelList.value[0].id)
          } else if (focusedIdx !== labelList.value.length - 1) {
            if (!isActive.value) isActive.value = true
            labelList.value[focusedIdx].focused = false
            labelList.value[focusedIdx + 1].focused = true
            moveScroll(event.code)
          }
          break
        case 'ArrowUp':
          if (focusedIdx < 1) {
            isActive.value = false
            setLabelFocus()
          } else {
            if (!isActive.value) isActive.value = true
            labelList.value[focusedIdx].focused = false
            labelList.value[focusedIdx - 1].focused = true
            moveScroll(event.code)
          }
          break
        case 'Enter':
          if (isActive.value) {
            setLabel(labelList.value[focusedIdx])
          } else {
            event.preventDefault()
          }
          break
        case 'Backspace':
          if (selectedLabels.value.length === 0) {
            setLabelInputFocus()
            return
          } else {
            removeLabel(selectedLabels.value[selectedLabels.value.length - 1].id)
          }
          break
        case 'Escape':
          isActive.value = false
          break
        default:
          event.preventDefault()
      }
      setLabelInputFocus()
    }
    // 키보드 위/이래 이동 시 스크롤 이동
    const moveScroll = (code: string | null = null) => {
      setTimeout(() => {
        const offsetHeight: number = dropdownContent.value.offsetHeight
        const dropdownItem: any = document.getElementsByClassName('dropdown-item focused')[0]
        if (_.isUndefined(dropdownItem)) return
        if (code === 'ArrowDown') {
          if (offsetHeight <= dropdownItem.offsetTop)
            dropdownContent.value.scrollTop += dropdownItem.offsetHeight
        } else if (code === 'ArrowUp') {
          if (dropdownContent.value.scrollTop >= dropdownItem.offsetTop)
            dropdownContent.value.scrollTop -= dropdownItem.offsetHeight
        }
      }, 0)
    }
    // dropdown item 외 클릭 시 리스트 목록 숨기기 이벤트
    const keepActiveClasses: string[] = ['dropdown-item', 'label-checked-icon', 'label-description', 'tag is-rounded', 'fa-regular fa-circle-check']
    const clickListener: EventListener = (event: any) => {
      const className: string = event.target.className
      if (className === 'input labels-input')
        onLabelInputClick() // 레이블 인풋 클릭
      else if (className === 'delete-label')
        return // 레이블 삭제 버튼 클릭 시
      else {
        // 정해진 클래스 외 클릭시 blur
        let isDoBlur = true
        for (const cl of keepActiveClasses) {
          if (_.startsWith(className, cl)) {
            isDoBlur = false
            break
          }
        }
        if (isDoBlur) blur(event)
      }
    }

    onMounted(() => {
      // disabled 시 속성 추가
      if (props.isDisabled) labelSelect.value.setAttribute('disabled', 'disabled')
      // 레이블 목록 불러오기
      getLabelList()
      // dropdown item 외 클릭 시 리스트 목록 숨기기 이벤트 추가
      window.addEventListener('click', clickListener)
    })

    onUnmounted(() => {
      // 컴포넌트 제거 시 이벤트 제거
      window.removeEventListener('click', clickListener)
    })

    return {
      checkClass,
      checkMsg,
      componentKey,
      labelSelect,
      labelInput,
      dropdownContent,
      selectedLabels,
      isActive,
      labelList,
      showPlaceholder,
      setLabel,
      blur,
      keydown,
      removeLabel
    }
  }
})
</script>
