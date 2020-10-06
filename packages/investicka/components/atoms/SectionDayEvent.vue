<template>
  <div
    class="event"
    v-editable="blok"
  >
    <div class="event__spacetime">
      <div
        v-if="blok.place || blok.registration"
        class="event__place"
      >
        <span v-if="blok.place">
          {{ blok.place }}
        </span>
        <a
          v-if="blok.registration"
          class="event__registration"
          :href="blok.registration"
          target="_blank"
        >
          Registrace
        </a>
      </div>
      <div class="event__time">
        {{ blok.time }}
      </div>
    </div>
    <div class="event__split">|</div>
    <div class="event__text">
      <a
        :href="blok.fb"
        v-if="blok.fb"
        target="_blank"
      >
        <h4 class="event__title">{{ blok.name }}
          <img
            v-lazy="`facebook_circle_logo.png`"
            :alt="blok.name"
            class="event__fb"
          >
        </h4>
      </a>
      <div class="event__desc">{{ blok.description }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.event {
  border-bottom: 4px dotted #ddd;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;

  @include mq("phablet") {
    flex-direction: row;
  }
}

.event__spacetime {
  color: $kiColorContra;
  font-weight: 600;
  white-space: nowrap;
}

.event__place {
  font-size: 1.25em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-align: center;

  @include mq("phablet") {
    text-align: left;
  }
}

.event__registration {
  padding: 4px;
  background: $kiLighter;
  border-radius: 4px;
  color: $kiColor;
  text-decoration: none;
  margin: 4px;
}

.event__time {
  font-size: 2rem;
}

.event__split {
  display: none;

  @include mq("phablet") {
    display: initial;
    font-size: 3rem;
    font-weight: 100;
    color: #bbb;
    margin: 0 1rem;
    flex-direction: row;
  }
}

.event__text {
  text-align: center;

  a {
    color: unset;
    text-decoration: none;
  }

  @include mq("phablet") {
    text-align: left;
  }
}

.event__title {
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
}

.event__fb {
  height: 1.5rem;
}

.event__desc {
  margin-top: 0.5rem;
  color: #aaa;
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>
