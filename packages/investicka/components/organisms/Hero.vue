<template>
  <!-- :style="{ 'background-image': 'url(' + background + ')' }" -->
  <div
    class="hero"
    id="hero"
    v-editable="blok"
  >
    <div class="hero__title">
      <slot>
        <h1>{{ blok.title }}</h1>
        <h2>{{ blok.subtitle }}</h2>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.hero {
  color: $kiLight;
  background-position: center;
  background-size: cover;
  height: calc(100vh - #{$headerHeight} - 2 * #{$headerPaddingV});
  display: flex;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: $kiColor;
  font-family: "DejaVu", "Open Sans", serif;
  font-display: auto;

  @include mq("tablet") {
    flex-direction: row;
    background-image: url("/cover.svg");
    padding: 0 5%;
  }
}

.hero__title {
  width: 60%;
  margin: 0 auto;

  h1 {
    text-transform: uppercase;
  }

  //background-color: rgba($kiLight, 0.8);
}

.hero__bottom {
  flex: 1 0 auto;
}
</style>


<script>
import VTimer from "@/components/molecules/HeroTimer";

export default {
  props: {
    background: {
      type: String,
      default: "/cover.svg"
    },
    blok: {
      type: Object
    }
  },
  components: { VTimer }
};
</script>
