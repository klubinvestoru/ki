<template>
  <section class="py-16 bg-gray-300">
    <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
      {{ content.subtitle }}
    </h3>
    <h2 class="text-4xl font-extrabold tracking-tight text-center">{{ content.title }}</h2>

    <iframe
      width="728"
      height="410"
      class="mx-auto mt-12 rounded-xl shadow-xl"
      src="https://www.youtube.com/embed/YC5DDXF7FBQ"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="flex justify-center mt-8">
      <a
        href="https://www.youtube.com/channel/UCOm7ceRVGPXVkDJ-WUSW8xA"
        target="_blank"
        class="text-lg font-medium text-red-800"
      >Více videí →</a>
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
