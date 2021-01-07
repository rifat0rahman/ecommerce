<template>
  <div class="html">
    <div>
      <div class="center main-div">
        <p>Your Orders</p>
      </div>
      <div style="margin-top:30px;font-size:20px" class="center">
        <p>{{msg}}</p>
      </div>
      <div>
        <ul class="collapsible z-depth-0">
          <li v-for="order in Order_Info"
                :key="order.id">
            <div class="center collapsible-header order-header">
              <div
                class="row"
                style="width: 1500px"
              >
                <div class="col l3 m3 s3">{{order.date}}</div>
                <div class="col l3 m3 s3">#{{order.id}}</div>
                <div class="col l3 m3 s3">{{order.quantities}}Items</div>
                <div class="col l3 m3 s3 pending">
                  <p v-show="!order.status" class="red ligten-1">Pending</p>
                  <P v-show="order.status" class="green">Done</P>
                </div>
                <div class="col l3 m3 s3 done" hidden>Done</div>
              </div>
            </div>
            <div class="collapsible-body order-details">
              <div class="center">
                Quantities:{{order.quantities}} <br />
                Order code: {{order.id}} <br />
                Order date: {{order.date}} <br />
                Delivery date: Within three days <br />
                <p v-show="order.status">Product Status:Pending</p>
                <P v-show="!order.status">Product Status:Done</P>
                Product Status:{{order.status}} <br />
                Delivery to:{{order.address}} <br />
              </div>
              <div class="center" style="margin-top:20px">
                Really thanks for being us
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="center order-bottom">
        <div>
          By ordering our product you become one of us.Please always support us
          and email us for anything you wanna suggest us.
        </div>
        <div>
          <router-link to="/" class="btn red lighten-0"
            >Back to home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import Axios from "axios";
export default {
  mounted() {
    M.AutoInit();
  },
  // main func
  data() {
    return {
      Order_Info:[],
      msg:null
    };
  },
  created() {
    const user = JSON.stringify(this.$cookies.get('user'))
    Axios.get('http://127.0.0.1:8000/orders').then(orders=>{
      if(orders.data){
        this.Order_Info = orders.data.filter(items=>{
          return items.user == user
        })
        }
      else{
        this.msg = 'You have no order'
      }
    })
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
.html {
  margin-top: 60px;
}
.lighten-0 {
  margin: 40px;
}
.order-bottom {
  margin-top: 40px;
  margin-bottom: 30px;
  font-family: "Poppins", arial;
  font-size: 18px;
}
.order-details {
  font-family: "Poppins", arial;
  font-size: 18px;
}
.pending {
  width: 100px !important;
  border-radius: 20px 20px 0px 20px;
  border: 2px solid rgb(0, 255, 191);
}
.order-header {
  font-weight: 700;
}
.main-div p {
  font-family: "Poppins", arial;
  font-size: 23px;
  margin-bottom: 40px;
}
</style>
