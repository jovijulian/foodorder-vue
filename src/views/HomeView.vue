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
      <div class="row mt-4">
        <div class="col-lg-12 text-center">
          <h2><strong>About Us</strong></h2>
        </div>
        <div class="col-lg-12 text-center">
          <img :src="'../assets/images/logo-cute.png'" class="img-fluid shadow" />
        </div>
        <div class="col-lg-12 text-center mt-5">
          <p>Kue CUTE merupakan singkatan dari Kue cubit tete atau Teng Teng, Teng Teng diambil dari jajan tradisional lainnya kemasan atau packagingnya dengan cara menenteng membawa nya .</p>
        </div>
        <div class="col-lg-12 text-center mt-5">
          <img :src="'../assets/images/foto-2.jpeg'" class="img-fluid shadow" />
        </div>
        <div class="col-lg-12 mt-5 text-center">
          <div class="table-responsive">
            <h3>Anggota Kami</h3>
            <table class="table table-borderless" style="width: 90%">
              <tr>
                <td>Alifudin Nuryansyah Putra</td>
                <td>3MI-1</td>
                <td>200613013</td>
              </tr>
              <tr>
                <td>Dera Akbar</td>
                <td>3MI-1</td>
                <td>200613016</td>
              </tr>
              <tr>
                <td>Jovi Julian Hendri</td>
                <td>3MI-1</td>
                <td>200613007</td>
              </tr>
              <tr>
                <td>Naufal Ramadhani</td>
                <td>3MI-1</td>
                <td>200613014</td>
              </tr>
              <tr>
                <td>Muhamad Dikha Priangga</td>
                <td>3MI-1</td>
                <td>200613003</td>
              </tr>
              <tr>
                <td>Mochamad Rafli Djamhuri</td>
                <td>3MI-1</td>
                <td>200613005</td>
              </tr>
              <tr>
                <td>Raden Azriel mochamad yusuf</td>
                <td>3MI-1</td>
                <td>200613001</td>
              </tr>
              <tr>
                <td>Ryan Budiawan</td>
                <td>3MI-1</td>
                <td>200613008</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12 text-center">
          <h2><strong>Galery</strong></h2>
        </div>
        <div class="col-lg-4 text-center mt-5">
          <img :src="'../assets/images/foto-1.jpeg'" class="img-fluid shadow" />
        </div>
        <div class="col-lg-4 text-center mt-5">
          <img :src="'../assets/images/foto-3.jpg'" class="img-fluid shadow" />
        </div>
        <div class="col-lg-4 text-center mt-5">
          <img :src="'../assets/images/foto-4.jpeg'" class="img-fluid shadow" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12 text-center">
          <h2><strong>Video Kami</strong></h2>
        </div>
        <div class="col-lg-12 text-center mt-5">
          <video width="1000" controls>
            <source :src="'../assets/images/video-cute.mp4'" type="video/mp4" />
          </video>
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
