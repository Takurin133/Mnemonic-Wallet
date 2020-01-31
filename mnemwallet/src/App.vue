<template>
  <div id="app">
    <ion-item>
      <ion-label position="floating">password</ion-label>
      <ion-input
      @input="password = $event.target.value"
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
import SettingModel from './views/GetWalletFromMnemonicQRJson'
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
    getPassWord () {
      console.log('on click button')
      console.log(this.password)
      // 入力値を代入したpasswordをthis.passwordとよしなに結びつけてくれるのがVue
      // methods内でのpasswordはローカル変数になるので定義されない
      const model = new SettingModel()
      model.password = this.password
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
