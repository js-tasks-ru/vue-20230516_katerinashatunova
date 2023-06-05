import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const fetchEmails = () =>
  fetch('https://jsonplaceholder.typicode.com/comments').then((res) => {
    return res.json();
  });

const App = defineComponent({
  data() {
    return {
      search: '',
      emails: null,
    };
  },

  computed: {
    markedEmails() {
      return this.emails.map((email) => {
        const marked = this.search ? email.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 : false;
        return { value: email, marked: marked };
      });
    },
  },

  mounted() {
    fetchEmails().then((comments) => {
      this.emails = comments.map((comment) => comment.email);
    });
  },
});

const app = createApp(App);
app.mount('#app');
