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
      Title: "Consultant - Capital Projects & Infrastructure",
      Content: `<div data-automation-id="jobPostingDescription" class="css-lj8voy"><p><b>Job Description &amp; Summary</b></p>About the Capital projects &amp; Infrastructure Team<br>A career in our Infrastructure and Government practice, within Deals Corporate Finance services, will provide you the opportunity to deliver innovative deal solutions to our clients, providing advice and support, from initiation through to deal completion. In short, we’re a part of helping some of the world’s leading companies across industries originate, create, execute, and realise value from deals. Through data driven insights we help our clients move in the right direction ensuring maximum value for their company.<br><br>Our team helps public sector clients finance, deliver and operate projects in a cost effective and efficient fashion. As part of our team, you’ll help our client with procurement strategies, project structuring, financing and negotiations. We also focus on Debt advisory as we understand the client's financing is aligned with its strategic ambitions.<p></p><p></p><p><b>The Role:</b><br>We are looking for a motivated consultant / fresh graduate to strengthen our Capital Projects &amp;amp; Infrastructure advisory team.</p><p>The team is involved in development and financing of large infrastructure projects, ranging from<span>&nbsp;</span>high-speed rail, airports and highways, through hospitals, social housing and renewable energy to<span>&nbsp;</span>concert halls and sport facilities, across the region of Central and Eastern Europe. However, we<span>&nbsp;</span>spend most of our working hours in Prague.</p><p>From the initial idea to the first kick in the ground we strive to help our clients. We help them to<span>&nbsp;</span>identify the project advantages and risks, elaborate financial models and feasibility studies, set<span>&nbsp;</span>suitable financial structures and create ideal competition strategies, negotiate with banks,<span>&nbsp;</span>investors and other stakeholders to achieve optimal and innovative solutions.</p><p><span>Some of the landmark projects we have recently advised on include: the pilot road PPP project of the D4 highway, Energy from Waste facility extension in the Czech Republic, brand new regional hospital in Romania, smart city district in Brno, transformation of a brownfield area into a mixed <span style="word-break: break-word; word-wrap: break-word; display: inline; text-decoration: inherit; hyphens: auto; -webkit-hyphens:auto; -ms-hyphens: auto; -moz-hyphens: auto;">retail/business/community</span> center etc.</span></p><p>We like the language of numbers. However, we also have the opportunity to look beyond the<span>&nbsp;</span>world of economics and finance through frequent collaboration with lawyers, architects and<span>&nbsp;</span>environmental experts.</p><h2></h2><h2><b>Your responsibilities will be:</b></h2><ul><li><p>Active participation in projects across the CEE region.</p></li><li><p>Market research, <span>data collection</span> and data analysis.</p></li><li><p>Development of financial models. <span>Work with excel spreadsheets assessing the project profitability.</span></p></li><li><p>Support to the project leaders in presentation of the project outcomes, <span>via contribution to client reports and presentations and active participation at client meetings.</span></p></li><li><p>Contribution to winning new clients and engagements, <span>through drafting inputs into proposals to clients</span>.</p></li></ul><p></p><h2><b>Requirements of the role</b></h2><ul><li><p>University degree.</p></li><li><p>Strong communication skills.</p></li><li><p>Reliable and responsible approach to project work.</p></li><li><p>Ability to establish and maintain relationships, teamwork skills.</p></li><li><p>Enthusiastic personality.</p></li><li><p>Analytical skills and judgment.</p></li><li><p>Fluency in Czech and English.</p></li></ul><p></p><h2><b>What are we offering?</b></h2><ul><li><p>Concentrated experience and rapid career growth.</p></li><li><p>Fair wages plus paid overtime.</p></li><li><p>Paid time off 25 days, 3 sick days and 2 extra days off from the company at the end of the year.</p></li><li><p>High-end Ultrabook and iPhone with unlimited data.</p></li><li><p>Benefit program with 30.000 points that you can use for holidays, education, food vouchers, sports (Multisport), health... Simply on what you enjoy.</p></li><li><p>Supporting your development and education: business and digital skills training (e.g. Alteryx, Power BI, Tableau), ongoing training and certifications (such as CFA) and more.</p></li><li><p>We pay for certifications and the time you spend studying them.</p></li><li><p>Opportunity to work in the future at a foreign PwC office, for example in the USA, Canada and there are others in the selection.</p></li><li><p>Extra-work activities and Away Days (team building, ski weekend, etc.).</p></li><li><p>Buddy system and regular feedback on your work, also consultation with a coach with whom you can address your further development and career direction.</p></li></ul><p></p><p>PwC, it is the largest audit team in the Czech Republic, as well as consulting, transaction, tax,<span>&nbsp;</span>legal, technology, data or forensic teams. Find out how easy it is to combine this knowledge when you are in the right place.<br>With us, you will get the opportunity to see how business is done in large companies. We are part<span>&nbsp;</span>of an international network of companies with more than 250,000 colleagues in 158 countries.<br>First, you will complete short online tests where you will find out how you are doing with logic and<span>&nbsp;</span>the ability to understand connections. After successfully passing the tests, you will have an interview and a case study. The last step is an interview with our partner, where you have to<span>&nbsp;</span>convince him of your personal qualities, for example, that you can also enjoy fun at work. We can<span>&nbsp;</span>do it all within a week. It´s a challenge, but you want to work with the best and so do we!</p><p></p><p><span>#LI-JOINPWCCZ</span></p><p></p><p></p></div>`,
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
