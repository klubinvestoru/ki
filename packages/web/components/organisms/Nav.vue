<template>
  <nav
    class="relative text-xl py-6 px-6 md:px-16 uppercase tracking-wide w-full grid gap-6 md:gap-0 md:flex md:flex-row text-green-100"
  >
    <div>
      <a href="#klub" class="mr-6 md:mx-6">Klub</a>
      <!-- <a
      href="#lidi"
      class="mx-6"
    >Lidi</a> -->
      <a href="#qa" class="mx-6">Q&amp;A</a>
      <!-- <a
      href="#sponzori"
      class="mx-6"
    >Sponzoři</a> -->
    </div>
    <div
      class="font-semibold mr-8 md:ml-auto normal-case flex space-x-6 items-center text-green-100 md:text-purple-500 fill-current"
    >
      <a
        href="https://fb.com/klubinvestoru"
        target="_blank"
        class="hover:text-purple-700"
      >
        <client-only>
          <unicon name="facebook" />
        </client-only>
      </a>
      <a
        href="https://m.me/klubinvestoru"
        target="_blank"
        class="hover:text-purple-700"
      >
        <client-only>
          <unicon name="facebook-messenger" />
        </client-only>
      </a>
      <VMenu class="flex items-center justify-center">
        <button>
          <client-only>
            <unicon name="instagram-alt" />
          </client-only>
        </button>

        <template #popper>
          <div class="flex flex-col space-y-4">
            <a
              href="https://www.instagram.com/ki_praha/"
              target="_blank"
              class="hover:text-purple-700"
              >Praha</a
            >
            <a
              href="https://www.instagram.com/klubinvestorubrno/"
              target="_blank"
              class="hover:text-purple-700"
              >Brno</a
            >
            <a
              href="https://www.instagram.com/ki_bratislava/"
              target="_blank"
              class="hover:text-purple-700"
              >Bratislava</a
            >
          </div>
        </template>
      </VMenu>
      <a
        href="//youtube.com/klubinvestorutv"
        target="_blank"
        class="hover:text-purple-700"
      >
        <client-only>
          <unicon name="youtube" />
        </client-only>
      </a>
      <a href="//twitter.com/klubinvestoru" target="_blank">
        <client-only>
          <unicon name="twitter" />
        </client-only>
      </a>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
import VTooltip from "v-tooltip";

Vue.use(VTooltip);
import "v-tooltip/dist/v-tooltip.css";

export default {};
</script>
