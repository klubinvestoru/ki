<template>
  <div class="partners">
    <h3
      v-if="blok.type"
      class="partners__type"
    >
      {{ blok.type }}
    </h3>
    <div class="partners__container">
      <component
        :key="blok._uid"
        v-for="blok in blok.partner"
        :blok="blok"
        :is="blok.component | dashify"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.partners__type {
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
}

.partners__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @include mq("tablet-wide") {
    flex-direction: row;
  }
}
</style>

<script>
import VSectionPartnersPartner from "@/components/atoms/SectionPartnersPartner";

export default {
  props: ["blok"],
  components: { VSectionPartnersPartner }
};
</script>

