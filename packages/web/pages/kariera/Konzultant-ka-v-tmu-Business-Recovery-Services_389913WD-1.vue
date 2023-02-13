<template>
  <section>
    <div class="prose">
      <h2>
        {{ post.Title }}
      </h2>
      <h3>{{ post.company }} {{ post.City && `- ${post.City}` }}</h3>
      <h4 v-if="post.Fulltime">{{ "Full-time" }}</h4>
      <h4 v-if="post.Parttime">{{ "Part-time" }}</h4>

      <div v-html="post.Content"></div>
    </div>
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
      slug: "Konzultant-ka-v-tmu-Business-Recovery-Services_389913WD-1",
      id: "e0ceea5cdbe94f908facf4591311266f",
      company: "PwC",
      City: "Praha",
      Fulltime: true,
      Parttime: false,
      Title: "Konzultant/ka v týmu Business Recovery Services",
      Content: `<div data-automation-id="jobPostingDescription" class="css-lj8voy"><p><b>Job Description &amp; Summary</b></p>O Business Recovery Services Týmu<br>Když nastanou problémy, vstupujeme do hry. Ať už náš klient čelí strategické krizi nebo náhlé krizi likvidity, vždy přijdeme s nejlepším možným řešením, jak ho opět postavit na nohy a zachovat hodnotu společnosti.<br>Pracujeme přímo u klienta, spolupracujeme s vrcholovým managementem a společně vytváříme efektivní a dlouhodobě udržitelná řešení. Podporujeme klienty napříč odvětvími (např. spotřebitelské zboží a maloobchod, automobilový průmysl, strojírenství, média, atd.). Jsme regionálním centrem excelence a podílíme se na projektech napříč CEE. To je naše práce.<p></p><p></p><h2>Jaká bude tvoje role v týmu?</h2><p>Budeš pracovat na konkrétním projektu pod vedením manažera nebo senior konzultanta. Budeš analyzovat klientská data, diskutovat je se zástupci klienta, sestavovat vlastní finanční modely a vyvozovat závěry, které jsou prezentovány klientovi. Na projektech budeš pracovat přímo u klienta. Dále se budeš zabývat přípravou nabídek, ad-hoc analýzami na různá témata, administrativou projektů atd.</p><p></p><h2><b>Jaké znalosti a dovednosti očekáváme?</b></h2><ul><li>Velmi dobrou úroveň českého/slovenského jazyka i anglického jazyka (další jazyky výhodou).</li><li>Logické a analytické uvažování.</li><li>samostatnost, zodpovědnost a schopnost dotáhnout svěřené úkoly do zdárného konce.</li><li>Schopnost aktivní komunikace.</li><li>Vysokoškolské vzdělání (ukončené nebo těsně před dokončením).</li></ul><p></p><h2><b>Co u nás získáš?</b></h2><ul><li>Koncentrovanou zkušenost a rychlý kariérní růst. Může ti to znít jako fráze, ale tak to skutečně je.</li><li>Férovou mzdu plus placené přesčasy.</li><li>Placené volno 25 dní, 3 sick days a 2 dny volna navíc od firmy na konci roku.</li><li>Špičkový Ultrabook a iPhone s neomezenými daty.</li><li>Benefit program s 30.000 body, který můžeš využít na dovolenou, vzdělávání, stravenky, sport (Multisportka), zdraví... Prostě na to, co tě baví.</li><li>Podporu tvého rozvoje a vzdělávání: nabízíme školení na business a digital skills (např. Alteryx, Power BI atd.) a mnoho dalších školení a workshopů pro další rozvoj Tvých osobních a profesních dovedností. Hradíme technické certifikace a čas, který strávíte jejich studiem.</li><li>Možnost v budoucnu pracovat na zahraniční pobočce PwC třeba v USA, Kanadě a ve výběru jsou i další</li><li>Mimopracovní aktivity a Away Days (team building, ski weekend apod.).</li><li>Buddy systém a pravidelná zpětná vazba na tvoji práci, také konzultace s koučem, se kterým můžeš řešit svůj další rozvoj i kariérní směr.</li></ul><p><br>PwC, to je největší auditní tým v České republice, ale i poradenské týmy, které se zaměřují na strategie, fúze &amp; akvizice, restrukturalizace, finanční poradenství, daně, právo, technologie, data nebo forenzní analýzu. Zjisti, jak snadné je kombinovat tyto znalosti, když jsi na správném místě.</p><p></p><p>Nejprve vyplníš krátké online testy, kde zjistíš, jak jsi na tom s logikou a schopností pochopit souvislosti. Po úspěšném absolvování testů tě čeká pohovor a case study s Business Recovery Services týmem. Posledním krokem je pohovor s naším partnerem, kde ho musíš přesvědčit o svých osobnostních kvalitách, třeba že si v práci dokážeš užít i legraci. Celé to můžeme stihnout i během týdne. Je to výzva, ale chceš pracovat s nejlepšími a my také!</p><p></p><p><span>#LI-JOINPWCCZ</span></p><p></p><p><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/cs/kariera-dnes/ochrana-osobnich-udaju.html"><span>Ochrana osobních údajů pro žadatele o zaměstnání&nbsp;</span></a><span>&nbsp;/&nbsp;</span><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/en/kariera-dnes/ochrana-osobnich-udaju.html"><span>Privacy Statement for Recruitment Applicants&nbsp;</span></a></p><p></p><p></p></div>`,
      Logo: "/pwc.png"
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
