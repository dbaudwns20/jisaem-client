<template>
  <div class="field">
    <label class="label" :class="{ 'required': isRequired }" v-if="label">
      {{ label }}
    </label>
    <div class="dropdown" :class="{ 'is-active': isActive }">
      <div class="dropdown-trigger">
        <div class="control has-icons-left has-icons-right">
          <div ref="labelSelect" class="labels" aria-haspopup="true" aria-controls="dropdown-menu"
               :key="componentKey"
               :class="checkClass">
            <LabelElement v-for="(label, key) in selectedLabels" :key=key
                          :params="{data: {name: label.name, color: label.color}}" />
            <input ref="labelInput" type="search" class="input labels-input"
                   :disabled="isDisabled"
                   :required="isRequired"
                   :placeholder="showPlaceholder"
                   @focusin="focusin($event)"
                   @blur="blur($event)"
                   @keydown="keydown($event)"
                   @invalid="checkIfIsInvalid" >
          </div>
          <span class="icon is-small is-left"><i class="fa-solid fa-tags"></i></span>
          <span class="icon is-small is-right"><i :class="{ 'fa-solid fa-magnifying-glass': isActive }"></i></span>
        </div>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item" v-for="(label, key) in labelList" :key=key
             @mousedown="setLabel(label)">
            <LabelElement :params="{data: {name: label.name, color: label.color}}"
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
        if (selectedLabels.value[0].uid === label.uid) {
          selectedLabels.value.splice(0, 1)
          emit('update:modelValue', {})
          setPlaceholder()
          return
        } else
          selectedLabels.value.splice(0, 1)
      }
      selectedLabels.value.push(label)
      emit('update:modelValue', selectedLabels.value[0])
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
      if (event.code === 'Backspace') {
        if (selectedLabels.value.length > 0) {
          selectedLabels.value.splice(0, 1)
          emit('update:modelValue', {})
          setPlaceholder()
        }
      } else if (event.code === 'ArrowDown') {

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
      checkIfIsInvalid
    }
  }
})
</script>
<style lang="sass">
.dropdown
  width: 100%

  .dropdown-trigger
    width: 100%

  .dropdown-menu
    padding-top: 0 !important
    width: 100%

  .dropdown-content
    padding: 0
    max-height: 165px
    overflow: scroll

  .dropdown-item
    font-size: 12px
    padding: 0.5em 0.5em 0.5em 0.5em
    border-left: 0.2px solid hsl(0deg, 0%, 86%)
    border-right: 0.2px solid hsl(0deg, 0%, 86%)
    border-bottom: 0.2px solid hsl(0deg, 0%, 86%)
    color: gray
    max-height: 40px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

    &.is-selected
      background-color: ivory

  .dropdown-item:first-child
    border-top-right-radius: 3px
    border-top-left-radius: 3px

  .dropdown-item:last-child
    border-bottom-right-radius: 3px
    border-bottom-left-radius: 3px

.labels
  @extend .input
  align-content: flex-start
  display: flex
  flex-wrap: wrap
  height: auto
  min-height: 2.5em
  padding: 0
  position: relative

  > span
    margin-right: 5px

  .labels-input
    @extend .input
    padding: 0 !important
    border-color: transparent
    box-shadow: none !important
    display: inline-block
    flex: 1 0 auto
    height: 2.3rem
    margin: .1rem
    width: 10%

  .labels-input:hover
    border-color: transparent !important

  .labels-input:focus
    border-color: transparent !important
</style>
