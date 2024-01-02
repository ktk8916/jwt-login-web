import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import TheWelcome from "@/components/home/TheWelcome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      { path: "/", name: "home", component: TheWelcome },
      { path: "/login", name: "login", component: Login },
      { path: "/signup", name: "signup", component: Signup },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
