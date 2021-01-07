<template>
  <div class="html grey lighten-5">
    <div class="white items">
      <div>
        <div>
          <div class="center cart-header">
            <p>Cart</p>
            <p>Your cart my product never seen a combination like that!</p>
            <p class="center red-text" style="margin-top: 20px">{{ msg }}</p>
          </div>
        </div>

        <div class="container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="item.unknown">
                <td>
                  <img
                    :src="'http://127.0.0.1:8000' + item.image"
                    alt="product pic"
                    style="width: 70px"
                  />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <select
                    class="browser-default grey lighten-3"
                    style="width: 50px"
                    v-model="quantity[index]"
                  >
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
                <td>{{ item.price }} ৳</td>
                <td>{{ item.color }}</td>
                <td>
                  <button
                    class="btn-small #d50000 red accent-4 remove-btn"
                    @click="remove(index)"
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td><b></b></td>
                <td><b>Total</b></td>
                <td></td>
                <td>
                  <b>{{ total }} ৳</b>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="center info-div">
          <div class="container">
            <p class="extra-msg">You can give extra specifications.</p>
            <div class="input-field">
              <input
                type="text"
                placeholder="Your words here"
                v-model="extra_spec"
              />
            </div>
          </div>
        </div>
        <div class="center total">
          <div class="container grey lighten-3 pricing-box">
            <div class="row">
              <div class="col l6 m6 s6 final-price">
                <b>SubTotal</b>
              </div>
              <div class="col l6 m6 s6 final-price">
                <b>{{ total }} ৳</b>
              </div>
              <div class="col l6 m6 s6 final-price">
                <b>Shipping</b>
              </div>
              <div class="col l6 m6 s6 final-price">
                <b>100 ৳</b>
              </div>
              <div class="col l6 m6 s6 final-price">
                <b>Total</b>
              </div>
              <div class="col l6 m6 s6 final-price">
                <b>{{ alltotal }} ৳</b>
              </div>
            </div>
          </div>
          <div>
            <button class="btn #f44336 proceed red" @click="proceed">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Axios from "axios";
export default {
  data() {
    return {
      cart: [],
      quantity: [1, 1],
      extra_spec: null,
      price_cond: [],
      msg: "",
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("cart")).length) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      for (var i = 0; i < this.cart.length; i++) {
        this.quantity.push(1);
      }
    } else {
      this.msg = "YOUR CART IS EMPTY";
    }
    
  },
  methods: {
    remove(index) {
      this.cart.splice(index, 1);
      var cart_parsed = JSON.stringify(this.cart);
      localStorage.setItem("cart", cart_parsed);
      this.$root.$emit("cart_length");
    },
    proceed() {
      if (this.cart.length) {
        for (let key in this.cart) {
          this.cart[key].quantity = this.quantity[key];
        }
        this.price_cond = [
          { extra_spec: this.extra_spec },
          { subtotal: this.total },
          { total: this.alltotal },
        ];
        const final_cart = [
          { cart: this.cart },
          { price_condition: this.price_cond },
        ];
        console.log();
        localStorage.setItem("FinalCart", JSON.stringify(final_cart));
        const user = JSON.stringify(this.$cookies.get("user"));
        if (user == "null") {
          this.$router.push({ name: "Login" });
        } else {
          this.$router.push({ name: "Address" });
        }
      }
      else{
        this.msg = "Empty cart doesn't work"
      }
    },
  },
  computed: {
    total() {
      var total = 0;
      this.cart.forEach((item) => {
        total = total + parseInt(item.price);
      });
      return total;
    },
    alltotal() {
      return this.total + 100;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
.html {
  margin-top: 30px;
  padding: 30px;
}

.items {
  border-radius: 100px;
}
.cart-header {
  margin-bottom: 30px;
  font-family: "poppins", arial;
  font-size: 20px;
}
.pricing-box {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 60px 50px 60px 0px;
}
.proceed {
  margin-top: 30px;
  margin-bottom: 10px;
}
.final-price {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  margin-top: 10px;
}
.info-div {
  margin: 50px;
}
.remove-btn {
  font-size: 10px;
}
.extra-msg {
  font-family: "poppins", arial;
  font-size: 20px;
}
/* label focus color */
.input-field input[type="text"]:focus + label {
  color: rgb(20, 18, 18);
}
/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid rgb(8, 8, 8);
  box-shadow: 0 1px 0 0 rgb(0, 0, 0);
}
</style>
