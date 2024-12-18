const { createApp, ref } = Vue;

const app = createApp({
  // template: `
  //   <h1>{{message}}</h1>
  //   <p>{{author}}</p>
  //   `,

  setup() {
    const message = ref("I'm Batman");
    const author = ref("Soy Bruce Wayne");

    const changeQuote = () => {
      message.value = "Soy goku";
      author.value = message;
    };

    // setTimeout(() => {
    //   message.value = "Soy goku";
    //   author.value = message;
    // }, 3000);

    return {
      message,
      author,
      changeQuote,
    };
  },
});

app.mount("#myApp");
