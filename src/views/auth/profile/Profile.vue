<template>
  <AppNavbar/>
  <div class="container">
    <section class="block hero is-link is-small">
      <div class="hero-body">
        <p class="title">
          내정보
        </p>
      </div>
    </section>
    <div class="container">
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
                <p class="title is-3 is-marginless">{{ showData.name }}<span class="profile-auth-level">{{ authName }}</span></p>
                <p class="subtitle is-4 is-marginless profile-username">
                  {{ isParent ? parentInfo.username : showData.username }}
                </p>
                <hr class="profile-hr">
                <p class="subtitle is-6">
                  <span class="icon-text profile-info" v-if="showData.email">
                    <span class="icon"><i class="fas fa-envelope"></i></span>
                    <span>{{ showData.email }}</span>
                  </span>
                  <span class="icon-text profile-info" v-if="showData.phone">
                    <span class="icon"><i class="fa-solid fa-mobile"></i></span>
                    <span>{{ isParent ? parentInfo.phone : showData.phone }}</span>
                  </span>
                  <span class="icon-text profile-info" v-if="showData.studentInfo?.school">
                    <span class="icon"><i class="fa-solid fa-school"></i></span>
                    <span>{{ showData.studentInfo?.school }}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- 부모님 계정 폼 -->
        <form class="box" v-if="isParent" novalidate>
          <Username :label="'부모님 아이디'" :is-disabled="true" :is-required="true"
                    v-model="parentInfo.username" />
          <div class="field">
            <label class="label required">비밀번호</label>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <Password :is-disabled="true" v-model="passwordValue" />
              </p>
              <p class="control">
                <router-link :to="changePasswordPath" tag="a" class="button is-info is-light has-tooltip-arrow"
                             data-tooltip="비밀번호변경">
                  <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
                </router-link>
              </p>
            </div>
          </div>
          <Text :label="'전화번호'" icons-left="fa-solid fa-mobile" :is-disabled="true" :placeholder="'(-) 없이 숫자로만 입력해주세요'"
                v-model="parentInfo.phone" />
          <div class="divider">자녀 정보</div>
          <Text :label="'이름'" icons-left="fa-solid fa-user"
                :is-required="true" :is-disabled="true"
                v-model="editData.name" />
          <Email :label="'이메일'" :is-login="false" :is-disabled="true" :placeholder="'이메일을 입력해주세요'"
                 v-model="editData.email" />
          <Text :label="'전화번호'" icons-left="fa-solid fa-mobile" :is-disabled="true" :placeholder="'(-) 없이 숫자로만 입력해주세요'"
                v-model="editData.phone" />
        </form>
        <!-- 학생 계정 폼 -->
        <form class="box" v-if="isStudent" @submit.prevent="updateProfile" novalidate>
          <Username :label="'아이디'" :is-disabled="true" :is-required="true"
                    v-model="editData.username"/>
          <div class="field">
            <label class="label required">비밀번호</label>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <Password :is-disabled="true" v-model="passwordValue" />
              </p>
              <p class="control">
                <router-link :to="changePasswordPath" tag="a" class="button is-info is-light has-tooltip-arrow"
                             data-tooltip="비밀번호변경">
                  <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
                </router-link>
              </p>
            </div>
          </div>
          <Text :label="'이름'" icons-left="fa-solid fa-user"
                :is-required="true" :is-disabled="true"
                v-model="editData.name" />
          <Email :label="'이메일'" :is-login="false"
                 :key="componentKey" :placeholder="'이메일을 입력해주세요'"
                 v-model="editData.email" />
          <Text :label="'전화번호'" icons-left="fa-solid fa-mobile"
                :key="componentKey" :placeholder="'(-) 없이 숫자로만 입력해주세요'"
                v-model="editData.phone" />
          <div class="buttons is-right">
            <button class="button is-info" type="submit">개인정보변경</button>
          </div>
        </form>
        <!-- 매니져 계정 폼 -->
        <form class="box" v-if="isManager" @submit.prevent="updateProfile" novalidate>
          <div class="field">
            <label class="label required">아이디</label>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <Username :is-disabled="true" :is-required="true"
                          v-model="editData.username"/>
              </p>
              <p class="control">
                <router-link :to="changeUsernamePath" tag="a" class="button is-info is-light has-tooltip-arrow"
                             data-tooltip="아이디변경">
                  <span class="icon"><i class="fa-solid fa-user-pen"></i></span>
                </router-link>
              </p>
            </div>
          </div>
          <div class="field">
            <label class="label required">비밀번호</label>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <Password :is-disabled="true" v-model="passwordValue" />
              </p>
              <p class="control">
                <router-link :to="changePasswordPath" tag="a" class="button is-info is-light has-tooltip-arrow"
                             data-tooltip="비밀번호변경">
                  <span class="icon"><i class="fa-solid fa-user-lock"></i></span>
                </router-link>
              </p>
            </div>
          </div>
          <Text :label="'이름'" icons-left="fa-solid fa-user" :key="componentKey"
                :is-required="true" :placeholder="'이름을 입력해 주세요'"
                v-model="editData.name" />
          <Email :label="'이메일'" :is-login="false"
                 :key="componentKey" :placeholder="'이메일을 입력해주세요'"
                 v-model="editData.email" />
          <Text :label="'전화번호'" icons-left="fa-solid fa-mobile"
                :key="componentKey" :placeholder="'(-) 없이 숫자로만 입력해주세요'"
                v-model="editData.phone" />
          <div class="buttons is-right">
            <button class="button is-info" type="submit">개인정보변경</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  <router-view @complete-function="completeFunction" />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { User } from "@/models/user/user"
