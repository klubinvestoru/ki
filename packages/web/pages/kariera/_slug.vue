<template>
  <section>
    <div class="max-w-prose mx-auto prose">
      <h2>
        {{ post.Title }}
      </h2>
      <h3>
        {{ post.company }} {{ post.City && `- ${post.City}` }}
      </h3>
      <h4>{{ post.Fulltime && 'Full-time' }}</h4>
      <h4>{{ post.Partime && 'Part-time' }}</h4>

      <div v-html="getContent"></div>
    </div>

    <!-- <div class="w-full bg-white rounded-xl shadow-xl py-12 px-8 mt-8">
      <h2 class="text-3xl mb-4 font-extrabold tracking-tight text-center">Požádej o nabídku</h2>

      <div class="mt-8 grid gap-y-6 text-lg">
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="email"
          >E-mail</label>
          <input
            id="email"
            type="text"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="name"
          >Jméno</label>
          <input
            id="name"
            type="text"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="uni"
          >Škola</label>
          <input
            id="uni"
            type="text"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="yearsxp"
          >Počet let zkušeností</label>
          <input
            id="yearsxp"
            type="number"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <span class="text-sm col-span-2">Kariérní zájmy</span>
          <span>dodat</span>
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="linkedin"
          >LinkedIn</label>
          <div class="col-span-3 flex">
            <div class="bg-gray-300 rounded-l text-gray-900 pl-3 pr-1 flex items-center shadow-sm">
              <div class="text-sm">linkedin.com/in/</div>
            </div>
            <input
              id="linkedin"
              type="text"
              class="rounded-r w-full border-l-0 border-gray-300 shadow-sm"
            >
          </div>
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="cvcl"
          >CV, CL</label>
          <input
            id="cvcl"
            type="file"
            class="text-sm rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>

        <button
          class="mt-16 mx-auto font-medium bg-purple-300 text-purple-900 transition-all hover:bg-purple-400 duration-300 shadow-lg hover:shadow-xl self-stretch px-6 py-2 text-purple-50 rounded-xl"
        >Podat
          žádost</button>
      </div>
      <div class="text-gray-700 mt-3 text-xs font-medium w-72 text-center mx-auto w-56">Vaše žádost poputuje přes nás
        přímo firmě,
        do které
        podáváte žádost.</div>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  layout: "list",
  async fetch() {
    this.post = (
      await this.$strapi.find(`jobs?slug=${this.$route.params.slug}`)
    )[0];
  },
  computed: {
    getContent() {
      return this.$md.render(this.post?.Content || "");
    },
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
          content: this.post.title,
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
