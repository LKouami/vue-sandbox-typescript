import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import SandBox from '../pages/sand-box/sand-box.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {name:'sandbox',path: '/', redirect: 'sandbox'},
        // sand-box page
        {
            path: '/sandbox',
            name: 'SandBox',
            component: SandBox,
        },
];

const router = new VueRouter({
  routes,
});

export default router;
