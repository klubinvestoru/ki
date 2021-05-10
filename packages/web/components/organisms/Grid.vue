<template>
  <section
    class="container mx-auto"
    :id="content.urlId || _uid"
  >
    <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
      {{ content.subtitle }}
    </h3>
    <h2 class="text-4xl font-extrabold tracking-tight text-center"> {{ content.title }}</h2>
    <div
      class="select-none grid gap-4 justify-center p-8 max-w-5xl mx-auto"
      :class="`grid-cols-${content.maxColumns}`"
    >
      <a
        href="#"
        class="flex flex-col items-center"
        v-for="item in content.simpleGridItem"
        :key="item.id"
      >
        <div class="px-8">
          <img
            src="https://kongres-magazine.eu/wp-content/uploads/2017/07/Subventions-Prague-Charles-Bridge.jpg"
            alt=""
            class="shadow-2xl rounded-lg overflow-hidden"
          >
        </div>
        <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">
          {{ item.title }}
        </div>
      </a>
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
