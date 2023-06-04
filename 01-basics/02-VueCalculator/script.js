import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  data() {
    return {
      numberFirst: 0,
      numberSecond: 0,
      sign: '',
    };
  },

  computed: {
    result() {
      switch (this.sign) {
        case 'sum':
          return this.numberFirst + this.numberSecond;
        case 'subtract':
          return this.numberFirst - this.numberSecond;
        case 'multiply':
          return this.numberFirst * this.numberSecond;
        case 'divide':
          return this.numberFirst / this.numberSecond;
        default:
          return 0;
      }
    },
  },
});

const app = createApp(App);
app.mount('#app');
