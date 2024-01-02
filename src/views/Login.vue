<script setup>
import LoginForm from "@/components/login/LoginForm.vue";
</script>

<template>
  <div class="mainContainer">
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
