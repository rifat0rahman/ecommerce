<template>
  <div class="html">
    <div>
      <div class="center container">
        <p class="register-header">Register Your self to Confianza</p>
        <p class="err red black-text">{{ err_message }}</p>
      </div>
      <div class="center container">
        <form class="row" @submit.prevent="register">
          <div>
            <div class="col l6 m6 s12 regis-field">
              <input
                type="text"
                placeholder="Name"
                v-model="register_data.name"
              />
            </div>
            <div class="col l6 m6 s12 regis-field">
              <input
                type="text"
                placeholder="username"
                v-model="register_data.username"
                required
              />
            </div>
            <div class="col l6 m6 s12 regis-field">
              <input
                type="text"
                placeholder="email"
                v-model="register_data.email"
                required
              />
            </div>
            <div class="col l6 m6 s12 regis-field">
              <input
                type="text"
                placeholder="number"
                v-model="register_data.phone"
                required
              />
            </div>
            <div class="col l6 m6 s12 regis-field">
              <input
                type="password"
                placeholder="password"
                v-model="register_data.password"
                required
              />
            </div>
            <div class="col l6 m6 s12 regis-field">
              <input
                type="password"
                placeholder="confirm password"
                v-model="register_data.re_password"
                required
              />
            </div>
            <div class="col l12 m12 s12 regis-field">
              <button class="btn red">Register</button>
            </div>
            <div class="col l12 m12 s12 regis-field collection">
              <p class="collection-item">
                Your informations will always be hidden from the public places
                and secret infos will be hidden from our site too.
              </p>
            </div>
          </div>
        </form>
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
    var info = this.$cookies.get('user_info')
    console.log(info)
    // router pushing
    const user = JSON.stringify(this.$cookies.get("user"));
      if (user != 'null') {
        this.$router.push({ name: "Home" });
      }
  },
  // main functions
  data() {
    return {
      register_data: {
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        re_password: "",
      },
      err_message: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://127.0.0.1:8000/auth/users/", {
          name: this.register_data.name,
          username: this.register_data.username,
          phone: this.register_data.phone,
          password: this.register_data.password,
          email: this.register_data.email,
          re_password: this.register_data.re_password,
        })
        .then((user_info) => {
          this.$cookies.set('user_info',user_info.data)
          this.$cookies.set('user',this.register_data.username)
          axios.post('http://127.0.0.1:8000/auth/token/login/',{
            email:this.register_data.email,
            password:this.register_data.password
          }).then(data=>{
            const auth_token = data.data.auth_token
            this.$cookies.set(this.register_data.username,auth_token)
            console.log(data)
            this.$router.push('/')
          })
        })
        .
        catch((err) => {
          console.log(err.response.data);
          var errors = err.response.data;
          for (let value in errors) {
            var spac_erros = errors[value];
            this.err_message = spac_erros[0];
          }
        });
    },
  },
};
</script>

<style scoped>
.err {
  margin: 20px;
}
.register-header {
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  margin: 30px;
  font-weight: 1000;
}
.regis-field {
  margin-bottom: 30px;
}
.html {
  margin-top: 70px;
}
</style>
