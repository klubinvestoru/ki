<template>
  <section>
    <h1 class="text-xl sm:text-2xl md:text-3xl mb-6">Partneři</h1>
    <div class="prose mb-16">
      <div class="grid md:flex items-baseline">
        <img
          src="/jt.png"
          alt="J&amp;T Banka Klub investorů"
          class="w-16 md:mr-8"
        />
        <div class="-mt-12 md:mt-0">
          <h2>J&amp;T Banka</h2>
          <p>
            J&T banka je česká privátní a investiční banka, působící na českém
            trhu od roku 1998. Spolu se slovenskou a chorvatskou pobočkou patří
            do skupiny J&T Finance Group SE a patří mezi největší vydavatele
            dluhopisů v České republice. Prostřednictvím J&T IB Capital Markets
            také zprostředkovává prodej dluhopisů významných hráčů v regionu.
            J&T Banka rovněž spravuje řadu fondů s cílem zaručit jejich
            maximální výkon a výnos.
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
