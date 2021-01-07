<template>
  <div>
    <div class="navbar-fixed">
      <nav>
        <header class="#f5f5f5 white lighten-4 row">
          <div class="nav-wrapper">
            <div class="head">
              <div>
                <div class="col l6 m6 s6">
                  <span class="logo"><p>Confianza</p></span>
                </div>
                <div class="col l6 m6 s6">
                  <span
                    ><router-link to="/search" href="#"
                      ><i class="material-icons icons">search</i></router-link
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="nav-wrapper #212121 grey darken-4 navup">
          <!-- profile login here -->
          <a
            class="right brand-logo dropdown-trigger"
            href="#"
            data-target="dropdown1"
            v-show="show"
            ><i class="large material-icons">account_circle</i></a
          >
          <router-link to="/login" class="right brand-logo" href="#" v-show="!show"
            ><i
              class="large material-icons tooltipped"
              data-position="left"
              data-tooltip="Login"
              >login</i
            ></router-link
          >
          <!-- dropdown here -->
          <ul id="dropdown1" class="dropdown-content #e8f5e9 green lighten-5">
            <li>
              <div class="center">
                <div class="infogin">
                  <div class="row">
                    <div class="input-field col l12 m12 s12">
                      <input
                        disabled
                        :value="user_info.name"
                        id="disabled"
                        type="text"
                        class="validate"
                        style="width: 200px"
                      />
                    </div>
                    <div class="input-field col l12 m12 s12">
                      <input
                        disabled
                        :value="user_info.username"
                        id="disabled"
                        type="text"
                        class="validate"
                        style="width: 200px"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col l12 m12 s12">
                      <input
                        disabled
                        :value="user_info.email"
                        id="disabled"
                        type="text"
                        class="validate"
                        style="width: 200px"
                      />
                    </div>
                    <div class="input-field col l12 m12 s12">
                      <input
                        disabled
                        :value="user_info.phone"
                        id="disabled"
                        type="text"
                        class="validate"
                        style="width: 200px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="center">
                <div>
                  <div>
                    <p class="info-text container" style="width: 250px">
                      Here are some informations you may need from us.
                    </p>
                  </div>

                  <div>
                    <router-link class="btn black margin-btn" to="/orders"
                      >Check your orders</router-link
                    >
                  </div>
                  <div>
                    <router-link class="btn black margin-btn" to="#"
                      >find your pyment history</router-link
                    >
                    <div style="margin-bottom:30px">
                      <button class="btn red" @click="logout">Logout</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- profile logic here -->
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul class="left hide-on-med-and-down">
            <li>
              <router-link to="/"
                ><i
                  class="material-icons icon tooltipped"
                  data-position="top"
                  data-tooltip="Shop"
                  >shop</i
                ></router-link
              >
            </li>
            <li>
              <router-link to="/category"
                ><i
                  class="material-icons icon tooltipped"
                  data-position="bottom"
                  data-tooltip="Categories"
                  >line_style</i
                ></router-link
              >
            </li>
            <li>
              <router-link to="/cart"
                ><i
                  class="material-icons icon tooltipped"
                  data-position="right"
                  data-tooltip="Cart"
                  >add_shopping_cart</i
                ></router-link
              >
            </li>
            <span class="badge badge"><p class="badge-text">{{cart_length}}</p></span>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li><router-link to="/">Shop</router-link></li>
      <li><router-link to="/category">Category</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import M from "materialize-css";
// import axios from "axios";
export default {
  data() {
    return {
      sticky: "",
      show:false,
      user_info : [],
      cart_length:'',
    };
  },
  created(){
    this.init();
    var user = this.$cookies.get('user')
    if (user){
      this.show = true
    }
    var userInfo = this.$cookies.get('user_info')
    if (userInfo){
      this.user_info = userInfo
    }
    // items quantity on cart
    if(localStorage.getItem('cart')){
      var items = JSON.parse(localStorage.getItem('cart'))
    }
    if(items){
      this.cart_length = items.length
    }
    else{
      this.cart_length = 0
    }
    // calling cartlength for updating length of new added items
    this.$root.$on('cart_length',()=>{
      this.cartlength();
    })
   
  },
  methods: {
    logout(){
      this.$cookies.remove('user')
      this.$cookies.remove('user_info')
    },
    cartlength(){
      if(localStorage.getItem('cart')){
      var items = JSON.parse(localStorage.getItem('cart'))
    }
    if(items){
      this.cart_length = items.length
    }
    else{
      this.cart_length = 0
    }
    },
    // page init
    init(){
      document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
      console.log(instances);
      // tooltip
      var elems1 = document.querySelectorAll(".tooltipped");
      var instances1 = M.Tooltip.init(elems1);
      console.log(instances1);
      // scroll controll
      // profile dropdown
      var elems2 = document.querySelectorAll(".dropdown-trigger");
      var instances2 = M.Dropdown.init(elems2, {
        constrainWidth: false,
        closeOnClick:true,
      });
      console.log(instances2);
    });
    }
  },

};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
.sticky-nav {
  position: fixed;
  top: 0px !important;
}
.login-btn {
  margin-top: 20px;
  margin-bottom: 30px;
}
.footer-login {
}
.register-button {
  font-size: 10px;
}
.login-dropdown {
  width: 400px;
  height: auto;
}

.login {
  font-family: "Poppins", "arial";
  margin-top: 15px;
  border-radius: 10px 10px 10px 0px;
}
.infogin {
  margin-top: 20px;
}
.margin-btn {
  margin: 20px;
}
.info-text {
  font-family: "Poppins", sans-serif;
  font-weight: 1000;
  font-size: 17px;
  margin-bottom: 20px;
}
.infos {
  width: 200px;
}
.profile-img {
  width: 200px;
  border-radius: 500px 500px 500px 50px;
}
a {
  text-decoration: none !important;
}
* {
  margin: 0px;
  padding: 0px;
}
.icons {
  color: #000;
  position: relative;
  bottom: 15px;
}
.navup {
  position: relative;
  bottom: 50px;
}
.head {
  text-align: center;
  height: 30px !important;
}
.logo {
  display: inline-block;
  position: relative;
  bottom: 15px;
  font-size: 20px;
  margin-right: 50px;
  color: rgb(0, 0, 0);
  font-family: "Sriracha", cursive;
}
.cart {
  position: relative;
}
.badge {
  position: relative;
  left: -40px;
  top: 10px;
}
.badge-text {
  color: white;
}
</style>
