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
      slug: "PwC-Advisory-Graduate-Program_277051WD",
      company: "PwC",
      City: "Praha",
      Fulltime: true,
      Parttime: false,
      Title: "PwC Advisory Graduate Program",
      Content: `<div data-automation-id="jobPostingDescription" class="css-lj8voy"><p><b>Job Description &amp; Summary</b></p><p></p><p></p><h2><b>DVOULETÝ ROTAČNÍ PROGRAM</b></h2><p><b><i>Ideální začátek poznat ty nejzajímavější disciplíny v poradenství. Zkusíš si, jak se řeší </i><i>fúze a akvizice, due diligence, <span style="word-break: break-word; word-wrap: break-word; display: inline; text-decoration: inherit; hyphens: auto; -webkit-hyphens:auto; -ms-hyphens: auto; -moz-hyphens: auto;">restrukturalizace,&nbsp;</span> oceňování či výpočet škody pro právní spory</i><i>. V každém týmu absolvuješ </i><i>několikaměsíční turnus</i><i> a </i><i>po dvou letech</i><i> se rozhodneš, která oblast je ti nejbližší.&nbsp;</i></b></p><p><b>&nbsp;</b></p><p><b><span>Prodej Leo Expresu nebo Datartu, reorganizace Arca Investments, oceňování Eurowagu, expanze EPH do zahraničí nebo financování vlaků pro České dráhy. </span><span>Experti, kteří určují trendy ve svých oborech a </span><b>od kterých dostaneš tu nejlepší školu</b><span>. Inspirativní kolegové, s kterými se budeš rád potkávat nejen v práci. Mezinárodní know-how, které budeš sdílet s našimi zahraničními pobočkami. Právě do tohoto světa poradenství tě rádi přivítáme. </span></b></p><p></p><h2><b><b>Co u nás budeš dělat?</b></b></h2><ul><li><p><span>Analyzovat klientská data - od analýzy udržitelnosti ziskovosti či zákaznického a dodavatelského portfolia až po analýzy obrátkovosti zásob</span></p></li><li><p><span>Sestavovat vlastní finanční modely, např. modelovat cash-flow, řešit způsoby valuace či zajištění kurzových rozdílů</span></p></li><li><p><span>Určovat dlouhodobou tržní strategii klienta na základě průzkumů, analýzy strategických otázek, trendů v daném odvětví a definice cílů/rizik</span></p></li><li><p><span>Pomáhat při vyšetřování&nbsp; finančních podvodů, porušení&nbsp; předpisů, nastavování kontrol a systému <span style="word-break: break-word; word-wrap: break-word; display: inline; text-decoration: inherit; hyphens: auto; -webkit-hyphens:auto; -ms-hyphens: auto; -moz-hyphens: auto;">whistleblowingu&nbsp;</span></span></p></li><li><p><span>A firemní klasiku: připravovat prezentace, nabídky, reporty; udržovat si povědomí o trendech a novinkách; spolupracovat s klienty a poznávat firmy napříč odvětvími</span></p></li></ul><p></p><h2><b><b>Jak to bude probíhat?</b></b></h2><ul><li><p><span>Začneš minimálně 3 měsíční stáží v týmu </span><b>transakčních služeb </b>nebo <b>restrukturalizací</b><span>, ve kterém se rozkoukáš v oblasti podnikových financí a osvojíš si základy due diligence nebo pomůžeš klientům, kteří jsou ve finančních obtížích&nbsp;</span></p></li></ul><p></p><p>​<span>Budeš pokračovat několikaměsíčními (3-6 měsíců) turnusy v týmech:</span></p><ul><li><p><b>Mergers &amp; Acquisitions</b><span>, kde se podíváš na to, jak se prodávají a nakupují firmy</span></p></li><li><p><b>Valuations &amp; Strategy</b><span>, kde si vyzkoušíš oceňování podniků</span></p></li><li><p><b>Public Sector &amp; Infrastructure</b><span><b>,</b> kde si vyzkoušíš financování veřejných projektů nebo přefinancování podnikových půjček</span></p></li><li><p><span>a </span><b>Forensic Centre of Excellence</b><span><b>,</b> v kterém pochopíš, jak se vyšetřují podvody a třeba stanoví škoda pro lokální a mezinárodní soudní spory</span></p></li></ul><p><span>Po absolvování každého turnusu dostaneš osvědčení od příslušného manažera.&nbsp;</span></p><p></p><h2><b><b>Jaké znalosti a dovednosti očekáváme?</b></b></h2><ul><li><p><span>Jsi čerstvý/á absolvent/ka VŠ v ČR či zahraničí nebo dokončuješ školu a hledáš si práci na full time</span></p></li><li><p><span>Vystudoval/a jsi ekonomický obor nebo máš ekonomické uvažování</span></p></li><li><p><span>Toužíš si rozšířit své ekonomické obzory a pronikat za horizont</span></p></li><li><p><span>Baví tě hledat v číslech příběh a ten komplexně odvyprávět</span></p></li><li><p><span>Ovládáš práci s Microsoft Office (primárně Excel, PowerPoint)</span></p></li><li><p><span>Domluvíš se výborně česky a pokročile anglicky na callu i mailem </span></p></li></ul><p></p><h2><b><b>Co u nás získáš?</b></b></h2><ul><li><p>Koncentrovanou zkušenost a&nbsp;rychlý kariérní růst. Může ti to&nbsp;znít jako fráze, ale tak to&nbsp;skutečně je.</p></li><li><p>Férovou mzdu plus placené přesčasy.</p></li><li><p>Placené volno 25 dní, 3 sick days a&nbsp;2 dny volna navíc od firmy na&nbsp;konci roku.</p></li><li><p>Špičkový Ultrabook a&nbsp;iPhone s&nbsp;neomezenými daty.</p></li><li><p>Benefit program s&nbsp;30.000 body, který&nbsp;můžeš využít na&nbsp;dovolenou, vzdělávání, stravenky, sport (Multisportka), zdraví... Prostě na&nbsp;to, co tě baví.</p></li><li><p>Podporu tvého rozvoje a&nbsp;vzdělávání: nabízíme školení na&nbsp;business a&nbsp;digital skills (např. Alteryx, Power BI atd.) a&nbsp;mnoho dalších školení a&nbsp;workshopů pro další rozvoj Tvých osobních a&nbsp;profesních dovedností. Hradíme technické certifikace a&nbsp;čas, který&nbsp;strávíte jejich studiem.</p></li><li><p>Možnost v&nbsp;budoucnu pracovat na&nbsp;zahraniční pobočce PwC třeba v&nbsp;USA, Kanadě a&nbsp;ve výběru jsou i&nbsp;další</p></li><li><p>Mimopracovní aktivity a&nbsp;Away Days (team building, ski weekend apod.).</p></li><li><p>Buddy systém a&nbsp;pravidelná zpětná vazba na&nbsp;tvoji práci, také konzultace s&nbsp;koučem, se&nbsp;kterým můžeš řešit svůj další rozvoj i&nbsp;kariérní směr.</p></li></ul><p><br>PwC, to&nbsp;je největší auditní tým v&nbsp;České republice, ale i&nbsp;poradenské týmy, které se&nbsp;zaměřují na&nbsp;strategie, fúze &amp; akvizice, restrukturalizace, finanční poradenství, daně, právo, technologie, data nebo forenzní analýzu. Zjisti, jak snadné je kombinovat tyto znalosti, když&nbsp;jsi na&nbsp;správném místě.</p><p></p><p>Nejprve vyplníš krátké online testy, kde zjistíš, jak jsi na&nbsp;tom s&nbsp;logikou a&nbsp;schopností pochopit souvislosti. Po&nbsp;úspěšném absolvování testů tě čeká pohovor s&nbsp;Advisory týmem. Posledním krokem je pohovor s&nbsp;naším partnerem, kde ho musíš přesvědčit o&nbsp;svých osobnostních kvalitách, třeba že si v&nbsp;práci dokážeš užít i&nbsp;legraci. Celé to&nbsp;můžeme stihnout i&nbsp;během týdne. Je to&nbsp;výzva, ale chceš pracovat s&nbsp;nejlepšími a&nbsp;my také!</p><p><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/cs/kariera-dnes/ochrana-osobnich-udaju.html"><span>Ochrana osobních údajů pro žadatele o zaměstnání&nbsp;</span></a><span>&nbsp;/&nbsp;</span><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/en/kariera-dnes/ochrana-osobnich-udaju.html"><span>Privacy Statement for Recruitment Applicants&nbsp;</span></a><span>&nbsp;</span></p><p></p><p><span>#LI-JOINPWCCZ</span></p><p></p><p></p></div>`,
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
