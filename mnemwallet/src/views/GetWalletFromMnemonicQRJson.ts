
import { MnemonicPassPhrase, ExtendedKey, Network, Wallet } from 'nem2-hd-wallets';
import { MnemonicQR, ExportMnemonicDataSchema } from 'nem2-qr-library';
import { NetworkType } from 'nem2-sdk';
// import this.password from '../App.vue'
export class SettingModel{
  try() {
    const qrJSON = '{"v":3,"type":6,"network_id":152,"chain_id":"CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B","data":{"ciphertext":"b3a4a1b954475f9ca46076183c24333cOG8uF5YkCa3XG0VM1Xd3m+ellqgGXlY1CC+xt0sSmLiYuklxMwsxbXEc0xqbBKGWjL0xUKsgH0XnoE1elTjm824ZlzLEircGI/pFpWAUbkxWXeq1HsqTqNbZoWxkTIOFBcad4VcpCg9/iFW7MDDl7CHP66PL3YEJ7k9wLR+bGBY0aE63IWI4+33+t60vzpzAMnGNUhwxBazQgecaG0JAmw==","salt":"34937f8597635927a58f5734cc106583cb1f808240dacc17cbe03eb7aa3cdea6"}}';
    const result = ExportMnemonicDataSchema.parse(qrJSON, this.password);
    const mnemonic = result.mnemonic;
    const bip32seed = mnemonic.toEntropy();
    console.log(bip32seed.toString());
    const key = ExtendedKey.createFromSeed(bip32seed, Network.CATAPULT_PUBLIC)
    const wallet = new Wallet(key);
    const defaultAccount = wallet.getChildAccount('m/44\'/43\'/0\'/0\'/0\'', NetworkType.TEST_NET);
    console.log(defaultAccount.privateKey);
    console.log(defaultAccount.address.pretty());
  } catch(err) {
    console.error(err);
  }
}

