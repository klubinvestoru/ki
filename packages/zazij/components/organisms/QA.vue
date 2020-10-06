<template>
  <VSection
    id="qa"
    :reverse="true"
  >
    <template>
      <div class="flex flex-col">
        <VImage
          publicId="nabor/prednaska"
          alt="Klub investorů tým"
        />
        <VImage
          class="mt-10"
          publicId="nabor/oslava"
          alt="Klub investorů tým"
        />
        <VImage
          class="mt-10"
          publicId="nabor/investicka"
          alt="Klub investorů Investiční konference"
        />
      </div>
    </template>
    <template v-slot:subheader>Q&amp;A</template>
    <template v-slot:title>Měl bych otázku…</template>
    <template v-slot:text>
      <VQAitem>
        <template v-slot:question>Co vlastně děláte?</template>
        <template v-slot:answer>Pravidelně pořádáme přednášky s hosty z řad profesionálních investorů a podnikatelů, k
          tomu organizujeme menší, zato praktičtější workshopy a píšeme články na téma investic, ekonomiky a
          kapitálových trhu. Pokud se chceš dozvědět více o naších veřejných akcích, zavítej na naše stránky <a
            href="https://klubinvestoru.com"
            target="_blank"
          >www.klubinvestoru.com</a></template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Děláte i něco jiného než přednášky s hosty?</template>
        <template v-slot:answer>Ačkoli jsou přednášky naše nejviditelnější činnost, děláme i řadu dalších věci. Snažíme
          se budovat komunitu lidí se zájmem o investování, podporujeme iniciativy našich členů a zprostředkováváme
          kontakt mezi studenty a pracovními příležitostmi v oblasti financí. Jako úspěšné projekty KI můžeme zmínit
          například Investiční konferenci (letos se odehraje již 11. ročník), workshopy s Honzou Hájkem, stáž 3^3 či náš
          podcast Investories.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Musím mít portfolio, abych se k vám mohl přidat?</template>
        <template v-slot:answer>Rozhodně ne, ale může se stát, že si časem stráveným s námi nějaké vytvoříš. V KI si
          nejvíc ceníme tvého času a chuti. Pokud jí překypuješ, určitě se pro tebe v klubu najde místo.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Podle čeho a jak vybíráte členy?</template>
        <template v-slot:answer>Jsme jedna velká parta, která dělá KI ve svém volném čase. Musíme si teda hlavně sednout
          lidsky a vidět nějakou tvoji motivaci. Motivovaný nováček s chutí se učit a posouvat klub dále je pro nás
          cennější než zkušený matador, který se do chodu klubu zapojí minimálně. Výběrové řízení otevíráme zpravidla
          začátkem semestru, ale napsat nám můžeš kdykoliv během roku.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Kolik máte momentálně členů?</template>
        <template v-slot:answer>Momentálně máme 3 pobočky. V Praze i v Brně míváme po 25 členech, v Bratislavě kolem
          deseti.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Co spojuje jednotlivé pobočky?</template>
        <template v-slot:answer>Kromě loga a názvu to je naše společná iniciativa a nápady. Mimo to společně pořádáme
          každý semestr legendární teambuilding, během kterých dostaneš šanci se nesmazatelně zapsat do dějin
          klubu.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Co děláte ve volném čase?</template>
        <template v-slot:answer>Kromě loga a názvu to je naše společná vize a proaktivita. Řadu věcí si řeší jednotlivé
          pobočky samostatně, ale některé projekty řešíme dohromady jako klub. Členy z ostatních poboček budeš moct
          poznat na našich celoklubových večírcích a také každý semestr pořádáme legendární teambuilding.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Kolik potřebuji šatů/košil?</template>
        <template v-slot:answer>Často někoho znáš uvidíš v košili, halence nebo obleku, ale žádný strach, často jen
          jdeme do práce. Bude ti stačit hezky se obléct na večírky, jsou dva do roka.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Co z toho budu mít?</template>
        <template v-slot:answer>Možná se budeš divit, ale kromě dobrého pocitu a zářezu do CV také spoustu dalších
          užitečných věcí, které většinou oceníš až časem. Své kamarády z KI začneš později v profesionálním životě mít
          jako velmi blízké kontakty (a že jich mezi našimi alumni najdeš opravdu hodně). Nabereš první zkušenosti v
          oboru, řadu věcí, ke kterým by ses normálně dostal až po škole si vyzkoušíš v praxi, a určitě zlepšíš i své
          soft-skills. A když ti to půjde dobře, časem můžeš dostat na starost svůj projekt nebo si vyzkoušet roli šéfa,
          kde se naučíš, jak dobře vést svůj tým.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Jak moc jste korporátní?</template>
        <template v-slot:answer>Nemáme žádný korporátní pravidla, člověk má u nás volnou ruku. Zároveň nejsme úplnej
          punk, takže máme nějaký pomůcky, jak si zjednodušujeme práci, hodně z nich jsme si i sami vyrobili.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>Pilně studuji, a navíc chodím do práce. Je s tím vůbec možné stíhat klubové
          povinnosti?</template>
        <template v-slot:answer>Rozhodně ano! Naprostá většina našich členů zároveň s fungováním v KI pracuje a šedivé
          vlasy či kruhy pod očima nemají. Navíc, v KI děláme vše dobrovolně, takže pokud nebudeš občas stíhat vše
          najednou, stačí se domluvit, vše se dá zařídit 😉.</template>
      </VQAitem>
      <VQAitem>
        <template v-slot:question>S čím přesně můžu pomáhat?</template>
        <template v-slot:answer>Každá pobočka má lehce odlišné uspořádání, základ ale je podobný. Tým přednášek domlouvá hosty a organizuje přednášky a workshopy, tým marketingu je pak propaguje přes všechny naše komunikační kanály, tým eventů organizuje naše neveřejné akce a tým webu se stará o správu našich webovech a IT zaštítění celého klubu. Další pozice pak mohou být pro konkrétní práci nebo projekt. Před pohovorem je určitě dobré, když si sám rozmyslíš, co by tě bavilo. Ne vždy v daném týmu bude volno, ale pokud tě něco nebude bavit, není problém v rámci klubu po dohodě přejít do jiného oddělení.</template>
      </VQAitem>
    </template>
  </VSection>
</template>
