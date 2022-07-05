<template>
  <div class="pesanan-sukses">
    <MyNavbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/waiting.png" alt="" width="300" />
          <h2><strong>Orderan Berhasil!</strong></h2>
          <h4>
            Pesanan Anda Segera Di Proses <br />
            Mohon Ditunggu!
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
export default {
  components: { MyNavbar },
};
</script>

<style></style>
