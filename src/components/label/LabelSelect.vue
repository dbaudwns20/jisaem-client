<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="dropdown" :class="[{ 'is-active': isActive }, {'is-up': true}]">
      <div class="dropdown-trigger">
        <div class="control has-icons-left">
          <div ref="labelSelect" class="labels" aria-haspopup="true" aria-controls="dropdown-menu"
               :key="componentKey"
               :class="checkClass">
            <LabelElement v-for="(label, key) in selectedLabels" :key=key
                          :params="{data: {name: label.name, color: label.color, id: label.id}}"
                          :is-deletable="true"
                          @remove-tag="removeTag"/>
            <input ref="labelInput" type="text" class="input labels-input" readonly
                   :disabled="isDisabled"
                   :required="isRequired"
                   :placeholder="showPlaceholder"
                   @focusin="focusin($event)"
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
        <div class="dropdown-content">
          <a class="dropdown-item" v-for="(label, key) in labelList" :key=key
             @mousedown="setLabel(label)">
            <LabelElement :params="{data: {name: label.name, color: label.color, id: label.id}}"
                          :size="'is-small'" />
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
    isRequired: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    placeholder: { type: String, default: '레이블을 선택해주세요' },
    labelType: { type: Number },
    modelValue: { type: Object }
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
      selectedLabels.value.push(props.modelValue)
      setPlaceholder()
    }
    // 레이블목록 조회
    const getLabelList = async () => {
      labelList.value = await labelGrpcService.getLabels(props.labelType!)
    }
    // 레이블 선택, 1개만 선택 가능. 같은 레이블을 선택하면 취소
    const setLabel = (label: Label) => {
      if (selectedLabels.value.length > 0) {
        if (selectedLabels.value[0].id === label.id) {
          selectedLabels.value.splice(0, 1)
          emit('update:modelValue', {})
          setPlaceholder()
          return
        } else
          selectedLabels.value.splice(0, 1)
      }
      selectedLabels.value.push(label)
      emit('update:modelValue', selectedLabels.value[0])
      if (isActive.value) isActive.value = false
      setPlaceholder()
      reloadComponent()
    }
    // 레이블이 선택되면 placeholder 감추기
    const setPlaceholder = () => {
      showPlaceholder.value = selectedLabels.value.length > 0 ? '' : props.placeholder
    }
    // focusIn 시 클래스 지정
    const focusin = (event: any = null) => {
      isActive.value = true
      checkClass.value = 'is-focused'
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
        isActive.value = false
      }
    }
    //
    const keydown = (event: any) => {
      if (event.code === 'ArrowDown') {

      } else if (event.code === 'ArrowUp') {

      } else if (event.code === 'Enter') {
        event.preventDefault()
      } else {
        if (selectedLabels.value.length > 0) {
          return
        }
      }
    }

    const checkIfIsInvalid = () => {
      checkClass.value = 'is-danger'
      if (selectedLabels.value.length === 0)
        checkMsg.value = '레이블을 선택해주세요'
    }

    const removeTag = (id: string) => {
      const idx = _.findIndex(selectedLabels.value, {id: id})
      selectedLabels.value.splice(idx, 1)
      emit('update:modelValue', selectedLabels.value[0])
      setPlaceholder()
      if (!isActive.value) isActive.value = true
    }

    onMounted(() => {
      // disabled 시 속성 추가
      if (props.isDisabled) {
        labelSelect.value.setAttribute('disabled', 'disabled')
        return
      }
      getLabelList()
    })

    watch(() => [props.modelValue], ([newA], [prevA]) => {
      // 컴포넌트 렌더링 시 props 값은 아직 default 값으로 정의되어 있다, default 가 정의되어 있지 않으면 undefined
      if (_.isUndefined(prevA) || JSON.stringify(newA) === JSON.stringify(prevA))
        setLabelList()
    })
    return {
      checkClass,
      checkMsg,
      componentKey,
      labelSelect,
      labelInput,
      selectedLabels,
      isActive,
      labelList,
      showPlaceholder,
      setLabel,
      focusin,
      blur,
      keydown,
      checkIfIsInvalid,
      removeTag
    }
  }
})
</script>
