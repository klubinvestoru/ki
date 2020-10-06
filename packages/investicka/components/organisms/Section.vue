<template>
  <section
    class="section"
    :id="blok.id"
    v-editable="blok"
  >
    <!-- <h2>{{ blok.title }}</h2> -->
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin: 3rem 0;
  h2 {
    margin-bottom: 0;
  }
}

.section > * {
  padding: 0 5%;
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>
