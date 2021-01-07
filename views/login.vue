<template>
  <div class="html">
    <!-- login logic here -->
    <ul class="container">
      <li>
        <div class="center">
          <div>
            <p class="login-header">Login to Confianza.</p>
            <p class="red black-text container err">{{ err_message }}</p>
          </div>
        </div>
        <form class="container center" @submit.prevent="login">
          <div class="row">
            <div class="col l12">
              <input
                type="email"
                class="validate"
                placeholder="email"
                v-model="email"
                required
              />
            </div>
            <div class="col l12">
              <input
                type="password"
                class="validate"
                placeholder="password"
                v-model="password"
                required
              />
            </div>
            <div class="col l12 login-btn">
              <button class="btn red">Login</button>
            </div>
            <div>
              <div class="footer-login">
                Don't have an account??<span
                  ><router-link to="/register" class="btn red register-button"
                    >register</router-link
                  ></span
                >
              </div>
            </div>
          </div>
        </form>
      </li>
    </ul>
    <!-- login end -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      err_message: "",
      user_info:[]
    };
  },
  mounted(){
    const user = JSON.stringify(this.$cookies.get("user"));
      if (user != 'null') {
        this.$router.push({ name: "Home" });
      }
  },
  methods: {
    login() {
      Axios.post("http://127.0.0.1:8000/auth/token/login/", {
        email: this.email,
        password: this.password,
      })
      .then((data) => {
        console.log(data.data.auth_token)
        this.err_message = "";
        Axios.get('http://127.0.0.1:8000/users').then(users=>{
          var user_info = users.data.filter(user=>{
            return user.email.match(this.email)
          })
          console.log(user_info)
          this.$cookies.set('user',user_info[0].username)
          this.$cookies.set('user_info',user_info[0])
          this.$cookies.set(user_info[0].username,data.data.auth_token)
        }).then(()=>{
          this.$router.push({name:'Cart'})
        })
      })
      .catch((err) => {
        console.log(err)
        this.err_message =
          "invalid email or password.Please correct them to be logged in";
      });
    },
  },
};
</script>

<style scoped>
.html {
  margin-top: 100px;
}
.err{
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.footer-login span {
  margin: 20px;
}
.login-header {
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  margin: 40px;
}
</style>