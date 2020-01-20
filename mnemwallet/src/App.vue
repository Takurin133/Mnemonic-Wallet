<template>
  <div id="app">
    <ion-item>
      <ion-label position="floating">password</ion-label>
      <ion-input></ion-input>
      <router-link to="/Qrdisplay">
        <ion-button size="small" shape="round"
          >Generate Account QRCode</ion-button
        >
      </router-link>
    </ion-item>
    <router-view />
  </div>
  <!-- <router-view/> -->
  <!-- </div> -->
</template>
<script>
export default {
  name: "App"
};
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