import { getUpdateUserKeys, bindUpdateUser } from "@/models/user/update.user"
import { ModalChangePassword, ModalChangeUsername } from "@/routers/auth.router"
import { LabelType } from "@/models/label/label.type"

import AppNavbar from "@/components/AppNavbar.vue"
import AppFooter from "@/components/AppFooter.vue"
import Username from "@/components/input/Username.vue"
import Text from "@/components/input/Text.vue"
import Email from "@/components/input/Email.vue"
import Password from "@/components/input/Password.vue"

import authGrpcService from "@/services/auth.grpc.service"

import utils from "@/utils/utils"
import store from "@/stores/store"
import router from "@/routers/router"
import _ from 'lodash'

export default defineComponent({
  name: "Profile",
  inheritAttrs: false,
  components: {
    Username,
    AppNavbar,
    AppFooter,
    Text,
    Email,
    Password,
  },
  setup() {
    const showData = reactive({} as User)
    const editData = reactive({} as User)
    const componentKey = ref(false)
    const passwordValue = ref("****************")
    const myAuthLevel = store.getters["sessionStore/authLevel"]
    let parentInfo = reactive({})

    // 컴포넌트 갱신 component key 값이 변경되면 컴포넌트가 갱신된다
    const reloadComponents = () => {
      componentKey.value = !componentKey.value
    }

    // 내정보 가져오기
    const getProfile = async () => {
      const res = await authGrpcService.profileGet()
      await Object.assign(showData, res)
      await Object.assign(editData, _.cloneDeep(showData))
      // 부모님 아이디 set
      if (utils.authority.isParent(myAuthLevel)) {
        Object.assign(parentInfo, {username: showData.parentInfo?.username, phone: showData.parentInfo?.phone})
      }
    }

    // 내 정보 수정
    const updateProfile = async (form: any) => {
      const updatedFields = utils.getUpdatedFields(showData, editData, getUpdateUserKeys())
      if (_.isEmpty(updatedFields)) {
        utils.message.showWarningToastMsg("변경사항이 없습니다")
        return
      }
      if (!utils.validator.validateForm(form.target)) return
      await authGrpcService.profileUpdate(bindUpdateUser(updatedFields))
      await completeFunction('수정되었습니다')
    }

    // 함수 호출 후 처리
    const completeFunction = (msg: string = '처리되었습니다', isFromModal: boolean = false) => {
      // 모달에서 호출된거라면 모달 닫기
      if (isFromModal) router.go(-1)
      // 메시지 출력
      utils.message.showSuccessToastMsg(msg)
      // 정보 갱신
      getProfile()
      // 컴포넌트 reload
      reloadComponents()
    }

    onMounted(() => {
      getProfile()
    })

    return {
      showData,
      editData,
      passwordValue,
      componentKey,
      parentInfo,
      authName: utils.authority.getMyAuthName(myAuthLevel),
      isManager: utils.authority.isManager(myAuthLevel),
      isStudent: utils.authority.isStudent(myAuthLevel),
      isParent: utils.authority.isParent(myAuthLevel),
      changeUsernamePath: ModalChangeUsername.path,
      changePasswordPath: ModalChangePassword.path,
      labelType: LabelType,
      reloadComponents,
      updateProfile,
      completeFunction
    }
  }
})
</script>
