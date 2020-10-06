<template>
  <div class="timer">
    <div class="message">{{ message }}</div>
    <div
      v-show="statusType !== 'expired'"
      v-editable="blok"
    >
      <div class="day">
        <span class="number">{{ days }}</span>
        <div class="format">{{ timeCzech(days, 'den', 'dni', 'dní') }}</div>
      </div>
      <div class="hour">
        <span class="number">{{ hours }}</span>
        <div class="format">{{ timeCzech(hours, 'hodina', 'hodiny', 'hodin') }}</div>
      </div>
      <div class="min">
        <span class="number">{{ minutes }}</span>
        <div class="format">{{ timeCzech(minutes, 'minuta', 'minuty', 'minut') }}</div>
      </div>
      <div class="sec">
        <span class="number">{{ seconds }}</span>
        <div class="format">{{ timeCzech(seconds, 'vteřina', 'vteřiny', 'vteřin') }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.timer {
  text-align: center;

  .day,
  .hour,
  .min,
  .sec {
    display: inline-block;
    text-align: center;
    margin: 0 5px;
    .format {
      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
      margin-top: 0.5rem;
      color: $kiLighter;
    }
  }
  .number {
    background: $kiLighter;
    padding: 0.5rem;
    font-size: 3rem;
    border-radius: 4px;
    display: inline-block;
    width: 4rem;
    text-align: center;
    color: $kiDark;
  }
  .message {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
}
</style>


<script>
export default {
  props: ["blok"],
  data: function() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
      statusType: ""
    };
  },
  created: function() {},
  mounted() {
    this.start = Date.parse(this.blok.start_time);
    this.end = Date.parse(this.blok.end_time);
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.blok.expired;
        this.statusType = "expired";
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
        this.message = this.blok.running;
        this.statusType = "running";
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
        this.message = this.blok.upcoming;
        this.statusType = "upcoming";
      }
    },
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
    timeCzech(variable, one, twoToFour, other) {
      switch (variable) {
        case 1:
          return one;
          break;
        case 2:
        case 3:
        case 4:
          return twoToFour;
          break;
        default:
          return other;
      }
    }
  }
};
</script>

