<template>
  <section class="grid gap-y-6">
    <nuxt-link
      to="/kariera1"
      v-for="n in 5"
      :key="n"
      class="h-full w-full rounded-lg duration-300 shadow-md bg-white overflow-hidden flex items-center hover:shadow-lg"
    >
      <div class="m-6">
        <h3 class="text-xl font-semibold leading-tight line-clamp-2">Technology Investment Analyst
        </h3>
        <div class="mt-2 text-gray-600">
          <span class="jobs-company">Coober Capital</span>
          <span class="jobs-city">| Praha</span>
          <span class="jobs-city"> | </span>
          <span class="jobs-city">Full-time</span>
        </div>
      </div>
      <img
        :src="getSrc()"
        height="60"
        class="h-16 ml-auto"
        alt="sample image"
      >
    </nuxt-link>
  </section>

</template>

<script>
export default {
  data() {
    return {
      content: [],
    };
  },
  layout: "list2",
  async fetch() {
    this.content = await this.$strapi.find("articles");
  },
  methods: {
    getSrc() {
      const items = [
        "https://klubinvestoru.com/image/4285-w300.jpeg",
        "https://klubinvestoru.com/image/4288-w300.jpeg",
        "https://klubinvestoru.com/image/4284-w300.jpeg",
        "https://klubinvestoru.com/image/4283-w300.jpeg",
      ];

      return items[Math.floor(Math.random() * items.length)];
    },
  },
};
</script>
