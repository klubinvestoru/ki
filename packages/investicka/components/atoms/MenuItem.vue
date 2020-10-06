<template>
  <a
    v-scroll-to="blok.id"
    href="#"
    class="menuItem"
  >{{ blok.name }}</a>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.menuItem {
  text-decoration: none;
  color: $kiDark;
  margin-left: 0.5em;
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>

