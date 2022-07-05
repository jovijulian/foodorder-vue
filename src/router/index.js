import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Foods from "../views/Foods.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Keranjang from "../views/Keranjang.vue";
import PesananSukses from "../views/PesananSukses.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "foods",
    component: Foods,
  },
  {
    path: "/foods/:id",
    name: "Foodsdetail",
    component: FoodDetail,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
  },
  {
    path: "/pesanan-sukses",
    name: "PesananSukses",
    component: PesananSukses,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
