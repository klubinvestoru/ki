<template>
  <section class="grid gap-y-6">
    <nuxt-link
      :to="`/kariera/${job.slug}`"
      v-for="job in content"
      :key="job.id"
      class="h-full w-full rounded-lg duration-300 shadow-md bg-white overflow-hidden grid md:flex items-center hover:shadow-lg"
    >
      <div class="m-6">
        <h3 class="text-xl font-semibold leading-tight line-clamp-2">{{ job.Title }}</h3>
        <div class="mt-2 text-gray-600">
          <span class="jobs-company">{{ job.company }}</span>
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
      <div
        class="h-16 mx-auto w-full md:w-auto md:ml-auto flex items-center md:mr-4"
        v-if="job.Logo"
      >
        <img
          :src="`https://strapi-core.it.klubinvestoru.com${getSrc(job.Logo)}`"
          height="64"
          class="max-h-full mx-auto"
          :alt="job.Logo.caption || job.Logo.alternativeText"
        >
      </div>
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
    getSrc(logo) {
      return logo?.formats?.thumbnail?.url || logo.url;
    },
  },
};
</script>
