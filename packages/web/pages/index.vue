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
