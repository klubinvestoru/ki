<template>
  <div class="grid gap-32">
    <component
      v-for="(item, key) in content.Content"
      :key="key"
      :is="getComponentName(item.__component)"
      :content="item"
    />

    <section class="container mx-auto">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Kde nás najdete
      </h3>
      <div class="select-none grid grid-cols-3 gap-4 justify-center p-8 max-w-5xl mx-auto">
        <a
          href="#"
          class="flex flex-col items-center"
        >
          <div class="px-8">
            <img
              src="https://kongres-magazine.eu/wp-content/uploads/2017/07/Subventions-Prague-Charles-Bridge.jpg"
              alt=""
              class="shadow-2xl rounded-lg overflow-hidden"
            >
          </div>
          <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">Praha
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center"
        >
          <div class="px-8">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3W6du7-bXiuKtiN37_GZqwHaHa%26pid%3DApi&f=1"
              alt=""
              class="shadow-2xl rounded-lg overflow-hidden"
            >
          </div>
          <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">Brno
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center"
        >
          <div class="px-8">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/03/ef/99/5a/add-a-caption.jpg"
              alt=""
              class="shadow-2xl rounded-lg overflow-hidden"
            >
          </div>
          <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">
            Bratislava
          </div>
        </a>
      </div>
    </section>

    <section class="container text-green-100">
      <div class="relative mx-auto">

        <div class="bg-green-600 h-full w-full md:w-8/12 shadow-2xl absolute left-0 top-0 rounded-2xl"></div>
        <div class="grid md:flex relative pt-8 md:pt-16 md:pb-24 items-center w-full">
          <div class="z-10 md:w-5/12 mx-8 md:ml-24">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">INVE-STORIES PODCAST</h1>
            <p class="mt-6 text-xl md:text-2xl leading-snug">
              Už Tě nebaví si nové informace ze světa investic, podnikání a businessu hledat v záplavě zdlouhavého
              textu? Jsi spíš posluchač než čtenář? Tak nastraž uši, protože právě pro Tebe pravidelně vychází náš
              vlastní investiční PODCAST!
            </p>
            <div class="flex flex-col items-center">

              <button
                class="rounded-full mt-10 bg-purple-700 text-purple-100 shadow-md py-4 px-6 text-xl uppercase tracking-wider font-bold flex items-center hover:shadow-xl transition-all duration-200"
              >Koukni na podcast
              </button>
            </div>
          </div>
          <div class="w-2/12"></div>
          <div class="w-4/12 -ml-32 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://open.spotify.com/embed-podcast/show/3sD6vQvnSZ8b3OWdX2MNK9"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            <!-- <img src="https://klubinvestoru.com/public/uploads/files/Jan%20H%C3%A1jek.jpg" /> -->
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Události
      </h3>
      <h2 class="text-4xl font-extrabold tracking-tight text-center">Naše příští akce</h2>

      <div class="select-none grid grid-cols-3 gap-4 justify-center p-8 max-w-5xl mx-auto">
        <a
          href="#"
          class="flex flex-col items-center"
        >
          <div class="px-8">
            <img
              src="https://kongres-magazine.eu/wp-content/uploads/2017/07/Subventions-Prague-Charles-Bridge.jpg"
              alt=""
              class="shadow-2xl rounded-lg overflow-hidden"
            >
          </div>
          <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">
            Přednáška v Praze
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center"
        >
          <div class="px-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Liberty_Square%2C_Brno%2C_Czech_Republic_-_panoramio.jpg"
              alt=""
              class="shadow-2xl rounded-lg overflow-hidden"
            >
          </div>
          <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">Nuda v
            Brně
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center"
        >
          <div class="px-8">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/03/ef/99/5a/add-a-caption.jpg"
              alt=""
              class="shadow-2xl rounded-lg overflow-hidden"
            >
          </div>
          <div class="-mt-10 -mx-6 bg-white shadow-lg rounded-2xl w-full font-semibold py-4 text-lg text-center">
            Workshop Bratislavě
          </div>
        </a>
      </div>

    </section>

    <section class="container mx-auto">
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
    </section>

    <section class="py-16 bg-gray-300">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Videa
      </h3>
      <h2 class="text-4xl font-extrabold tracking-tight text-center">Online content</h2>

      <iframe
        width="728"
        height="410"
        class="mx-auto mt-12 rounded-xl shadow-xl"
        src="https://www.youtube.com/embed/YC5DDXF7FBQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="flex justify-center mt-8">
        <a
          href="https://www.youtube.com/channel/UCOm7ceRVGPXVkDJ-WUSW8xA"
          target="_blank"
          class="text-lg font-medium text-red-800"
        >Více videí →</a>
      </div>
    </section>

    <section class="text-green-50 relative">
      <!-- <div class="w-4/12 rounded-2xl overflow-hidden shadow-xl">
          <img src="jachym.jpg" /> -->
      <div class="bg-green-600 shadow-2xl absolute top-16 bottom-16 left-0 right-0"></div>
      <div class="grid md:flex relative items-center w-full container">
        <div class="w-4/12 rounded-2xl overflow-hidden shadow-xl bg-white h-96 px-4 py-6">
          <img
            src="jt.jpg"
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
          <!-- <p class="mt-4 text-xl text-green-100 font-medium">Andrej Chapelau, 2020</p>
          <p class="text-xl font-medium text-green-200">Hrdý nositel nejsložitějšího jména v klubu</p> -->

        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Předsedové
      </h3>
      <div class="px-8">
        <div class="flex flex-wrap -mx-16">
          <v-person photo="jan.jpg">
            <template #name>Jan Šereda</template>
            <template #post>Předseda KI Praha</template>
            <template #quote>Bez páky nezbohatneš.</template>
          </v-person>
          <v-person photo="patrik.jpg">
            <template #name>Patrik Stránsky</template>
            <template #post>Předseda KI Brno</template>
            <template #quote>Aký máš názor na ekonómiu?</template>
          </v-person>
          <v-person photo="aleks.jpg">
            <template #name>Alexej Szládicsek</template>
            <template #post>Předseda KI Bratislava</template>
            <template #quote>Byť šťastný a úspešný neznamená robiť to, čo sa nám páči, ale obľúbiť si to, čo
              robíme.</template>
          </v-person>
        </div>
        <div class="flex justify-end mt-8">
          <a
            href="/partneri"
            class="text-lg font-medium text-green-600"
          >Více o předsedech →</a>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Newsletter
      </h3>
      <div class="w-full bg-green-600 text-green-50 rounded-xl shadow-2xl py-20 px-16">
        <h2 class="text-4xl mb-8 font-extrabold tracking-tight text-center">Buď stále v obraze</h2>
        <p class="max-w-4xl text-center mx-auto text-lg font-medium">Nechceš si nechat ujít aktuální informace jak ze
          světa investic a businessu, tak z dění v našem klubu? Ani bys neměl! My Ti to vše rádi poskytneme, a navíc
          krátce a výstižně. Tak nečekej a přihlas se k odběru ještě dnes!</p>
        <div class="mt-12 flex items-baseline justify-center text-lg">
          <input
            type="text"
            class="w-96 rounded-l-xl py-3 px-4 shadow-xl text-green-900"
            placeholder="E-mailová adresa"
          >
          <button
            class="font-medium bg-purple-600 shadow-xl self-stretch px-8 text-purple-50 rounded-r-xl">Přihlásit</button>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <h3 class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center">
        Partneři
      </h3>
      <div class="flex mt-12 justify-evenly">
        <a
          href="#"
          class="w-32"
        >
          <img
            src="https://klubinvestoru.com/image/4282.jpeg"
            class="w-full"
            alt="J&amp;T Klub investorů"
          >
        </a>
        <a
          href="#"
          class="w-32"
        >
          <img
            src="/jt.jpg"
            class="w-full"
            alt="J&amp;T Klub investorů"
          >
        </a>
        <a
          href="#"
          class="w-32"
        >
          <img
            src="/drfg.jpg"
            class="w-full"
            alt="J&amp;T Klub investorů"
          >
        </a>
      </div>
      <div class="flex justify-end mt-8">
        <a
          href="/partneri"
          class="text-lg font-medium text-green-600"
        >Více o partnerech →</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const content = await $strapi.find("homepage");
    // console.log(content, "aaaa");
    return { content };
  },

  data() {
    return {
      content: {},
    };
  },

  methods: {
    getComponentName(name) {
      return name.replace("chapters.", "v-");
    },
  },
};
</script>
