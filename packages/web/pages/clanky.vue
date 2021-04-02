<template>
  <div class="grid gap-32">

    <section>
      <div class="grid gap-12 justify-center">
        <a
          href="#"
          class="h-full rounded-lg duration-300 transform hover:-translate-y-4 shadow-lg bg-white overflow-hidden flex hover:shadow-xl trans"
        >
          <img
            src="https://www.klubinvestoru.com/image/4262-w400.jpeg"
            width="200"
            class="h-full object-cover"
            alt="sample image"
          >
          <div class="m-6">
            <h3 class="text-xl font-semibold leading-tight line-clamp-2">Česká investiční konference opět představí
              reálné akciové
              tipy českých a zahraničních investorů</h3>
            <p class="mt-4 text-gray-600">Největší konference o akciích konaná v České republice a označovaná
              účastníky za Český akciový Woodstock se 8. - 10. listopadu uskuteční už po sedmé, opět v hotelu Pyramida
              v Praze.</p>
          </div>
        </a>
        <a
          href="#"
          class="h-full rounded-lg duration-300 transform hover:-translate-y-4 shadow-lg bg-white overflow-hidden flex hover:shadow-xl trans"
        >
          <img
            src="https://www.klubinvestoru.com/image/4262-w400.jpeg"
            width="200"
            class="h-full object-cover"
            alt="sample image"
          >
          <div class="m-6">
            <h3 class="text-xl font-semibold leading-tight line-clamp-2">Česká investiční konference opět představí
              reálné akciové
              tipy českých a zahraničních investorů</h3>
            <p class="mt-4 text-gray-600">Největší konference o akciích konaná v České republice a označovaná
              účastníky za Český akciový Woodstock se 8. - 10. listopadu uskuteční už po sedmé, opět v hotelu Pyramida
              v Praze.</p>
          </div>
        </a>
        <a
          href="#"
          class="h-full rounded-lg duration-300 transform hover:-translate-y-4 shadow-lg bg-white overflow-hidden block hover:shadow-xl trans"
        >
          <img
            src="https://www.klubinvestoru.com/image/4260-w400.jpeg"
            width="400"
            class="h-48 w-full object-cover"
            alt="sample image"
          >
          <div class="m-6">
            <h3 class="text-xl font-semibold leading-tight">Tři dividendové akcie jako ochrana před pádem trhu</h3>
            <p class="mt-4 text-gray-600 line-clamp-6">Uplynulé čtyři měsíce lze z hlediska vývoje na
              mezinárodních
              finančních
              trzích charakterizovat opravdu všelijak. Chaos, očistec, peklo na zemi nebo Sodoma a Gomora – to je jen
              několik pojmenování, Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi, quidem vel
              itaque a non doloribus pariatur, corrupti, accusantium nihil quod facilis consequatur odit aut. Suscipit
              quas facere corporis dolorum.
            </p>
          </div>
        </a>
        <a
          href="#"
          class="h-full rounded-lg shadow-lg transform hover:-translate-y-4  bg-white overflow-hidden block hover:shadow-xl duration-300"
        >
          <img
            src="https://www.klubinvestoru.com/image/4254-w400.jpeg"
            width="400"
            class="h-48 w-full object-cover"
            alt="sample image"
          >
          <div class="m-6">
            <h3 class="text-xl font-semibold leading-tight">Jak začít investovat - komentář pro iList</h3>
            <p class="mt-4 text-gray-600">Tuto otázku se pokusil zodpovědět náš člen, Petr Solar, pro první letošní
              číslo magazínu iListu, jehož hlavní téma je přiblížit čtenářům základy světa financí a investic.</p>
          </div>
        </a>
      </div>
    </section>

    <nuxt-link
      v-for="(item, key) in content"
      :key="key"
      :to="`articles/${item.slug_cs}`"
    >
      Link
    </nuxt-link>

    {{ content }}

  </div>
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
    this.content = await this.$strapi.find("articles");
  },
};
</script>
