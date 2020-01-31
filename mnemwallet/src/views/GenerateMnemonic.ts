import { Password, NetworkType } from 'nem2-sdk';
import { MnemonicPassPhrase } from 'nem2-hd-wallets';
import { MnemonicQR } from 'nem2-qr-library';
// import variable from '../App.vue'

const mnemonic = MnemonicPassPhrase.createRandom();
const password = new Password('this.password');
const generationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';

const exportMnemonic = new MnemonicQR(mnemonic, password.value, NetworkType.TEST_NET, generationHash);
exportMnemonic.toBase64().subscribe(x => console.log(x));