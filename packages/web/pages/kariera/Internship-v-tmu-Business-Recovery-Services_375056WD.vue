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
      slug: "Internship-v-tmu-Business-Recovery-Services_375056WD",
      id: "e0ceea5cdbe94f908facf4591311266e",
      company: "PwC",
      City: "Praha",
      Fulltime: false,
      Parttime: true,
      Title: "Internship v týmu Business Recovery Services",
      Content: `<b>Job Description &amp; Summary</b></p>Když nastanou problémy, vstupujeme do hry. Ať už náš klient čelí strategické krizi nebo náhlému nedostatku likvidity, vždy přijdeme s nejlepším možným řešením, jak ho opět postavit na nohy a zachovat hodnotu společnosti.<br>Pracujeme přímo u klienta, spolupracujeme s vrcholovým managementem a společně vytváříme efektivní a dlouhodobě udržitelná řešení.<br>Podporujeme klienty napříč odvětvími (např. spotřebitelské zboží a maloobchod, automobilový průmysl, strojírenství, média, atd.).<br>Jsme regionálním centrem excelence a podílíme se na projektech napříč CEE.<br>To je naše práce.<p></p><p></p><p><b><b>Jaká bude</b><b> t</b><b>voje role v týmu</b></b></p><p><span>Budeš pracovat na konkrétním projektu pod vedením zkušenějšího kolegy. Budeš analyzovat klientská data, diskutovat je se zástupci klienta, sestavovat vlastní finanční modely a vyvozovat závěry, které jsou prezentovány klientovi. Na projektech budeš pracovat přímo u klienta. V neposlední řadě se budeš podílet také na přípravě nabídek, ad-hoc analýzách na různá témata, administrativou projektů atd.</span></p><p></p><p><b><b>Jaké znalosti a dovednosti očekáváme?</b></b></p><ul><li><p><span>Excelentní analytické dovednosti spojené s rozvinutými měkkými dovednostmi</span></p></li><li><p><span>Schopnost rychle se učit a rychle se adaptovat</span></p></li><li><p><span>Ukončené bakalářské studium</span></p></li><li><p><span>Vynikající angličtinu a češtinu slovem i písmem</span></p></li><li><p><span>Zkušenosti z oboru a schopnost projektového managementu jsou výhodou</span></p></li></ul><p></p><h2><b><b>Co u nás získáš?</b></b></h2><ul><li><p><span>kariérní zkušenost v prestižní poradenské společnosti</span></p></li><li><p><span>férové ohodnocení a každoroční navýšení platu</span></p></li><li><p><span>10.000 benefitních bodů na sport, stravenky, do lékárny nebo na kulturní zážitky</span></p></li><li><p><span>počítač a iPhone s neomezenými daty</span></p></li><li><p><span>možnost nastavit si flexibilně svůj pracovní rozvrh. Nabízíme i částečnou práci z domova</span></p></li><li><p><span>pravidelné odborné vzdělávání v různých oblastech – byznysové, technické i soft skills (koukni se na: </span><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/cs/temata/digital-upskilling.html"><u>Digital Upskilling Academy</u></a><span>) a mnoha dalších</span></p></li><li><p><span>podporu zkušenějších kolegů v týmu, včetně buddy systému, abys na to nebyl/a sám/a</span></p></li><li><p><span>network zajímavých lidí a zábavu -&nbsp; každý měsíc se v PwC </span><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/pwccr/events"><u>konají akce</u></a><span> (např. </span><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/163939170375/posts/pfbid032mq3fAsadkcNFBs5RGkRiWazkrkRtmX6tor9ae65bbT783ZCPHrakc1Ksz6hY5Sxl/"><u>Closing Semester party</u></a><span>, Lunch Breaks a další)</span></p></li></ul><p></p><p>PwC, to&nbsp;je největší auditní tým v&nbsp;České republice, ale i&nbsp;poradenské týmy, které se&nbsp;zaměřují na&nbsp;strategie, fúze &amp; akvizice, restrukturalizace, finanční poradenství, daně, právo, technologie, data nebo forenzní analýzu. Zjisti, jak snadné je kombinovat tyto znalosti, když&nbsp;jsi na&nbsp;správném místě.</p><p></p><p>Nejprve vyplníš krátké online testy, kde zjistíš, jak jsi na&nbsp;tom s&nbsp;logikou a&nbsp;schopností pochopit souvislosti. Po&nbsp;úspěšném absolvování testů tě čeká pohovor s&nbsp;Advisory týmem. Posledním krokem je pohovor s&nbsp;naším partnerem, kde ho musíš přesvědčit o&nbsp;svých osobnostních kvalitách, třeba že si v&nbsp;práci dokážeš užít i&nbsp;legraci. Celé to&nbsp;můžeme stihnout i&nbsp;během týdne. Je to&nbsp;výzva, ale chceš pracovat s&nbsp;nejlepšími a&nbsp;my také!</p><p></p><p><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/cs/kariera-dnes/ochrana-osobnich-udaju.html"><span>Ochrana osobních údajů pro žadatele o zaměstnání&nbsp;</span></a><span>&nbsp;/&nbsp;</span><a rel="noopener noreferrer" target="_blank" href="https://www.pwc.com/cz/en/kariera-dnes/ochrana-osobnich-udaju.html"><span>Privacy Statement for Recruitment Applicants&nbsp;</span></a></p><p></p><p><span>#LI-JOINPWCCZ</span></p><p></p><p>`,
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
