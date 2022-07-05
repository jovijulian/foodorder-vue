<template>
  <div>
    <MyNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong> Makanan</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Cari Makanan" v-model="search" @keyup="searchFood" />
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
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
import MyNavbar from "@/components/MyNavbar.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";
export default {
  name: "foods",
  components: { MyNavbar, CardProduct },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => {
          this.setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
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

<style></style>
