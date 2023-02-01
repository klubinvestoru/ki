<template>
  <div class="grid gap-32">
    <!-- <component
      v-for="(item, key) in content.content"
      :key="key"
      :is="getComponentName(item.__component)"
      :content="item"
    /> -->

    <v-media-combo :content="cont1" />
    <v-text-tile :content="newsletter" />

    <section class="w-10/12 md:container mx-auto">
      <h3
        class="uppercase text-lg tracking-wider font-bold text-green-800 mb-4 text-center"
      >
        Generální partneři
      </h3>
      <div
        class="grid gap-12 md:flex mt-12 justify-evenly items-center flex-wrap"
      >
        <a href="#" class="w-32"
          ><img src="/pwc.png" alt="PwC Klub investorů" class="w-full"
        /></a>
        <a href="#" class="w-32"
          ><img src="/jt.png" alt="J&amp;T Banka Klub investorů" class="w-full"
        /></a>
        <a href="#" class="w-32"
          ><img
            src="/Pale_Fire_Capital.jfif"
            alt="Pale Fire Capital Klub investorů"
            class="w-full"
        /></a>
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
    // const content = await $strapi.find("home");
    // return { content };
  },

  data() {
    return {
      content: {},

      cont1: {
        title: "Vzdělání. Komunita. Praxe",
        description:
          "Dva státy, tři významná města, více než desetiletá existence a přes padesát aktivních členů se zájmem o svět investic a businessu. Spojením toho všeho vzniká nevyčíslitelná hodnota v podobě pouze jedné unikátní studentské organizace - Klubu investorů.",
        cta: {
          link: "/zazij",
          text: "Chci být členem!"
        }
      },
      newsletter: {
        subtitle: "newsletter",
        title: "Buď stále v obraze!",
        text: "",
        newsletter: {
          subscribe: "Přihlásit",
          placeholder: "E-mailová adresa"
        }
      }
    };
  },

  methods: {
    getComponentName(name) {
      return name.replace("chapters.", "v-");
    }
  }
};
</script>
