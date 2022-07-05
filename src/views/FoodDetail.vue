<template>
  <div class="foodsdetail">
    <MyNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-dark">Home</router-link></li>
              <li class="breadcrumb-item"><router-link :to="{ name: 'foods' }" class="text-dark">Foods</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">Foods Order</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="'../assets/images/' + product.gambar" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4 class="mt-4">
            Harga:
            <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pesan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea class="form-control" placeholder="Keterangan seperti: Pedas, Nasi Setengah" v-model="pesan.keterangan"></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan"><i class="bi bi-cart"></i> Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import axios from "axios";

export default {
  name: "Foodsdetail",
  components: { MyNavbar },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.$router.push({ path: "/keranjang" });
        this.pesan.products = this.product;
        axios.post("http://localhost:3000/keranjangs", this.pesan).then(() => {
          this.$toast.success("Berhasil Masuk Keranjang", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        });
      } else {
        this.$toast.error("Jumlah Pesanan Harus Diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
