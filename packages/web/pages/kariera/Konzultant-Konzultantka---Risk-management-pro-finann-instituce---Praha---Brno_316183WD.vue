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
      company: "PwC",
      City: "Praha",
      Fulltime: true,
      Parttime: false,
      Title: "Konzultant/ka - Risk management",
      Content: `<div data-automation-id="jobPostingDescription" class="css-lj8voy"><p><b>Job Description &amp; Summary</b></p>V našem týmů konzultantů se zaměřujeme na spolupráci s zahraničními i českými finančními institucemi, kterým poskytujeme poradenství v oblasti kvalitativního řízení rizik. Naše služby zahrnují například pomoc při hloubkovém auditu banky pod vedením regulátora (tzv. „Asset Quality Review“), poradenství v případě, kdy banky potřebují implementovat nové regulace (aktuálně například v oblasti klimatických rizik) nebo projekty typu „Risk Culture“, při kterých zhodnotíme a optimalizujeme přístup finančních institucí k risk managementu. A mnoho dalšího! Naše nabídka služeb se neustále vyvíjí a reaguje na potřeby našich klientů. <br>Nyní bychom náš tým rádi posílili o nového juniorního kolegu, který by měl zájem se naučit, jak funguje řízení rizik v bankovním sektoru, jak se analyzují klientská data a jak vypadá práce pod vedením zkušených manažerů na projektech pro přední finanční instituce. V časových možnostech je pozice flexibilní, můžeš u nás nastoupit jako Konzultant (full-time) nebo i jako Intern (part-time).<p></p><p></p><p><b><b>Jaká bude</b><b> t</b><b>voje role v týmu</b></b></p><ul><li><p><span>Účast na jednání s klienty a spolupráce se zaměstnanci napříč celou bankovní institucí.</span></p></li><li><p><span>Práce s klientskými daty, jejich analýza a následná vizualizace ve spolupráci s týmem kvantitativního modelování rizik.</span></p></li><li><p><span>Pochopení bankovních regulací a vyhodnocení jejich dopadu na konkrétní finanční instituci.</span></p></li><li><p><span>Zhodnocení tržních, kreditních a operačních rizik, která ovlivňují kapitálovou a likviditní situaci banky.</span></p></li><li><p><span>Interní práce zahrnující přípravu nabídek pro klienty či tvorbu podkladů a nástrojů k rozšíření spektra našich služeb</span>.</p></li></ul><p></p><p><b><b>Jaké znalosti a dovednosti očekáváme?&nbsp;</b></b></p><ul><li><p><span>Jsi absolventem/tkou ekonomického oboru VŠ (nejlépe se zaměřením na finance, matematiku či ekonometrii), nebo studium právě dokončuješ.</span></p></li><li><p><span>Máš komunikační znalost angličtiny (písemnou i ústní).</span></p></li><li><p><span>Máš uživatelskou znalost MS Office, především MS Excel.</span></p></li><li><p><span>Pokud Ti práce s daty není cizí nebo máš chuť se v této oblasti rozvíjet (základy SQL, R, Python), je to výhodou.</span></p></li><li><p><span>Jsi samostatný/á, flexibilní a nevadí Ti za prací občas vycestovat (pracovat budeš projektově a každý projekt může být jinde).&nbsp;</span></p></li><li><p><span>Pokud máš praxi z bankovního sektoru nebo se orientuješ ve finančních produktech, které banky nabízí, budeš mít výhodu. Pokud ne, nemusíš se bát, vše se u nás můžeš naučit.</span></p></li><li><p><span>Nejdůležitější je pro nás snaha, chuť přemýšlet a ochota se neustále vzdělávat.</span></p></li></ul><p></p><p><b><b>Co u nás získáš?</b></b></p><ul><li><p><span>Koncentrovanou zkušenost a rychlý kariérní růst. Může ti to znít jako fráze, ale tak to skutečně je.</span></p></li><li><p><span>Férovou mzdu plus placené přesčasy.</span></p></li><li><p><span>Placené volno 25 dní, 3 sick days a 1 den volna navíc od firmy na konci roku.</span></p></li><li><p><span>Špičkový Ultrabook a iPhone s neomezenými daty.</span></p></li><li><p><span>Benefit program s 30.000 body, který můžeš využít na dovolenou, vzdělávání, stravenky, sport (Multisportka), zdraví... Prostě na to, co tě baví.</span></p></li><li><p><span>Podporu tvého </span><a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=nshQrtPKmPQ"><u>rozvoje a vzdělávání</u></a><span>: nabízíme školení na business a digital skills&nbsp; (např. Alteryx, Power BI atd.) a mnoho dalších školení a workshopů pro další rozvoj Tvých osobních a profesních dovedností. Hradíme technické certifikace a čas, který strávíte jejich studiem.</span></p></li></ul><p></p><p><b><span>PwC, to je největší auditní tým v České republice, ale i poradenské týmy, které se zaměřují na strategie, fúze &amp; akvizice, restrukturalizace, finanční poradenství, daně, právo, technologie, data nebo forenzní analýzu. Zjisti, jak snadné je kombinovat tyto znalosti, když jsi na správném místě.</span></b></p><p></p><p><span>#LI-JOINPWCCZ</span></p><p><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/cs/kariera-dnes/ochrana-osobnich-udaju.html"><span>Ochrana osobních údajů pro žadatele o zaměstnání&nbsp;</span></a><span>&nbsp;/&nbsp;</span><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/en/kariera-dnes/ochrana-osobnich-udaju.html"><span>Privacy Statement for Recruitment Applicants&nbsp;</span></a></p><p></p><p></p></div>`,
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
