<template>
  <div class="grid gap-32">
    <component
      v-for="(item, key) in content.content"
      :key="key"
      :is="getComponentName(item.__component)"
      :content="item"
    />
    <!--
    <section class="w-10/12 md:container mx-auto">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Články
      </h3>
      <h2 class="text-4xl font-extrabold tracking-tight text-center">Je libo sneak peak posledních článků?</h2>
      <div class="flex mt-12 justify-center">
        <div class="max-w-sm px-5">
          <a
            href="#"
            class="h-full rounded-lg duration-300 transform hover:-translate-y-4 shadow-lg bg-white overflow-hidden block hover:shadow-xl trans"
          >
            <img
              src="https://www.klubinvestoru.com/image/4262-w400.jpeg"
              width="400"
              class="h-48 w-full object-cover"
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
        </div>
        <div class="max-w-sm px-5">
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
        </div>
        <div class="max-w-sm px-5">
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
      </div>
      <div class="flex justify-end mt-8 mr-28">
        <a
          href="/clanky"
          class="text-lg font-medium text-green-600"
        >Všechny články →</a>
      </div>
    </section> -->

    <!-- <section class="text-green-100 relative">
      <div class="bg-red-500 shadow-2xl top-0 bottom-16 -left-24 -right-24 absolute"></div>
      <div class="grid md:flex items-center w-full relative container">
        <div class="w-4/12 rounded-2xl overflow-hidden shadow-xl">
          <img src="jachym.jpg" />
        </div>
        <div class="z-10 md:w-8/12 mx-8 md:ml-24">
          <p class="mt-6 text-2xl md:text-3xl leading-snug font-medium max-w-2xl">
            Proč nebýt v Klubu investorů, když můžete být v
            Klubu investorů. ;)
          </p>
          <p class="mt-4 text-xl text-green-100 font-medium">Andrej Chapelau, 2020</p>
          <p class="text-xl font-medium text-green-200">Hrdý nositel nejsložitějšího jména v klubu</p>
        </div>
      </div>
    </section>

    <section class="text-green-50 relative">
      <div class="w-4/12 rounded-2xl overflow-hidden shadow-xl">
          <img src="jachym.jpg" />
      <div class="bg-green-600 shadow-2xl absolute top-16 bottom-16 left-0 right-0"></div>
      <div class="grid md:flex relative items-center w-full container">
        <div class="w-4/12 rounded-2xl overflow-hidden shadow-xl bg-white h-96 px-4 py-6">
          <img
            src="jt.png"
            class="px-8"
          />
          <div class="grid grid-cols-2 text-black mt-8">
            <div class="flex flex-col">
              <span class="font-medium text-lg text-center">2</span>
              <span class="text-center">zakladatelé</span>
            </div>
            <div class="flex flex-col">
              <span class="font-medium text-lg text-center">5</span>
              <span class="text-center">tisíc zaměstnanců</span>
            </div>
            <div class="flex flex-col">
              <span class="font-medium text-lg text-center">100</span>
              <span class="text-center">tisíc euro</span>
            </div>
            <div class="flex flex-col">
              <span class="font-medium text-lg text-center">5</span>
              <span class="text-center">nabídek v KI jobs</span>
            </div>
          </div>
          <a
            target="_blank"
            href="https://zazij.klubinvestoru.com"
            class="mt-8 text-center mx-auto rounded-xl bg-green-700 text-green-100 shadow py-2 px-4 text-lg font-medium block items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform "
          >Prozkoumej nabídky →</a>
        </div>
        <div class="z-10 md:w-8/12 mx-8 md:ml-24">
          <p class="mt-6 text-2xl md:text-3xl leading-snug font-medium max-w-2xl">
            Hľadáš si stáž? Podívej se na naši nabídku!
          </p>
          <p class="mt-4 text-xl text-green-100 font-medium">Andrej Chapelau, 2020</p>
          <p class="text-xl font-medium text-green-200">Hrdý nositel nejsložitějšího jména v klubu</p>

  </div>
  </div>
  </section> -->

    <section class="w-10/12 md:container mx-auto">
      <h3
        class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center"
      >
        Předsedové
      </h3>
      <div class="grid gap-8 md:gap-16 md:grid-cols-3 mt-4 md:mt-10">
        <v-person photo="jan.jpg">
          <template #name>Jan Šereda</template>
          <template #post>Předseda KI Praha</template>
          <template #quote>Bez páky nezbohatneš.</template>
        </v-person>
        <v-person photo="aleksandar.jpeg">
          <template #name>Aleksandar Brdar</template>
          <template #post>Předseda KI Brno</template>
          <template #quote>Predaj mi toto pero.</template>
        </v-person>
        <v-person photo="zuzka.jpg">
          <template #name>Zuzana Repková</template>
          <template #post>Předsedkyně KI Bratislava</template>
          <template #quote></template>
        </v-person>
      </div>
      <!-- <div class="flex justify-end mt-8">
          <a
            href="/partneri"
            class="text-lg font-medium text-green-600"
          >Více o předsedech →</a>
        </div> -->
    </section>

    <section class="w-10/12 md:container mx-auto">
      <h3
        class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center"
      >
        Partneři
      </h3>
      <div
        class="grid gap-12 md:flex mt-12 justify-evenly items-center flex-wrap"
      >
        <a href="#" class="w-32">
          <img src="/pwc.png" class="w-full" alt="PwC Klub investorů" />
        </a>
        <a href="#" class="w-32">
          <img src="/jt.png" class="w-full" alt="J&amp;T Klub investorů" />
        </a>
        <a href="#" class="w-32">
          <img
            src="/Pale_Fire_Capital.jfif"
            class="w-full"
            alt="Pale Fire Capital Klub investorů"
          />
        </a>
      </div>
      <div class="flex justify-end mt-8">
        <a href="/partneri" class="text-lg font-medium text-green-600"
          >Více o partnerech →</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const content = await $strapi.find("home");
    return { content };
  },

  data() {
    return {
      content: {}
    };
  },

  methods: {
    getComponentName(name) {
      return name.replace("chapters.", "v-");
    }
  }
};
</script>
