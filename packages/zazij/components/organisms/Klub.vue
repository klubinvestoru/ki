<template>
  <VSection id="klub">
    <template>
      <div class="flex flex-col">
        <VImage
          publicId="nabor/brno"
          alt="Klub investorů Brno"
        />
        <VImage
          class="mt-10"
          publicId="nabor/holKI"
          alt="Všechny holky v Klubu investoru (just kiddin')"
        />
      </div>
    </template>
    <template v-slot:subheader>Klub</template>
    <template v-slot:title>Jsme Klub investorů, ale říkáme tomu <em>Ká&#8209;Íčko</em>.</template>
    <template v-slot:text>
      <p>Zajímají tě investice, podnikání a svět businessu? Chceš si vyzkoušet pozvat miliardáře, generálního ředitele
        nebo úspěšného podnikatele na přednášku a pak s ním třeba zajít na pivo? Nebo si vyzkoušet, jak se organizuje
        večírek, spravuje web, baví tě psát, nebo zkusíš vytvořit ten nejvymazlenější post na Instagramu? V tom případě
        je pro tebe KI přímo stvořené.</p>
      <p>Kolik studentů znáš ze současných prváků nebo páťáků? Co takhle spolužáků z ostatních fakult? KI není jenom o
        organizaci přednášek a workshopů, ale hlavně o poznání nových lidí napříč celou školou.</p>
      <p>Zaujal tě snad nějaký předmět ve škole a chtěl by ses dozvědět, jak to funguje v praxi? V KI posledních 13 let
        odstraňujeme bariéru mezi akademickým a praktickým světem, umožňujeme studentům konfrontovat se s profesionály z
        nejrůznějších odvětví a přes klub se dostaneš i k velmi zajímavým nabídkám práce při škole, ale i jako
        absolvent.</p>
      <p>Chtěl by sis vyzkoušet, jaké je to vést svůj vlastní studentský projekt či starat se o svůj vlastní tým? V KI
        jsme vždy otevření novým nápadům a rádi ti poskytneme potřebné zázemí a kontakty na podobně motivované studenty.
      </p>
      <p>Na co tedy čekáš? Napiš nám a přidej se k nám. Poznáš partu skvělých lidí, zlepšíš se v řadě nejen investičních
        dovednostech a nakopneš svojí kariéru.</p>
    </template>
  </VSection>
</template>

<style scoped>
p {
  @apply leading-relaxed text-lg mb-5;
}
</style>
