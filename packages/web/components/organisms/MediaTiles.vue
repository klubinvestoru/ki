<template>
  <section class="w-10/12 md:container text-green-100 mx-auto">
    <div class="relative mx-auto">
      <div class="bg-green-600 h-full w-full md:w-8/12 shadow-2xl absolute left-0 top-0 rounded-2xl"></div>
      <div class="grid gap-6 md:flex relative py-8 md:pt-16 md:pb-24 items-center w-full">
        <div class="z-10 md:w-5/12 mx-8 md:ml-24">
          <h1 class="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">{{ content.title }}</h1>
          <p class="mt-3 md:mt-6 text-lg md:text-xl leading-snug">
            {{content.text}}
          </p>
          <!-- <div class="flex flex-col items-center">

              <button
                class="rounded-full mt-10 bg-purple-700 text-purple-100 shadow-md py-4 px-6 text-xl uppercase tracking-wider font-bold flex items-center hover:shadow-xl transition-all duration-200"
              >Koukni na podcast
              </button>
            </div> -->
        </div>
        <div class="md:w-2/12"></div>
        <div
          class="md:w-4/12 mx-8 md:mx-0 md:-ml-32 rounded-xl overflow-hidden shadow-lg"
          v-html="content.embded_link"
        >
          <!-- <img src="https://klubinvestoru.com/public/uploads/files/Jan%20H%C3%A1jek.jpg" /> -->
        </div>
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
