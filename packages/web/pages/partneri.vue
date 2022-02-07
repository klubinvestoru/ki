<template>
  <section>
    <h1 class="text-xl sm:text-2xl md:text-3xl mb-6">Partneři</h1>
    <div class="prose mb-16">
      <div class="grid md:flex items-baseline">
        <img src="/jt.png" alt="J&amp;T Klub investorů" class="w-16 md:mr-8" />
        <div class="-mt-12 md:mt-0">
          <h2>J&amp;T finanční skupina</h2>
          <p>
            J&amp;T finanční skupina je slovenská investiční společnost,
            založená v roce 1995. V oblasti investic se zaměřuje na financování
            společností (holdingů) investujících do energetických a průmyslových
            aktiv, médií, real estatu, turismu a hotelových aktiv. Mimo to
            poskytuje komplexní služby spojené s privátním bankovnictvím,
            správou majetku privátních klientů a institucí, investičním
            bankovnictvím a obchodování s cennými papíry. Své služby rozvíjí
            především na trzích České a Slovenské republiky, ale je přítomna i
            na trzích Ruské federace a v Karibské oblasti.
          </p>
        </div>
      </div>
      <div class="grid md:flex items-baseline">
        <img src="/pwc.png" alt="PwC Klub investorů" class="w-16 md:mr-8" />
        <div class="-mt-12 md:mt-0">
          <h2>PWC</h2>
          <p>
            PwC, to je největší auditní tým v České republice, právo, daně,
            poradenství i technologické, datové nebo forenzní týmy. Zjisti i ty,
            jak snadno se dají tyto znalosti spojovat, když jsi na správném
            místě. U nás získáš možnost nahlédnout do toho, jak se dělá byznys
            ve velkých firmách. Jsme součástí mezinárodní sítě firem s více než
            250 tisíci kolegů ve 158 zemích světa. Pokud ti nechybí ambice a
            chuť učit se, pošli nám své CV a přidej se k nám.
          </p>
        </div>
      </div>
      <div class="grid md:flex items-baseline">
        <img
          src="/Pale_Fire_Capital.jfif"
          alt="Pale fire Capital Klub investorů"
          class="w-16 md:mr-8"
        />
        <div class="-mt-12 md:mt-0">
          <h2>Pale Fire Capital</h2>
          <p>
            Jsme česká private equity skupina podporující technologické inovace.
            Vznikli jsme v roce 2015 a od té doby vytváříme se zakladateli pevná
            partnerství. Nejsme investoři, co sedí opodál, aktivně pomáháme s
            expanzí a překonáváním bariér a stropů, na které rostoucí firmy
            narážejí. Naším cílem je budovat silné firmy na pevných základech a
            mít velmi dobře diverzifikované portfolio. Do našeho portfolia patří
            Aukro, Favi, Rouvy, Mubi, Semantic Visions, Munipolis, Agdata a
            další. Je pro nás důležitý také společensky prospěšný přesah našich
            aktivit, a tak 2 % hodnoty firem ročně alokujeme na neziskové
            projekty s důrazem na systémovou změnu a vzdělávání.
          </p>
        </div>
      </div>
    </div>
    <h2>Mediální partneři</h2>
    <div class="prose">
      <div class="grid md:flex items-baseline">
        <a
          href="https://www.studiovokal.cz"
          target="_blank"
          class="md:mr-8 flex flex-shrink-0"
        >
          <img
            src="/vokal.png"
            alt="Studio Vokál Klub investorů"
            class="w-16"
          />
        </a>
        <div class="-mt-12 md:mt-0">
          <h2>Studio Vokál</h2>
          <p>
            Jsme podcastové studio v centru Brna. Sdružujeme mladou komunitu
            podcasterů. Zajistíme tvorbu, editaci a následný marketing tvého
            podcastu!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: []
    };
  },
  layout: "list",
  async fetch() {
    this.content = await this.$strapi.find("articles");
  }
};
</script>
