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
      Title: "Konzultant - Management Consulting",
      Content: `<div data-automation-id="jobPostingDescription" class="css-lj8voy"><p><b>Job Description &amp; Summary</b></p>Tým, který se věnuje management consultingu se zaměřením na zvyšování provozní efektivity a optimalizace nákupu hledá posilu!<p></p><p></p><p>Chceš různorodou práci, která bude zahrnovat cestování, pozorování, propočítávání, zefektivňování, optimalizaci i komunikaci a kravatu i montérky? Tak to jsi tu správně! Do týmu Business Transformation &amp; Operations hledáme nové posily na pozici konzultant.</p><p></p><h2><b><b>Jaká bude</b><b> t</b><b>voje role v týmu</b></b></h2><p></p><p>Tvým úkolem bude pomáhat firmám pomáhat zefektivnit své procesy, a ušetřit jim tak i miliony ročně. Jak to budeš dělat? Jednoduše.</p><p></p><p>Poznáš firmu skrz naskrz, budeš sledovat, jak její procesy fungují (a možná taky nefungují) a hledat místa, kde se dá ušetřit čas, peníze i pracovní síla.</p><p></p><p>Připrav se na dva světy. V prvním budeš konzultantem, který řeší s top managementem, CFOs a CEOs firemní procesy, strategii a pomáháš hledat řešení. Druhým světem je čas strávený v samotných střevech firem, ve výrobě. Helmy i holínky ti nebudou cizí. Chceš-li totiž rozhodovat o firemních procesech, musíš je poznat doslova na vlastní kůži a mluvit s dělníky i mistry. Budeš propojovat firmu odshora dolů, budovat si důvěru, dívat se na firmu jinou optikou a podílet se na projektech, které malými kroky zásadně změní chod velkých společností.</p><p></p><p><b><b>Jaké znalosti a dovednosti očekáváme?</b></b></p><ul><li><p>Logické, strukturované a analytické myšlení;</p></li><li><p>Komunikační dovednosti: potkáváme se s rozdílnými lidmi – jak s operátory strojů, tak s nejužším vedením firmy, které je potřeba umět rozmluvit;</p></li><li><p>Záliba v odvětvích, ve kterých se naši klienti pohybují: automobilový a výrobní průmysl, těžba, metalurgie a logistika;</p></li><li><p>Nadšení z dynamické pracovní náplně: Většinu času trávíme u klientů po celé ČR (80 %) i v zahraničí (20 %), každý projekt je unikátní, stereotyp nečekej;</p></li><li><p>Dobrá znalost češtiny, angličtiny, němčina je velkou výhodou pro projekty s našimi německy mluvícími kolegy;</p></li><li><p>Kreativita při hledání spojitostí a vymýšlení řešení;</p></li><li><p>Chce to zodpovědnost: Pracujeme pro vlastníky firem, které mají tržby sto a více miliónů ročně, takže budeš zodpovídat za komplexní projekty a dělat zásadní rozhodnutí;</p></li><li><p>Vysokoškolský titul (výhodou jsou obory v oblasti byznysu, ekonomiky a technické obory) a základní znalosti světa byznysu.</p></li></ul><p></p><h2><b><b>Co u nás získáš?</b></b></h2><ul><li><p>Koncentrovanou zkušenost a&nbsp;rychlý kariérní růst. Může ti to&nbsp;znít jako fráze, ale tak to&nbsp;skutečně je.</p></li><li><p>Férovou mzdu plus placené přesčasy.</p></li><li><p>Placené volno 25 dní, 3 sick days a&nbsp;2 dny volna navíc od firmy na&nbsp;konci roku.</p></li><li><p>Špičkový Ultrabook a&nbsp;iPhone s&nbsp;neomezenými daty.</p></li><li><p>Benefit program s&nbsp;30.000 body, který&nbsp;můžeš využít na&nbsp;dovolenou, vzdělávání, stravenky, sport (Multisportka), zdraví... Prostě na&nbsp;to, co tě baví.</p></li><li><p>Podporu tvého rozvoje a&nbsp;vzdělávání: nabízíme školení na&nbsp;business a&nbsp;digital skills (např. Alteryx, Power BI atd.) a&nbsp;mnoho dalších školení a&nbsp;workshopů pro další rozvoj Tvých osobních a&nbsp;profesních dovedností. Hradíme technické certifikace a&nbsp;čas, který&nbsp;strávíte jejich studiem.</p></li><li><p>Možnost v&nbsp;budoucnu pracovat na&nbsp;zahraniční pobočce PwC třeba v&nbsp;USA, Kanadě a&nbsp;ve výběru jsou i&nbsp;další.</p></li><li><p>Mimopracovní aktivity a&nbsp;Away Days (team building, ski weekend apod.).</p></li><li><p>Buddy systém a&nbsp;pravidelná zpětná vazba na&nbsp;tvoji práci, také konzultace s&nbsp;koučem, se&nbsp;kterým můžeš řešit svůj další rozvoj i&nbsp;kariérní směr.</p></li></ul><p></p><p>PwC, to&nbsp;je největší auditní tým v&nbsp;České republice, ale i&nbsp;poradenské týmy, které se&nbsp;zaměřují na&nbsp;strategie, fúze &amp; akvizice, restrukturalizace, finanční poradenství, daně, právo, technologie, data nebo forenzní analýzu. Zjisti, jak snadné je kombinovat tyto znalosti, když&nbsp;jsi na&nbsp;správném místě.</p><p></p><p>Nejprve vyplníš krátké online testy, kde zjistíš, jak jsi na&nbsp;tom s&nbsp;logikou a&nbsp;schopností pochopit souvislosti. Po&nbsp;úspěšném absolvování testů tě čeká pohovor s&nbsp;Advisory týmem. Posledním krokem je pohovor s&nbsp;naším partnerem, kde ho musíš přesvědčit o&nbsp;svých osobnostních kvalitách, třeba že si v&nbsp;práci dokážeš užít i&nbsp;legraci. Celé to&nbsp;můžeme stihnout i&nbsp;během týdne. Je to&nbsp;výzva, ale chceš pracovat s&nbsp;nejlepšími a&nbsp;my také!</p><p></p><p><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/cs/kariera-dnes/ochrana-osobnich-udaju.html"><span>Ochrana osobních údajů pro žadatele o zaměstnání&nbsp;</span></a><span>&nbsp;/&nbsp;</span><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/en/kariera-dnes/ochrana-osobnich-udaju.html"><span>Privacy Statement for Recruitment Applicants&nbsp;</span></a></p><p></p><p><span>#LI-JOINPWCCZ</span></p><p></p><p></p></div>`,
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
