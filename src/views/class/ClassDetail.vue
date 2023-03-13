<template>
  <AppNavbar />
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <h1 class="title">
          클래스
        </h1>
      </div>
    </section>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Bulma</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <p class="buttons">
            <button class="button is-fullwidth">
              <span class="icon is-small">
                <i class="fas fa-bold"></i>
              </span>
              <span>클래스</span>
            </button>
            <button class="button is-fullwidth">
              <span class="icon is-small">
                <i class="fas fa-italic"></i>
              </span>
              <span>학생</span>
            </button>
            <button class="button is-fullwidth">
              <span class="icon is-small">
                <i class="fas fa-underline"></i>
              </span>
              <span>시험</span>
            </button>
            <button class="button is-fullwidth">
              <span class="icon is-small">
                <i class="fas fa-underline"></i>
              </span>
              <span>숙제</span>
            </button>
          </p>
          <aside class="menu">
            <p class="menu-label">
              More to read...
            </p>
            <ul class="menu-list">
              <li><span class="tag is-white is-medium">Lorem</span></li>
              <li><span class="tag is-white is-medium">Ipsum</span></li>
              <li><span class="tag is-white is-medium">Dolor</span></li>
              <li><span class="tag is-white is-medium">Animi</span></li>
              <li><span class="tag is-white is-medium">Eximi</span></li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <form novalidate>
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">학생</p>
                  <p class="title">0 명</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">시험</p>
                  <p class="title">0 건</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">숙제</p>
                  <p class="title">0 건</p>
                </div>
              </div>
            </nav>
            <Text :label="'클래스'" icons-left="fa-solid fa-user"
                  :is-disabled="true"
                  :is-required="true" :placeholder="'클래스명을 입력해주세요'"/>
            <DateRangePicker :label-from="'시작일'" :is-disabled="true" :show-inline="true"
                             :label-to="'종료일'" />
            <div class="field">
              <label class="label">
                {{ '설명' }}
              </label>
              <textarea class="textarea has-fixed-size" placeholder="설명을 입력해주세요"
                        rows="5" />
            </div>
            <div class="buttons is-right">
              <button class="button is-info" type="submit">클래스정보변경</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import Text from "@/components/input/Text.vue"
import DateRangePicker from "@/components/input/DateRangePicker.vue"

import classGrpcService from "@/services/class.grpc.service"

export default defineComponent({
  name: "ClassDetail",
  props: {
    classId: {type: String, required: true}
  },
  components: {
    AppNavbar,
    AppFooter,
    Text,
    DateRangePicker
  },
  setup() {
    const showData = reactive({})
    const editData = reactive({})

    const getClass = async () => {
      // const res = await classGrpcService.
    }

    onMounted(() => {
      getClass()
    })

    return {
      showData,
      editData
    }
  }
})
</script>
