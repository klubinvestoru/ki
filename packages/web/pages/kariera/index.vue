<template>
  <section class="grid gap-y-6">
    <nuxt-link
      :to="`/kariera/${job.slug}`"
      v-for="job in content"
      :key="job.id"
      class="h-full w-full rounded-lg duration-300 shadow-md bg-white overflow-hidden flex items-center hover:shadow-lg"
    >
      <div class="m-6">
        <h3 class="text-xl font-semibold leading-tight line-clamp-2">{{ job.Title }}</h3>
        <div class="mt-2 text-gray-600">
          <span class="jobs-company">{{ job.Company }}</span>
          <span
            class="jobs-city"
            v-if="job.City"
          >| {{ job.City  }}</span>
          <span
            class="jobs-city"
            v-if="job.Fulltime"
          > | Full-time</span>
          <span
            class="jobs-city"
            v-if="job.Parttime"
          >| Part-time</span>
        </div>
      </div>
      <img
        :src="`https://strapi-core.it.klubinvestoru.com${job.Logo.formats.thumbnail.url}`"
        height="60"
        class="h-16 ml-auto"
        :alt="job.Logo.caption || job.Logo.alternativeText"
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
  layout: "list",
  async fetch() {
    this.content = await this.$strapi.find("jobs");
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
