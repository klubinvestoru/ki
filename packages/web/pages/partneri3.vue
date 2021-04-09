<template>
  <section class="text-lg max-w-prose mx-auto mb-6 prose">
    <img
      src="/jt.jpg"
      alt="J&amp;T Klub investorů"
      class="h-16"
    >
    <h2>J&amp;T finanční skupina</h2>
    <p>J&amp;T finanční skupina je slovenská investiční společnost, založená v roce 1995. V oblasti investic se zaměřuje
      na
      financování společností (holdingů) investujících do energetických a průmyslových aktiv, médií, real estatu,
      turismu a hotelových aktiv. Mimo to poskytuje komplexní služby spojené s privátním bankovnictvím, správou majetku
      privátních klientů a institucí, investičním bankovnictvím a obchodování s cennými papíry. Své služby rozvíjí
      především na trzích České a Slovenské republiky, ale je přítomna i na trzích Ruské federace a v Karibské oblasti.
    </p>
    <div class="flex items-baseline">
      <img
        src="/jt.jpg"
        alt="J&amp;T Klub investorů"
        class="w-16 mr-8"
      >
      <div>
        <h2>J&amp;T finanční skupina</h2>
        <p>J&amp;T finanční skupina je slovenská investiční společnost, založená v roce 1995. V oblasti investic se
          zaměřuje
          na
          financování společností (holdingů) investujících do energetických a průmyslových aktiv, médií, real estatu,
          turismu a hotelových aktiv. Mimo to poskytuje komplexní služby spojené s privátním bankovnictvím, správou
          majetku
          privátních klientů a institucí, investičním bankovnictvím a obchodování s cennými papíry. Své služby rozvíjí
          především na trzích České a Slovenské republiky, ale je přítomna i na trzích Ruské federace a v Karibské
          oblasti.
        </p>
      </div>
    </div>
    <h2>PWC</h2>
    <p>PwC, to je největší auditní tým v České republice, právo, daně, poradenství i technologické, datové nebo
      forenzní
      týmy. Zjisti i ty, jak snadno se dají tyto znalosti spojovat, když jsi na správném místě. U nás získáš možnost
      nahlédnout do toho, jak se dělá byznys ve velkých firmách. Jsme součástí mezinárodní sítě firem s více než 250
      tisíci kolegů ve 158 zemích světa. Pokud ti nechybí ambice a chuť učit se, pošli nám své CV a přidej se k nám.
    </p>
    <img
      src="/drfg.jpg"
      alt="J&amp;T Klub investorů"
      class="h-16"
    >
    <h2>DRFG</h2>
    <p>DRFG je investiční skupina založená v roce 2011. Mezi hlavní oblasti jejího zájmu patří investice do nemovitostí,
      telekomunikací a finančních služeb. Oblast nemovitostí představuje největší část aktiv celé skupiny. Její
      portfolio zahrnuje desítky retail parků, obchodních center a také jednotlivých objektů v České republice, skupina
      proniká také na pole developerských aktivit. V telekomunikacích se soustředí výhradně na svou strategickou
      investici, společnost Suntel Group, která na trhu působí již více než 20 let. DRFG působí v několika evropských
      zemích, mezi nimi například ve Švýcarsku, Německu nebo třeba Polsku.</p>
  </section>

</template>

<script>
export default {
  data() {
    return {
      content: [],
    };
  },
  async fetch() {
    this.content = await this.$strapi.find("articles");
  },
};
</script>
