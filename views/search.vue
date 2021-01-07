<template>
  <div class="html">
    <div class="center">
      <p style="font-family: arial">Search your product here</p>
    </div>
    <div class="container search-div">
      <div class="container input-field row">
        <input
          type="text"
          placeholder="Find your product"
          class="col l10 m10 s10 validate"
          v-model="keyword"
        />
        <button class="btn btn-small col button red lighten-1" @click="search">
          Search
        </button>
      </div>
      <div class="center container">
        <ul class="collapsible z-depth-0">
          <li>
            <div class="collapsible-header center row">
              <p class="col l12 m12 s12">ITEM FILTERING</p>
            </div>
            <div class="collapsible-body">
              <ul class="collection">
                <li class="collection-item" @click="low">
                  <button class="btn grey">Price Low to High</button>
                </li>
                <li class="collection-item" @click="high">
                  <button class="btn grey">Price High to Low</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- product picture -->
    <div style="margin-top: 20px">
      <div class="row center">
        <div class="col s4 m3" v-for="product in Products" :key="product.id">
          <div class="card">
            <div class="card-image">
              <img
                :src="'http://127.0.0.1:8000' + product.pro_image1"
                alt="item image"
              />
            </div>
            <div class="card-content">
              <p class="card-title name">{{ product.name }}</p>
              <p class="card-title name">Price-{{ product.price }}৳</p>
            </div>
            <div class="card-action">
              <router-link :to="'/' + product.id" class="btn">buy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import M from "materialize-css";
export default {
  data() {
    return {
      keyword: null,
      Products: [],
    };
  },
  mounted() {
    M.AutoInit();
    // funct
  },
  methods: {
    search() {
      Axios.get("http://127.0.0.1:8000/").then((products) => {
        this.Products = products.data.filter((item) => {
          return item.name.toLowerCase().match(this.keyword.toLowerCase());
        });
        console.log(this.Products);
      });
    },
    low() {
      this.Products.sort(function (a,b) {
        return a.price - b.price
      });
    },
    high() {
      this.Products.sort(function (a,b) {
        return b.price - a.price
      });
    },
  },
};
</script>

<style scoped>
/* label focus color */
.input-field input[type="text"]:focus + label {
  color: rgb(20, 18, 18);
}
/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid rgb(8, 8, 8);
  box-shadow: 0 1px 0 0 rgb(0, 0, 0);
}
.search-div {
  margin-top: 30px;
}
.button {
  margin-top: 10px;
  margin-left: -70px;
}
.html {
  margin-bottom: 50px;
}
</style>