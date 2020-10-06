<template>
  <header
    class="header"
    id="header"
    v-editable="blok"
  >
    <a
      href="#"
      v-scroll-to="'#hero'"
    >
      <img
        :src="blok.logo"
        alt="Investiční konference"
        class="header__logo"
      >
    </a>
    <v-header-menu />
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.header {
  padding: $headerPaddingV $headerPaddingH;
  color: #fff;
  position: sticky;
  top: 0;
  background-color: $kiLight;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  align-items: center;
  height: $headerHeight;
}

.header__logo {
  height: $headerHeight;
  //position: absolute;
  //top: 8vh;
}
</style>


<script>
import VHeaderMenu from "@/components/molecules/HeaderMenu";

export default {
  props: ["blok"],
  components: {
    VHeaderMenu
  }
};
</script>
