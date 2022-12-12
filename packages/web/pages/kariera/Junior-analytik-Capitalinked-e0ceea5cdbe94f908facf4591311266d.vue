<template>
  <section>
    <div class="prose">
      <h2>
        {{ post.Title }}
      </h2>
      <h3>{{ post.company }} {{ post.City && `- ${post.City}` }}</h3>
      <h4 v-if="post.Fulltime">{{ "Full-time" }}</h4>
      <h4 v-if="post.Parttime">{{ "Part-time" }}</h4>

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
      post: {}
    };
  },
  layout: "list",
  async fetch() {
    // this.post = (
    //   await this.$strapi.find(`jobs?slug=${this.$route.params.slug}`)
    // )[0];
    this.post = {
      slug: "Junior-analytik-Capitalinked-e0ceea5cdbe94f908facf4591311266d",
      id: "e0ceea5cdbe94f908facf4591311266d",
      company: "Capitalinked",
      City: "Praha",
      Fulltime: false,
      Parttime: true,
      Title: "Junior analytik",
      Content: `Máš zájem o corporate finance a oceňování podniku? Máš chuť rozvíjet své dovednosti
v praxi? V tom případě hledáme právě Tebe! Nabízíme možnost získat praktické zkušenosti a
v případě úspěšné stáže další spolupráci formou full-time pracovní pozice.

**Náplň práce:**
- Analýza finanční situace podniku, příprava makroanalýzy daného trhu
 - Prezentace výsledků analýz
 - Oceňování firmy, podíl na due-diligence procesu
 - Příprava business plánu
 - Možnost pracovat z domova nebo kanceláře
 - Velmi flexibilní pracovní doba (10-40 hodin týdně)
**Požadavky:**
 - Vystudované minimálně 3 ročníky VŠ s ekonomickým zaměřením
 - Excel na výborné úrovni
 - Výborné analytické schopnosti
 - Zájem o corporate finance a oceňování podniku
 - Zkušenost z oblasti finančních analýz výhodou
 - Angličtina a další světový jazyk na vysoké úrovni porozumění textu
**Co nabízíme:**
 - Kariéru v dynamickém a perspektivním odvětví
 - Získání praktických zkušeností, možnost seberealizace a osobního rozvoje
 - Spolupráce na plný pracovní úvazek v budoucnu
 - Nástup možný ihned
 - Ve zkouškovém období vyjdeme vstříc s pracovní dobou

V případě zájmu prosím zašlete svůj životopis na adresu: [radim.dohnal@capitalinked.com](mailto:radim.dohnal@capitalinked.com) .
Do mailu uveďte, jak jste se o pozici dozvěděli a jaká je vaše motivace se o ni ucházet.
Budeme se těšit!`,
      Logo:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/961a9cbe-0bbc-4a22-8972-6a3fcabb4553/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221212T185006Z&X-Amz-Expires=86400&X-Amz-Signature=95335060acac7c4938488f7a9fcb6e03ab5babb722dd8004386330719edcf071&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
    };
  },
  computed: {
    getContent() {
      return this.$md.render(this.post?.Content || "");
    }
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
          content: this.post.title
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.post.filename
        }
      ]
    };
  },
  fetchOnServer: true
};
</script>
