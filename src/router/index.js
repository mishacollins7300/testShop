import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import ShopCartList from "@/views/Shop-cart-list.vue";

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/shopcartlist",
        name: "ShopCartList",
        component: ShopCartList,
        props:true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;