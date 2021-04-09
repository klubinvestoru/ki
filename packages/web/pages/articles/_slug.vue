<template>
  <div>
    <div class="relative py-16 bg-white dark:bg-indigo-400 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <!-- <NuxtLink
            :to="'/categories/' + post.category.slug"
            v-if="post.category"
            class="text-base text-center block leading-6 text-indigo-600 dark:text-black font-semibold tracking-wide uppercase hover:text-indigo-500 transition ease-in-out duration-150"
          >
            {{ post.category.name }}
          </NuxtLink> -->
          <h1
            class="mt-2 mb-4 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ post.title_cs }}
          </h1>
        </div>
        <div
          v-if="post.body"
          class="prose prose-lg dark:text-black mx-auto"
          v-html="$md.render(post.body)"
        ></div>
        <div class="prose prose-lg mx-auto mt-4">
          <Date
            v-if="post.published_at"
            :date="post.published_at"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  async fetch() {
    this.post = (
      await this.$strapi.find(`articles?slug_cs=${this.$route.params.slug}`)
    )[0];
  },
  head() {
    return {
      title: this.post.cs_title,
      meta: [
        // {
        //   hid: "description",
        //   name: "description",
        //   content: this.post.seo_description,
        // },
        {
          hid: "og:title",
          property: "og:title",
          content: this.post.cs_title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.post.filename,
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>
