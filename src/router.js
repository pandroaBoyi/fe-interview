import Vue from "vue";
import Router from "vue-router";
import TopItemLists from "./views/TopItemLists.vue";
import NewItemLists from "./views/NewItemLists.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/top/:page(\\d+)?",
      name: "topItems",
      component: TopItemLists
    },
    {
      path: "/new/:page(\\d+)?",
      name: "newItems",
      component: NewItemLists
    },
    { path: '/', redirect: '/top' },
  ],
});
