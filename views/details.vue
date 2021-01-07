<template>
  <div class="html">
    <div class="center">
      <div class="title">CHOOSE THE BEST VERSION FOR YOUR SELF</div>
    </div>
    <div>
      <div class="carousel" style="position: relative; bottom: 100px">
        <a class="carousel-item" href="#one!" style="width: 400px"
          ><img :src="'http://127.0.0.1:8000' + product.pro_image1"
        /></a>
        <a class="carousel-item" href="#two!" style="width: 400px"
          ><img :src="'http://127.0.0.1:8000' + product.pro_image2"
        /></a>
        <a class="carousel-item" href="#three!" style="width: 400px"
          ><img :src="'http://127.0.0.1:8000' + product.pro_image3"
        /></a>
      </div>
    </div>
    <div class="center">
      <div class="row detail">
        <div class="col l7 m7 s7 name">{{ product.name }}</div>
        <div class="col l5 m5 s5 price">Price-{{ product.price }}৳</div>
      </div>
      <div style="margin: 30px; font-size: 17px">
        <p class="red-text">
          Color available-{{ product.colors }} || Size available -{{
            product.sizes
          }}
        </p>
      </div>
      <div class="row detail">
        <div class="col l8 m8 s8">
          <div class="input-field col" style="width: 100px; margin-left: 80px">
            <select v-model="cartItem.color" required>
              <option value="" disabled selected>colors</option>
              <option>white</option>
              <option>black</option>
              <option>blue</option>
              <option>ash</option>
              <option>pink</option>
            </select>
          </div>
        </div>
        <div class="col l4 m4 s4">
          <div class="input-field col" style="width: 100px">
            <select v-model="cartItem.size" required>
              <option value="" disabled selected>Sizes</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
        <div>
          <p class="red-text" style="margin-left:20px">
         {{err}}
        </p>
        </div>
        <div>
          <button class="btn black button" @click="addtocart">ADD TO CART</button>
        </div>
      </div>
      <div class="desall">
        <div class="row detail">
          <div class="extra-info">
            <p class="des">Write you wanna say to us</p>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="cartItem.extra_message"
                id="email"
                type="text"
                placeholder="Write your directions"
              />
            </div>
          </div>
          <p class="des-head">Description</p>
          <p class="des container">
            {{ product.details }}
          </p>
          <router-link
            to="/"
            class="btn #ff80ab pink accent-1"
            style="margin: 40px"
          >
            Back
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import M from "materialize-css";
import axios from "axios";
export default {
  mounted() {
    M.AutoInit();
    // get cart from localstorage for making sure you have the same cart running
    if(localStorage.getItem('cart')){
        this.cart = JSON.parse(localStorage.getItem('cart'))
    }
  },
  // details functions are here
  data() {
    return {
      id: this.$route.params.id,
      product: [],
      cart:[],
      cartItem :{
        name:null,
        price:null,
        image:null,
        color:null,
        size:null,
        extra_message:null,
      },
      err:null,
      added :null
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/?id=" + this.id).then((data) => {
      this.product = data.data;
      this.colors = this.product.colors;
      this.cartItem.name=this.product.name,
      this.cartItem.price=this.product.price,
      this.cartItem.image=this.product.pro_image1,
      this.cartItem.id=this.product.id
    });
  },
  methods:{
    addtocart(){
      if(this.cartItem.color && this.cartItem.size){
        this.cart.push(this.cartItem)
        console.log(this.cart)
        this.savecart();
        this.$root.$emit('cart_length')
        this.err = 'item added to the cart'
      }
      else{
        this.err = 'color and size can not be empty'
      }
    },
    savecart(){
    var string =JSON.stringify(this.cart)
    localStorage.setItem('cart',string)
    }
  },
};
</script>

// css are here
<style scoped>
/* google font links */
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
/* end here */
/* label focus color */
.input-field input[type="text"]:focus + label {
  color: rgb(20, 18, 18);
}
/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid rgb(255, 199, 248);
  box-shadow: 0 1px 0 0 rgb(253, 213, 248);
}
.extra-info {
  margin-top: 50px;
}
.desall {
  margin-left: 30px;
}
.button {
  margin-left: 40px;
  margin-top: 20px;
}
.title {
  font-family: "Sriracha", cursive;
  font-size: 30px;
  padding: 20px;
}
.name {
  font-size: 25px;
  font-family: "Aldrich", sans-serif;
}
.price {
  font-size: 25px;
  font-family: "Aldrich", sans-serif;
}
.des {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  margin-top: 10px;
  line-height: 27px;
}
.des-head {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  margin-top: 25px;
}
.html {
  margin-top: 38px;
  background: rgb(252, 248, 248);
}
.detail {
  width: 500px;
}
</style>
