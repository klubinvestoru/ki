<template>
  <section
    class="columns"
    :class="blok.invert ? 'columns--invert' : ''"
    v-editable="blok"
  >
    <div class="columns__textCont">
      <h3>{{ blok.title }}</h3>
      <div v-html="$options.filters.markdown(blok.text)"></div>
    </div>
    <div class="columns__imgCont">
      <img
        v-lazy="img"
        alt=""
        class="columns__img"
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.columns {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @include mq("tablet-wide") {
    flex-direction: row;
  }
}

.columns--invert {
  background-color: #eeeeee;
  @include mq("tablet-wide") {
    flex-direction: row-reverse;
  }
}

.columns__textCont {
  @include mq("tablet-wide") {
    text-align: justify;
    width: 65%;
    max-width: 60ch;
  }
}
.columns__imgCont {
  @include mq("tablet-wide") {
    width: 30%;
  }
}
.columns__textCont,
.columns__imgCont {
  padding-bottom: 3rem;
  @include mq("tablet-wide") {
    padding-top: 3rem;
  }
}

.columns__img {
  width: 100%;
}
</style>

<script>
export default {
  props: ["blok"],
  computed: {
    img() {
      return this.$options.filters.transformImage(
        this.blok.img,
        "filters:format(webp)"
      );
    }
  }
};
</script>
