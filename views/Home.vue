<template>
  <div style="margin-top:30px">
    <!-- slider -->
    <div class="carousel carousel-slider up">
      <a class="carousel-item" href="#one!">
          <img :src="sliderimage1" alt="">
      </a>
      <a class="carousel-item" href="#one!">
          <img :src="sliderimage2" alt="">
      </a>
      <a class="carousel-item" href="#one!">
          <img :src="sliderimage3" alt="">
      </a>
    </div>
    <!-- msg bar is here -->
    <ul class="collapsible z-depth-0">
      <li>
        <div class="collapsible-header row tooltipped" data-tooltip="know about us">
          <p class="title col l6 m5 s5">Buy a product get a lot of Confianza</p>
          <p class="promo col l5 m7 s7">
            get 10% free by using "CONFIANZA" promo code now
          </p>
        </div>
        <div class="collapsible-body">
          <p>
            You are Confianza,means the most trusted people.You may have another
            explaination about us but we really care about our services that should be as
            we talk.By selling product we communicate to you guys and having a lot of
            experiences from you,one day maybe I will pay you for that wait till then.
            <br />Our new promo is sailed here,,creck that up quickly!!!!
          </p>
        </div>
      </li>
    </ul>
    <!-- products card is here -->
    <div>
      <div class="row center">
        <div class="col s4 m3" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-image">
              <img :src=" 'http://127.0.0.1:8000'+ product.pro_image1" alt="item image">
            </div>
            <div class="card-content">
              <p class="card-title name">{{product.name}}</p>
              <p class="card-title name">Price-{{product.price}}৳</p>
            </div>
            <div class="card-action">
              <router-link :to="'/'+product.id" class="btn">buy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import M from "materialize-css"

export default {
  mounted() {
    // metaral js design
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, { fullWidth: true, indicators: true });
      console.log(instances);
    });
    M.AutoInit();
    //metarial design ends here
  },
  // main functions are below
  data(){
    return{
      products:[],
      sliders:[],
      sliderimage1:'',
      sliderimage2:'',
      sliderimage3:'',
    }
  },
  created(){
    // get products from django rest api
    axios.get('http://127.0.0.1:8000/').then(data=>{
      this.products = data.data
      console.log(this.products)
    });
    // geting slider images from django rest api /sliders
    axios.get('http://127.0.0.1:8000/sliders').then(sliders=>{
      this.sliders=sliders.data
      console.log(this.sliders)
      this.sliderimage1 = 'http://127.0.0.1:8000' + this.sliders[0].sliderimage1
      this.sliderimage2 = 'http://127.0.0.1:8000' + this.sliders[0].sliderimage2
      this.sliderimage3 = 'http://127.0.0.1:8000' + this.sliders[0].sliderimage3
    })
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
.name {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
.title {
  font-family: monospace;
  font-size: 13px;
}
.promo {
  font-family: monospace;
  font-size: 13px;
}
</style>
