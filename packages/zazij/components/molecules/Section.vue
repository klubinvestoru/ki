<template>
  <section
    :class="['px-24 pt-40 pb-20 flex -mt-20', reverse ? 'flex-row-reverse' : '']"
    :id="id"
  >
    <div class="w-1/2">
      <slot />
    </div>
    <div class="w-32"></div>
    <div class="w-1/2">
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
      required: true
    },
    reverse: {
      default: false,
      type: Boolean
    }
  }
};
</script>
