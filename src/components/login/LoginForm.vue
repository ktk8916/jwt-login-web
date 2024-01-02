<script setup>
import { ref } from "vue";
import { alertError, login, setLogin } from "@/api/auth.js";

const username = ref("");
const password = ref("");

const onSubmitHandler = async () => {
  try {
    const response = await login({
      username: username.value,
      password: password.value,
    });
    await setLogin(response);
  } catch (e) {
    alertError(e);
  }
};
</script>

<template>
  <div>
    <form class="loginBox" @submit.prevent="onSubmitHandler">
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="password" type="password" placeholder="password" />
      <button type="submit" class="formButton">제출</button>
    </form>
    <router-link to="signup">
      <button class="formButton">회원가입 하러 가기</button>
    </router-link>
  </div>
</template>

<style scoped>
.loginBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formButton {
  width: 100%;
}
</style>
