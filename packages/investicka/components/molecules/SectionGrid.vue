<template>
  <div class="grid">
    <component
      :key="blok._uid"
      v-for="blok in blok.item"
      :blok="blok"
      :is="blok.component | dashify"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

$gridGap: 1rem;
.grid {
  display: grid;
  grid-gap: $gridGap;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  text-align: center;

  @include mq("tablet-wide") {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>
