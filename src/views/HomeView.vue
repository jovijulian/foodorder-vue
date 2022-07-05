<template>
  <div class="home">
    <MyNavbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong> Foods</strong></h2>
        </div>
        <div class="col">
          <router-link :to="{ name: 'foods' }" class="btn btn-success float-right"><i class="bi bi-eye-fill"></i> Lihat Semua</router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyNavbar from "@/components/MyNavbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";
import Foods from "./Foods.vue";

export default {
  name: "HomeView",
  components: {
    MyNavbar,
    Hero,
    CardProduct,
    Foods,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>
