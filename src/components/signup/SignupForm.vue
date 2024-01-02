<script setup>
import { ref } from "vue";
import { alertError, setLogin, signup } from "@/api/auth.js";

const username = ref("");
const password = ref("");
const nickname = ref("");

const onSubmitHandler = async () => {
  // TODO : validation

  try {
    const response = await signup({
      username: username.value,
      password: password.value,
      nickname: nickname.value,
    });

    await setLogin(response);
  } catch (e) {
    alertError(e);
  }
};
</script>

<template>
  <div>
    <form class="signupBox" @submit.prevent="onSubmitHandler">
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="password" type="password" placeholder="password" />
      <input v-model="nickname" type="text" placeholder="nickname" />
      <button type="submit" class="signupButton">제출</button>
    </form>
    <router-link to="login">
      <button class="formButton">로그인 하러 가기</button>
    </router-link>
  </div>
</template>

<style scoped>
.signupBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signupButton {
  width: 100%;
}

.formButton {
  width: 100%;
}
</style>
