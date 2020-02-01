<template>
  <div class="QRDisplay">
    <body>
      <img
        src="data:image/png;base64,{{ exportMnemonic }}"
        alt="mnemonic data"
      >
    </body>
  </div>
</template>
<script lang="ts">
import * as exportMnemonic from './GetWalletFromMnemonicQRJson'
