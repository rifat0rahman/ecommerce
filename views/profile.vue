<template>
  <div class="html">
    <div class="center">
      <div>
        <img
          class="responsive-img"
          src="https://scontent.fdac45-1.fna.fbcdn.net/v/t1.0-9/123397127_116017400300359_2567478414488959072_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=iycObEI9dpsAX_GSBcY&_nc_ht=scontent.fdac45-1.fna&oh=12af5684d8a25a1d13d999a5c96f9e5e&oe=601C12D4"
          alt=""
        />
      </div>
      <div class="container infogin">
        <div class="row">
          <div class="input-field col l6 m6 s6">
            <input
              disabled
              :value="user_info.name"
              id="disabled"
              type="text"
              class="validate"
              style="width: 200px"
            />
          </div>
          <div class="input-field col l6 m6 s6">
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
          <div class="input-field col l6 m6 s6">
            <input
              disabled
              :value="user_info.email"
              id="disabled"
              type="text"
              class="validate"
              style="width: 200px"
            />
          </div>
          <div class="input-field col l6 m6 s6">
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
        <p class="info-text">
          Here are some informations you may need from us.Text us anytime to our massenger
        </p>
      </div>
      <div>
        <router-link class="btn red margin-btn" to="/orders">Check your orders</router-link>
        <router-link class="btn red margin-btn" to="#"
          >find your pyment history</router-link
        >
      </div>
      <div>
        <router-link to="/" class="btn btn #ff80ab pink accent-1 margin-btn"
          >back to home</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import M from "materialize-css";
export default {
  data(){
    return{
      user_info:'',
    }
  },
  mounted() {
    M.AutoInit();
    // router pushing
    const user = JSON.stringify(this.$cookies.get("user"));
      if (user == 'null') {
        this.$router.push({ name: "Home" });
      }
      this.user_info = this.$cookies.get('user_info')
      console.log(this.user_info)
  },
};
</script>

// css are here
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
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
}
.infos {
  width: 200px;
}
img {
  width:180px;
  border-radius: 500px 500px 500px 50px;
}
.html {
  margin-top: 70px;
}
</style>
