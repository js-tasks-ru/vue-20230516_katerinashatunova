import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const fetchEmails = () => fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

const App = defineComponent({
  data() {
    return {
      emails: null,
      search: '',
    };
  },

  computed: {
    emailsMarked() {
      return this.emails.map((e) => ({
        text: e,
        isMarked: this.search ? e.includes(this.search) : false,
      }));
    },
  },

  mounted() {
    fetchEmails().then((emails) => {
      this.emails = emails.map((i) => i.email);
    });
  },
});

const app = createApp(App);
app.mount('#app');
