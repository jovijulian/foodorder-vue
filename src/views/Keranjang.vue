<template>
  <div class="keranjang">
    <MyNavbar :updateKeranjang="keranjangs" />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-dark">Home</router-link></li>
              <li class="breadcrumb-item"><router-link :to="{ name: 'foods' }" class="text-dark">Foods</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2><strong>Keranjang</strong> Saya</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Gambar</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{ index + 1 }}</th>
                  <td><img :src="'../assets/images/' + keranjang.products.gambar" class="img-fluid shadow" width="250" /></td>
                  <td>{{ keranjang.products.nama }}</td>
                  <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td align="right">Rp. {{ keranjang.products.harga }}</td>
                  <td align="right">
                    <strong> Rp. {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}</strong>
                  </td>
                  <td class="text-danger" align="center"><i class="bi bi-trash" @click="hapusKeranjang(keranjang.id)"></i></td>
                </tr>
                <tr>
                  <td colspan="6" align="right"><strong>Total Harga: </strong></td>
                  <td align="right">
                    <strong> Rp. {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama: </label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="meja">Nomor Whatsapp: </label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <button type="submit" class="btn btn-success float-right" @click="checkout"><i class="bi bi-cart"></i> Checkout</button>
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
  name: "Keranjang",
  components: { MyNavbar },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios.delete("http://localhost:3000/keranjangs/" + id).then(() => {
        this.$toast.error("Makanan Dihapus", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      });
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios.post("http://localhost:3000/pesanans", this.pesan).then(() => {
          this.keranjangs.map((item) => {
            return axios.delete("http://localhost:3000/keranjangs/" + item.id).catch((error) => {
              console.log(error);
            });
          });
          this.$router.push({ path: "/pesanan-sukses" });
          this.$toast.success("Orderan Berhasil", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        });
      } else {
        this.$toast.error("Nama dan No Meja Harus Diisi", {
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
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        this.setKeranjangs(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((items, data) => {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style></style>
