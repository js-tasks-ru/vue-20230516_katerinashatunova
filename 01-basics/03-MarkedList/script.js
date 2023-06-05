import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

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
