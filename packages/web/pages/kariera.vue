<template>
  <section class="grid gap-4 grid-cols-2">
    <v-card
      :to="`/event`"
      class="h-full"
      v-for="n in 5"
      :key="n"
    >
      <div class="-mx-4 -mt-4 mb-4 relative pb-2/3">
        <img
          :src="getSrc()"
          class="rounded-b-none h-full w-full object-cover"
        />
      </div>
      <h3 class="font-bold text-sm">Risk management při Margin tradingu</h3>
      <div class="text-gray-600 text-xs fill-current leading-6">
        <div class="mt-3 inline-flex items-center">
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            class="h-4 mr-2 inline-flex"
          >
            <title>Calendar</title>
            <rect
              fill='none'
              stroke='currentColor'
              stroke-linejoin='round'
              stroke-width='32'
              x='48'
              y='80'
              width='416'
              height='384'
              rx='48'
            />
            <circle
              cx='296'
              cy='232'
              r='24'
            />
            <circle
              cx='376'
              cy='232'
              r='24'
            />
            <circle
              cx='296'
              cy='312'
              r='24'
            />
            <circle
              cx='376'
              cy='312'
              r='24'
            />
            <circle
              cx='136'
              cy='312'
              r='24'
            />
            <circle
              cx='216'
              cy='312'
              r='24'
            />
            <circle
              cx='136'
              cy='392'
              r='24'
            />
            <circle
              cx='216'
              cy='392'
              r='24'
            />
            <circle
              cx='296'
              cy='392'
              r='24'
            />
            <path
              fill='none'
              stroke='currentColor'
              stroke-linejoin='round'
              stroke-width='32'
              stroke-linecap='round'
              d='M128 48v32M384 48v32'
            />
            <path
              fill='none'
              stroke='currentColor'
              stroke-linejoin='round'
              stroke-width='32'
              d='M464 160H48'
            />
          </svg>
          <span>11.12.2019 00:00</span>
        </div>
        <div class="mt-2 inline-flex items-center">
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class="h-4 mr-2 inline-flex"
            viewBox='0 0 512 512'
          >
            <title>Map</title>
            <path
              d='M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='32'
            />
          </svg>
          <span>nám. Winstona Churchilla 1938/4, Praha</span>
        </div>
      </div>
    </v-card>
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
        "https://klubinvestoru.com/image/4205-w480-h480.jpeg",
        "https://klubinvestoru.com/image/4206-w480-h480.jpeg",
        "https://klubinvestoru.com/image/4207-w480-h480.jpeg",
        "https://klubinvestoru.com/image/4208-w480-h480.jpeg",
      ];

      return items[Math.floor(Math.random() * items.length)];
    },
  },
};
</script>
