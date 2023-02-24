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
                          @remove-tag="removeTag"/>
            <input ref="labelInput" type="text" class="input labels-input"
                   :disabled="isDisabled"
                   :required="isRequired"
                   :placeholder="showPlaceholder"
                   @click="click($event)"
                   @blur="blur($event)"
                   @keydown="keydown($event)"
                   @invalid="checkIfIsInvalid" >
          </div>
          <span class="icon is-small is-left" :style="[ isActive ? 'color: hsl(0, 0%, 29%)' : '' ]">
            <i class="fa-solid fa-tags"></i>
          </span>
        </div>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div ref="dropdownContent" class="dropdown-content">
          <a class="dropdown-item" :class="[{'selected': label.selected}, {'focused': label.focused}]"
             v-for="(label, key) in labelList" :key=key
             @click="setLabel(label)">
            <span class="icon" v-if="label.selected"><i class="fa-regular fa-circle-check"></i></span>
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
import { defineComponent, ref, onMounted, watch } from 'vue'
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
    const checkClass = ref('')
    const checkMsg = ref('')
    const componentKey = ref(false)
    const labelSelect = ref()
    const labelInput = ref()
    const selectedLabels = ref([] as any[])
    const dropdownContent = ref()
    const isActive = ref(false)
    const labelList = ref([] as Label[])
    const showPlaceholder = ref(props.placeholder)
    // 컴포넌트 reload
    const reloadComponent = () => {
      componentKey.value = !componentKey.value
    }
    // props 값을 반영
    const setLabelList = () => {
      if (!_.isEmpty(selectedLabels.value) || _.isNull(props.modelValue)) return
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
      reloadComponent()
    }
    // 레이블목록 조회
    const getLabelList = async () => {
      labelList.value = await labelGrpcService.getLabels(props.labelType!)
      await focus()
      if (props.modelValue.length > 0) {
        setLabelList()
      }
    }
    // 레이블 선택, 복수 선택 가능. 같은 레이블을 선택하면 취소
    const setLabel = (label: Label) => {
      const idx = _.findIndex(selectedLabels.value, {id: label.id})
      if (idx !== -1) {
        selectedLabels.value.splice(idx, 1)
        label.selected = false
      } else {
        selectedLabels.value.push(label)
        label.selected = true
      }
      emit('update:modelValue', selectedLabels.value)
      setPlaceholder()
      reloadComponent()
      const labelIdx = _.findIndex(labelList.value, {id: label.id})
      _.forEach(labelList.value, it => {it.focused = false})
      labelList.value[labelIdx].focused = true
      focus()
    }
    // 레이블 삭제
    const removeTag = (id: string) => {
      const selectedIdx = _.findIndex(selectedLabels.value, {id: id})
      selectedLabels.value.splice(selectedIdx, 1)
      const labelIdx = _.findIndex(labelList.value, {id: id})
      labelList.value[labelIdx].selected = false
      emit('update:modelValue', selectedLabels.value)
      setPlaceholder()
      reloadComponent()
    }
    // 레이블이 선택되면 placeholder 감추기
    const setPlaceholder = () => {
      showPlaceholder.value = selectedLabels.value.length > 0 ? '' : props.placeholder
    }
    // labelInput focus
    const focus = () => {
      setTimeout(() => {
        checkClass.value = 'is-focused'
        labelInput.value.focus()
      }, 0)
    }
    const focusout = () => {

    }
    // 클릭 이벤트
    const click = (event: any = null) => {
      focus()
      if (isActive.value) {
        isActive.value = false
        _.forEach(labelList.value, it => {it.focused = false})
      } else {
        isActive.value = true
        labelList.value[0].focused = true
      }
    }
    // blur 시 처리
    const blur = (event: any) => {
      if (props.isRequired && selectedLabels.value.length === 0) {
        isActive.value = false
        checkClass.value = 'is-danger'
        checkMsg.value = '레이블을 선택해주세요'
        event.target.setCustomValidity('label invalid')
      } else {
        checkClass.value = ''
        checkMsg.value = ''
        // isActive.value = false
      }
    }
    // 키보드 입력 이벤트
    const keydown = (event: any) => {
      let focusedIdx: number = _.findIndex(labelList.value, {focused: true})
      switch (event.code) {
        case 'ArrowDown':
          if (focusedIdx === -1) {
            isActive.value = true
            labelList.value[0].focused = true
          } else if (focusedIdx !== labelList.value.length - 1) {
            labelList.value[focusedIdx].focused = false
            labelList.value[focusedIdx + 1].focused = true
          }
          moveScroll(event.code)
          break
        case 'ArrowUp':
          if (focusedIdx < 1) {
            if (isActive.value) {
              isActive.value = false
              _.forEach(labelList.value, it => {
                it.focused = false
              })
            }
          } else {
            labelList.value[focusedIdx].focused = false
            labelList.value[focusedIdx - 1].focused = true
          }
          moveScroll(event.code)
          break
        case 'Enter':
          event.preventDefault()
          setLabel(labelList.value[focusedIdx])
          isActive.value = true
          break
        case 'Backspace':
          if (selectedLabels.value.length === 0) {
            isActive.value = false
            return
          }
          removeTag(selectedLabels.value[selectedLabels.value.length - 1].id)
          break
        case 'Escape':
          isActive.value = false
          break
        default:
          event.preventDefault()
      }
      focus()
    }
    // 키보드 위/이래 이동 시 스크롤 이동
    const moveScroll = (code: string) => {
      setTimeout(() => {
        const offsetHeight: number = dropdownContent.value.offsetHeight
        const dropdownItem: any = document.getElementsByClassName('dropdown-item focused')[0]
        if (_.isUndefined(dropdownItem)) return
        if (code === 'ArrowDown') {
          if (offsetHeight <= dropdownItem.offsetTop)
            dropdownContent.value.scrollTop += dropdownItem.offsetHeight
        } else {
          if (dropdownContent.value.scrollTop >= dropdownItem.offsetTop)
            dropdownContent.value.scrollTop -= dropdownItem.offsetHeight
        }
      }, 0)
    }

    const checkIfIsInvalid = () => {
      checkClass.value = 'is-danger'
      if (selectedLabels.value.length === 0)
        checkMsg.value = '레이블을 선택해주세요'
    }

    onMounted(() => {
      // disabled 시 속성 추가
      if (props.isDisabled)
        labelSelect.value.setAttribute('disabled', 'disabled')
      getLabelList()
    })

    // watch(() => [props.modelValue], ([newA], [prevA]) => {
    //   console.log(2)
    //   // 컴포넌트 렌더링 시 props 값은 아직 default 값으로 정의되어 있다, default 가 정의되어 있지 않으면 undefined
    //   if (_.isUndefined(prevA) || JSON.stringify(newA) === JSON.stringify(prevA))
    //     setLabelList()
    // })
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
      click,
      blur,
      keydown,
      checkIfIsInvalid,
      removeTag
    }
  }
})
</script>
