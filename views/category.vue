<template>
  <div class="html">
    <!-- header of the page -->
    <div>
      <div class="collection">
        <h5 class="center-align collection-item">
          <i class="material-icons">all_inclusive</i
          ><span class="text">Categories and Marchents</span>
        </h5>
      </div>
    </div>
    <!-- categories card -->
    <div>
      <div class="row">
        <div class="col l3 m3 s4" v-for="category in categories" :key="category.id">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img
                class="activator"
                :src="'http://127.0.0.1:8000'+category.image"
              />
            </div>
            <div class="card-content"></div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"
                >{{category.name}}<i class="material-icons right">close</i></span
              >
              <p>
                {{category.descriptions}}
              </p>
              <div class="center">
                <button class="btn grey button" @click="categorized(category.id)">products</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
import M from "materialize-css";
import Axios from 'axios';
export default {
  data(){
    return{
      categories:"",
    }
  },
  mounted() {
    M.AutoInit();
  },
  // main functionality is here
  created(){
    Axios.get('http://127.0.0.1:8000/categories').then(data=>{
      this.categories = data.data
      console.log(this.categories)
    })
  },
  methods:{
    categorized(id){
      localStorage.setItem('cate_id',id)
      this.$router.push({path:'/pro_by_cate'})
      id
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aldrich&family=Poppins:wght@300&family=Rubik+Mono+One&family=Sriracha&display=swap");
.html {
  margin-top: 50px;
}
.text {
  font-family: "Aldrich", sans-serif;
  position: relative;
  bottom: 3px;
  margin-left: 10px;
}
.button {
  margin-top: 10px;
}
</style>
