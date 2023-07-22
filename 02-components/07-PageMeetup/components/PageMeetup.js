import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from "./MeetupView.js";
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },

  data() {
    return {
      meetup: null,
      error: ""
    }
  },

  props: {
    meetupId: {type: Number, required: true}
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.meetup = null;
        fetchMeetupById(this.meetupId)
          .then((res) => {
            this.meetup = res;
            this.error = false;
          })
          .catch((err) => this.error = err.message);
      }
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup && !error" :meetup="meetup"/>

      <UiContainer v-else-if="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>

      <UiContainer v-else>
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
    </div>`,
});
