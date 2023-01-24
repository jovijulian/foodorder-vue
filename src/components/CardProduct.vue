<template>
  <div class="card">
    <img :src="'../assets/images/' + product.gambar" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ product.nama }}</strong>
      </h5>
      <p class="card-text">Harga: Rp. {{ product.harga }}</p>
      <router-link :to="/foods/ + product.id" class="btn btn-success"><i class="bi bi-cart"></i> Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
