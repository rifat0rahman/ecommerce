<template>
  <div class="html">
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
export default {
  data(){
    return {
      Products:[],
      id:null
    }
  },
  created(){
      this.id = localStorage.getItem('cate_id')
      console.log(this.id)
      Axios.get('http://127.0.0.1:8000/').then(data=>{
        this.Products = data.data.filter(items=>{
          return items.Category == this.id
        })
        console.log(this.Products)
      })
  }
}
</script>
<style scoped>
  .html{
    margin-top: 60px;
  }
</style>