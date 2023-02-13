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
      Title: "Consultant in Forensic Services team",
      Content: `<div data-automation-id="jobPostingDescription" class="css-lj8voy"><p><b>Job Description &amp; Summary</b></p>About the Forensic Services Team<br>We are looking for a motivated Consultant with 1-2 years of experience to join our Forensic team. We deliver financial, economic and business advice to clients involved in disputes or those in need of corporate investigations. A career in our Forensics Services practice will provide you with an opportunity to help our clients understand their corporate vulnerabilities and develop solutions to manage the risks involved. We prevent, respond to and remediate a wide range of business threats, risks and complex issues.<br><br>As part of our team, you'll help investigate issues such as financial reporting fraud, whistleblower allegations, asset misappropriation, regulatory violations, and corporate irregularities. You’ll help calculate damages in litigation support projects and international disputes. The Czech forensic practice is a dispute advisory Center of excellence, which means that you will be involved in preparation of quantum expert reports concerning various industries across the EMEA region.<p></p><p></p><h2>Job description &amp; summary</h2><ul><li>Proactively assist with and gain experience from diverse projects, while reporting to Managers</li><li>Perform project related fieldwork and research including background searches on companies and individuals</li><li>Review corporate policies and procedures</li><li>Analyse financial data and other documents</li><li>Review complex spreadsheets for business valuation</li></ul><p></p><h2>Requirements of the role</h2><ul><li>Completed bachelor degree</li><li>Economical or law education background is advantageous, but not a must</li><li>1-2 years of experience <span>is advantageous, but not a must </span></li><li>Valuation or accounting knowledge is a plus</li><li><span>Fluency in English and working knowledge in</span> <span>Czech / Slovak and Russian</span> <span>language is ideal</span> <span> </span></li><li>Good communication skills</li><li>Computer skills (Working knowledge of Word, Excel, PowerPoint)</li><li>Teamwork spirit and ability to work under tight deadlines, flexibility</li><li>Out-of-box thinking, analytical skills and judgment</li><li>Attention to detail</li><li><span>Flexibility and willingness to travel, if required</span><b><span> </span></b></li></ul><p></p><h2>What are we offering?</h2><ul><li>Concentrated experience and rapid career growth. It may sound like a platitude, but it really is.</li><li>Fair wages plus paid overtime.</li><li>Paid time off 25 days, 3 sick days and 2 extra days off from the company at the end of the year.</li><li>High-end Ultrabook and iPhone with unlimited data.</li><li>Benefit program with 30.000 points that you can use for holidays, education, food vouchers, sports (Multisport), health... Simply on what you enjoy.</li><li>Supporting your development and education: business and digital skills training (e.g. Alteryx, Power BI, Tableau), ongoing training and certifications and more. We pay for certifications and the time you spend studying them.</li><li>Opportunity to work in the future at a foreign PwC office, for example in the USA, Canada and there are others in the selection.</li><li>Extra-work activities and Away Days (team building, ski weekend, etc.).</li><li>Buddy system and regular feedback on your work, also consultation with a coach with whom you can address your further development and career direction.</li></ul><p><br>PwC is the largest audit team in the Czech Republic, law, tax, consulting and technology, data or forensic teams. Find out how easy it is to combine this knowledge when you're in the right place.</p><p>With us, you will get the opportunity to see how business is done in large companies. We are part of an international network of companies with more than 250,000 colleagues in 158 countries.</p><p></p><p>First, you will complete short online tests where you will find out how you are doing with logic and the ability to understand connections. After successfully passing the tests, you will have an interview and a case study. The last step is an interview with our partner, where you discuss more detailed information about the position.</p><p></p><p><span>#LI-JOINPWCCZ</span></p><p></p><p></p><p></p></div>`,
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
