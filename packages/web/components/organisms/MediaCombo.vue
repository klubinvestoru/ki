<template>
  <section class="w-10/12 md:container mx-auto">
    <div class="grid gap-8 md:gap-0 md:flex relative pt-8 md:pt-16 items-center w-full">
      <div class="md:w-5/12 mr-8">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{{ content.title }}</h2>
        <p class="mt-6 text-xl md:text-xl leading-snug">{{ content.description }}</p>
        <a
          target="_blank"
          :href="content.cta.link"
          class="rounded-xl mt-8 bg-green-700 text-green-100 shadow py-2 px-4 text-lg font-medium inline-flex items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform "
        >{{ content.cta.text }}</a>
      </div>
      <div class="md:ml-auto md:w-6/12 rounded-xl overflow-hidden shadow-lg">
        <img
          class=""
          src="https://res.cloudinary.com/ki/image/upload/q_auto:eco,c_fill,g_custom,w_1280/nabor/prednaska"
        />
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
