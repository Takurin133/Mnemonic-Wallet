<template>
  <div id="app">
    <ion-item>
      <ion-label position="floating">password</ion-label>
      <ion-input
<<<<<<< HEAD
        v-bind:value="password"
        v-on:input="psddeord = $event.target.value"
=======
      @input="password = $event.target.value"
>>>>>>> a279a8cc486e61d451e43d3eb155af70308a914b
      ></ion-input>
      <router-link to="/Qrdisplay">
        <ion-button size="small" shape="round" @click="getPassWord()"
          >Generate Account QRCode</ion-button>
      </router-link>
    </ion-item>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: ''
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted Import')
  },
  methods: {
<<<<<<< HEAD
    async getPassWord () {
      const password = this.password
      // return this.passwords
      console.log(password)
=======
    getPassWord () {
      console.log('on click button')
      console.log(this.password)
>>>>>>> a279a8cc486e61d451e43d3eb155af70308a914b
    }
  }
}
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
