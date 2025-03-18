import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyExperience from "../views/MyExperience.vue";
import MyDesignWorks from "../views/MyDesignWorks.vue";
import MyCreation from "../views/MyCreation.vue";
import MyThoughts from "../views/MyThoughts.vue";
import SayHello from "../views/SayHello.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/myexperience", name: "MyExperience", component: MyExperience },
  { path: "/mydesignworks", name: "MyDesignWorks", component: MyDesignWorks },
  { path: "/mycreation", name: "MyCreation", component: MyCreation },
  { path: "/mythoughts", name: "MyThoughts", component: MyThoughts },
  { path: "/sayhello", name: "SayHello", component: SayHello },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;