<template>
  <div class="hero">
    <!-- desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu, </strong> <br />
                in Your Gadget
              </h2>
              <p>Pilih makanan favoritmu!</p>
              <router-link :to="{ name: 'foods' }" class="btn btn-lg btn-success"><i class="bi bi-arrow-right"></i> Pesan</router-link>
            </div>
          </div>
        </div>
        <div class="d-flex h-100">
          <div class="col-md-6">
            <img src="../assets/images/undraw_cooking_lyxy.png" width="500" style="margin-left: 30px" />
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="d-flex h-100">
          <div class="col-md-6 mb-3">
            <img src="../assets/images/undraw_cooking_lyxy.png" width="400" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu, </strong> <br />
                in Your Gadget
              </h2>
              <p>Pilih makanan favoritmu!</p>
              <router-link to="" class="btn btn-lg btn-success"><i class="bi bi-arrow-right"></i> Pesan</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
