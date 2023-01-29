<template>
  <AppNavbar/>
  <div class="container">
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          내정보
        </p>
      </div>
    </section>
    <hr/>
    <div class="columns">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img src="@/assets/user_image_sample.png" alt="Profile Photo">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title">{{ showData.name }}</p>
                <p class="sub-title">
                  <span class="icon-text">
                    <span class="icon"><i class="fas fa-envelope"></i></span>
                    <span>{{ showData.email }}</span>
                  </span>
                  <span class="icon-text">
                    <span class="icon"><i class="fa-solid fa-mobile"></i></span>
                    <span>{{ showData.phone }}</span>
                  </span>
                </p>
              </div>
            </div>
            <div class="content">
              {{ showData.studentInfo?.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <form class="box" @submit.prevent="updateProfile($event)" novalidate>
          <div class="field">
            <label class="label required">아이디</label>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <Text :is-disabled="true" icons-left="fa-solid fa-user"
                      v-model="editData.username" :key="componentKey" />
              </p>
              <p class="control">
                <router-link to="/profile/change-username"
                             tag="a" class="button is-success is-light">
                  변경
                </router-link>
              </p>
            </div>
          </div>
          <div class="field">
            <label class="label required">비밀번호</label>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <Password :is-disabled="true"
                          v-model="passwordValue" :key="componentKey" />
              </p>
              <p class="control">
                <router-link to="/profile/change-password"
                             tag="a" class="button is-success is-light">
                  변경
                </router-link>
              </p>
            </div>
          </div>
          <Text :label="'이름'" :placeholder="'이름을 입력해주세요'"
                :is-required="true" icons-left="fa-solid fa-user"
                v-model="editData.name" :key="componentKey" />
          <Email :label="'이메일'" :is-login="false"
                 v-model="editData.email" :key="componentKey" />
          <Text :label="'전화번호'" :placeholder="'(-) 없이 숫자로만 입력해주세요'"
                icons-left="fa-solid fa-mobile"
                v-model="editData.phone" :key="componentKey" />
          <Text :label="'레이블'" :placeholder="'레이블을 선택해주세요'"
                icons-left="fa-solid fa-tags" />
          <div class="buttons is-right">
            <button class="button is-info" type="submit">개인정보변경</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <router-view @complete-function="completeFunction" />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { User } from "@/models/auth/user"
import { bindUpdateUser } from "@/models/auth/updateUser"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import Text from "@/components/input/Text.vue"
import Email from "@/components/input/Email.vue"
import Password from "@/components/input/Password.vue"
import AuthGrpcService from "@/services/auth.grpc.service"

import utils from "@/utils/utils"
import store from "@/stores/store"
import _ from 'lodash'
import router from "@/routers/router";

export default defineComponent({
  name: "Profile",
  inheritAttrs: false,
  components: {
    AppNavbar,
    AppFooter,
    Text,
    Email,
    Password
  },
  setup() {
    const showData = reactive({} as User)
    const editData = reactive({} as User)
    const componentKey = ref(0)
    const passwordValue = ref("****************")
    return {
      showData,
      editData,
      passwordValue,
      componentKey
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    // 컴포넌트 갱신
    reloadComponents() {
      this.componentKey++
    },
    // 내정보 가져오기
    async getProfile() {
      const res = await AuthGrpcService.profileGet()
      await store.commit("userStore/setUser", res)
      await Object.assign(this.showData, store.getters["userStore/user"])
      await Object.assign(this.editData, _.cloneDeep(this.showData))
    },
    // 함수 호출 수 처리
    completeFunction(msg: string = '처리되었습니다', isFromModal: boolean = false) {
      // 모달에서 호출된거라면 모달 닫기
      if (isFromModal) router.go(-1)
      // 메시지 출력
      utils.message.showSuccessToastMsg(msg)
      // 정보 갱신
      this.getProfile()
      // 컴포넌트 reload
      this.reloadComponents()
    },
    // 내 정보 수정
    async updateProfile(form: any) {
      const updatedFields = utils.getUpdatedFields(this.showData, this.editData)
      if (_.isEmpty(updatedFields)) {
        utils.message.showWarningToastMsg("변경사항이 없습니다")
        return
      }
      if (!utils.validator.validateForm(form.target)) return
      await AuthGrpcService.profileUpdate(bindUpdateUser(updatedFields))
      await this.getProfile()
      this.completeFunction('수정되었습니다')
    }
  }
})
</script>

<style lang="scss">
.content {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical
}
</style>
