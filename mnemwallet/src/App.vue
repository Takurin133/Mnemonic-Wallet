<template>
  <div id="app">
    <ion-item>
      <ion-label position="floating">password</ion-label>
      <ion-input
        v-bind:value="password"
      ></ion-input>
      <router-link to="/Qrdisplay">
        <ion-button size="small" shape="round" @click="getPassWord({ value })"
          >Generate Account QRCode</ion-button
        >
      </router-link>
    </ion-item>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  el: "#app",
  data() {
    passwords: ""
  },
  created: function() {
    console.log("created");
    console.log(this.$el);
  },
  mounted: function() {
    console.log("mounted Import");
  },
  methods:{
    async getPassWord({password}){
      this.passwords = password
      return this.passwords
    }
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
