<template>
  <section
    :class="['px-6 md:px-24 pt-6 md:pt-40 pb-20 grid md:flex -mt-40 md:-mt-20', reverse ? 'flex-row-reverse' : '']"
    :id="id"
  >
    <div class="row-start-2 md:row-start-auto md:w-1/2">
      <slot />
    </div>
    <div class="hidden md:block md:w-32"></div>
    <div class="md:w-1/2">
      <div class="h-32 md:hidden"></div>
      <h3 class="uppercase text-sm tracking-wider font-bold text-purple-800 mb-1">
        <slot name="subheader" />
      </h3>
      <h2 class="text-4xl font-bold">
        <slot name="title" />
      </h2>
      <div class="mt-4">
        <slot name="text" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
    reverse: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
