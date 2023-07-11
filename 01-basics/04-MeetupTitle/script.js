import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  data() {
    return {
      meetupId: 1,
      meetupTitle: null
    }
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        fetchMeetupById(this.meetupId).then((res) => {
          this.meetupTitle = res.title
        });
      }
    }
  }
});

const app = createApp(App);
app.mount('#app');
