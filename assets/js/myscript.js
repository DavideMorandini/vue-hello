/*  Consegna:

    -   Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/

const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Hello Vue!",
      imageUrl: "./assets/img/Vue.js.png",
      titlePosition: "text_center",
    }
  }
}).mount("#app")

