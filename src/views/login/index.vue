<script setup lang="ts">
import { login, type LgoinRequest } from '@/apis/login'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()

const login_request = ref<LgoinRequest>({
  username: '',
  password: ''
})

const username_rules = ref([
  (username: string) => {
    if (username.match('^[a-zA-Z0-9]{3,}$')) return true
    return 'Error! username must contains 3 characters'
  }
])
const password_rules = ref([
  (password: string) => {
    if (password) return true
    return 'Error! password'
  }
])

const visible = ref(true)

const handleLogin = () => {
  login(login_request.value).then((res) => {
    store.setAccessToken(res.access_token)
    store.setUsername(login_request.value.username)
    store.setAvatar(res.avatar)
    router.replace('/')
  })
}
</script>
<template>
  <div class="mt-10">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-form @submit.prevent>
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        <v-text-field
          v-model="login_request.username"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="username_rules"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            >Forget login password?</a
          >
        </div>
        <v-text-field
          v-model="login_request.password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :rules="password_rules"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="handleLogin"
          type="submit"
        >
          Log In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<style></style>
@/views/login/apis/login
