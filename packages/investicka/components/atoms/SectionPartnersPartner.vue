<template>
  <div
    class="partner"
    v-editable="blok"
  >
    <a
      :href="blok.link"
      target="_blank"
    ><img
        v-lazy="blok.img"
        :alt="blok.name"
        class="partner__img"
      ></a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.partner {
  margin: 1rem auto;
  height: 5rem;
}

.partner__img {
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>
