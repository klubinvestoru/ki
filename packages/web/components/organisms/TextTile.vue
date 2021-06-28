<template>
  <section class="w-10/12 md:container mx-auto">
    <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
      {{ content.subtitle }}
    </h3>
    <div class="w-full bg-green-600 text-green-100 rounded-xl shadow-2xl py-20 px-16">
      <h2 class="text-4xl mb-8 font-extrabold tracking-tight text-center">{{ content.title }}</h2>
      <p class="max-w-4xl text-center mx-auto text-lg font-medium">{{ content.text }}</p>
      <div
        class="mt-12 flex items-baseline justify-center text-lg"
        v-if="content.newsletter !== null"
      >
        <input
          type="text"
          class="w-96 rounded-l-xl py-3 px-4 shadow-xl text-green-900"
          :placeholder="content.newsletter.placeholder"
        >
        <button
          class="font-medium bg-purple-600 shadow-xl self-stretch px-8 text-purple-50 rounded-r-xl">{{ content.newsletter.subscribe }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
};
</script>
