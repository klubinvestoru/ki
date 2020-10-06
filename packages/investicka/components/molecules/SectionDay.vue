<template>
  <div
    class="agendaDay"
    v-editable="blok"
  >
    <h3 class="agendaDay__title">{{ blok.day_name }}</h3>
    <component
      :key="blok._uid"
      v-for="blok in blok.event"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </div>
</template>

<style lang="scss" scoped>
.agendaDay {
  max-width: 50em;
  margin: 0 auto 5rem auto;

  h3 {
    margin-bottom: 0.25em;
    font-weight: 600;
  }
}

.agendaDay__title {
  text-align: center;
  font-size: 2.5rem;
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>
