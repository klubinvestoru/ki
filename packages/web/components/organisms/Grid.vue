<template>
  <section
    class="container mx-auto flex flex-col items-stretch"
    :id="content.urlId || _uid"
  >
    <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
      {{ content.subtitle }}
    </h3>
    <h2 class="text-4xl font-extrabold tracking-tight text-center mb-8"> {{ content.title }}</h2>
    <div
      class="select-none grid gap-24 justify-center w-full"
      :class="`grid-cols-${content.maxColumns}`"
    >
      <a
        href="#"
        class="flex flex-col rounded-2xl justify-center items-center group transition-all "
        v-for="item in content.simpleGridItem"
        :key="item.id"
      >
        <img
          src="https://kongres-magazine.eu/wp-content/uploads/2017/07/Subventions-Prague-Charles-Bridge.jpg"
          alt=""
          class="shadow-lg rounded-lg hover:shadow-xl duration-300"
        >
        <div
          class="-mt-6 font-medium py-3 px-6 text-xl bg-white rounded-lg shadow-lg group-hover:shadow-xl transition duration-300"
        >
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
