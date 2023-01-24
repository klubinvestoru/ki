<template>
  <section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <div class="flex items-center justify-between mb-6">
      <h1 class="text-xl sm:text-2xl md:text-3xl">Kariéra</h1>
      <v-button
        class="border-2 px-4 py-1 text-base font-semibold cursor-pointer rounded-full duration-300 shadow-md bg-white flex items-center hover:shadow-lg"
        :class="onlyPwC && 'border-2 text-pwc-orange border-pwc-orange'"
        @click.native="onlyPwC = !onlyPwC"
        >Kariéra v PwC</v-button
      >
    </div>
    <div class="grid gap-y-6">
      <transition-group
        tag="div"
        class="grid gap-y-6"
        enter-active-class="ease-out duration-300 transition-all"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-300 transition-all"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <nuxt-link
          :to="`/kariera/${job.slug}`"
          v-for="job in content"
          :key="job.id"
          class="h-full w-full rounded-lg duration-300 shadow-md bg-white overflow-hidden grid md:flex items-center hover:shadow-lg"
          :class="
            job.top && job.company === 'PwC' && 'border-l-8 border-pwc-orange'
          "
        >
          <div class="m-6">
            <h3 class="text-xl font-semibold leading-tight line-clamp-2">
              {{ job.Title }}
            </h3>
            <div class="mt-2 text-gray-600">
              <span class="jobs-company">{{ job.company }}</span>
              <span class="jobs-city" v-if="job.City">| {{ job.City }}</span>
              <span class="jobs-city" v-if="job.Fulltime"> | Full-time</span>
              <span class="jobs-city" v-if="job.Parttime">| Part-time</span>
            </div>
          </div>
          <div
            class="h-16 mx-auto w-full md:w-auto md:ml-auto flex items-center md:mr-4"
            v-if="job.Logo"
          >
            <!-- <img
              :src="
                `https://strapi-core.it.klubinvestoru.com${getSrc(job.Logo)}`
              "
              height="64"
              class="max-h-full mx-auto"
              :alt="job.Logo.caption || job.Logo.alternativeText"
            /> -->
            <img
              :src="job.Logo"
              height="64"
              class="max-h-full mx-auto"
              :alt="job.Title"
            />
          </div>
        </nuxt-link>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      response: [],
      onlyPwC: false
    };
  },
  layout: "list",
  async fetch() {
    // const response = await this.$strapi.find("jobs");
    const response = [
      {
        slug: "Internship-v-tmu-Business-Recovery-Services_375056WD",
        id: "e0ceea5cdbe94f908facf4591311266e",
        company: "PwC",
        City: "Praha",
        Fulltime: false,
        Parttime: true,
        Title: "Internship v týmu Business Recovery Services",
        Logo: "/pwc.png"
      },
      {
        slug: "Junior-analytik-Capitalinked-e0ceea5cdbe94f908facf4591311266d",
        id: "e0ceea5cdbe94f908facf4591311266d",
        company: "Capitalinked",
        City: "Praha",
        Fulltime: false,
        Parttime: true,
        Title: "Junior analytik",
        Logo:
          "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/961a9cbe-0bbc-4a22-8972-6a3fcabb4553/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T185006Z&X-Amz-Expires=86400&X-Amz-Signature=95335060acac7c4938488f7a9fcb6e03ab5babb722dd8004386330719edcf071&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
      }
    ];
    this.response = response.reverse().sort((a, b) => {
      return b.top - a.top;
    });
  },
  computed: {
    content() {
      if (this.onlyPwC) {
        return this.response.filter(job => job.company === "PwC");
      }
      return this.response;
    }
  },
  methods: {
    getSrc(logo) {
      return logo?.formats?.thumbnail?.url || logo.url;
    }
  }
};
</script>
