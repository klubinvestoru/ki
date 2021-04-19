<template>
  <section>
    <div class="max-w-prose mx-auto prose">
      <h2>
        Technology Investment Analyst
      </h2>
      <p>

        Coober Capital a.s. is a young and growing investment company operating in global capital markets. We trade
        stocks
        only on our own account on all major stock exchanges in the USA and the EU. Last year we traded stocks at a
        nominal
        value of 5 billion USD. We are a part of the investment company Impulse Capital a.s.
      </p>
      <p>

        We are looking for a new colleague to join our team in Prague, someone who will bring new inspiration, who is
        interested in searching for new investment opportunities in innovative and technological companies on the
        capital
        markets, which has a great potential for an upside.
      </p>

      <p>

        What will be your task:
      </p>

      <ul>
        <li>

          Searching for new investment opportunities on the stock markets with an orientation towards technology
          companies
          and
        </li>
        <li>

          subsequent preparation of investment recommendations for the company's partners
        </li>
        <li>

          Preparation of in-depth analysis of individual technologies, products and evaluation of investment potential
        </li>
        <li>

          Finding business opportunities and priorities in the longer term that have potential upside at least 5x
        </li>
      </ul>

      <p>
        Who we are looking for:
      </p>

      <ul>
        <li>

          A person who loves technology and wants to understand it more than as a common user
        </li>
        <li>

          Can perceive society and understand the behavior of consumers / customers, not only in terms of product, but
          also
        </li> technological trend, business model, brand, etc.
        <li>

          Understands numbers and can analyze information and data
        </li>

        <li>

          Speaks excellent English
        </li>
        <li>

          Strong academic credentials – Bachelor’s Degree is required
        </li>
      </ul>

      <p>

        We offer:
      </p>

      <ul>
        <li>

          Being at the beginning of a newly emerging investment division for long term investing
        </li>
        <li>

          A unique position in technological investments on the Czech market
        </li>
        <li>

          Active participation in the investment process, in the selection of individual stocks
        </li>
        <li>

          Possibility to be part of the "investment committee", which will decide on the purchase and sale of shares
        </li>
        <li>

          Working with non-traditional data compared to other investment companies
        </li>
        <li>

          Access to Bloomberg, Refinitiv and other analytical platforms
        </li>
      </ul>

      <p>

        Get in touch and become a part of a modern investment project in our investment group. If you're interested,
        send
        us
        your CV with the subject "KI - Technology Investment Analyst" to gordan@coobercapital.com.
      </p>
    </div>

    <div class="w-full bg-white rounded-xl shadow-xl py-12 px-8 mt-8">
      <h2 class="text-3xl mb-4 font-extrabold tracking-tight text-center">Požádej o nabídku</h2>

      <div class="mt-8 grid gap-y-6 text-lg">
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="email"
          >E-mail</label>
          <input
            id="email"
            type="text"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="name"
          >Jméno</label>
          <input
            id="name"
            type="text"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="uni"
          >Škola</label>
          <input
            id="uni"
            type="text"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="yearsxp"
          >Počet let zkušeností</label>
          <input
            id="yearsxp"
            type="number"
            class="rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>
        <div class="grid grid-cols-5 items-center">
          <span class="text-sm col-span-2">Kariérní zájmy</span>
          <span>dodat</span>
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="linkedin"
          >LinkedIn</label>
          <div class="col-span-3 flex">
            <div class="bg-gray-300 rounded-l text-gray-900 pl-3 pr-1 flex items-center shadow-sm">
              <div class="text-sm">linkedin.com/in/</div>
            </div>
            <input
              id="linkedin"
              type="text"
              class="rounded-r w-full border-l-0 border-gray-300 shadow-sm"
            >
          </div>
        </div>
        <div class="grid grid-cols-5 items-center">
          <label
            class="text-sm col-span-2"
            for="cvcl"
          >CV, CL</label>
          <input
            id="cvcl"
            type="file"
            class="text-sm rounded col-span-3 w-full border-gray-300 shadow-sm"
          >
        </div>

        <button
          class="mt-16 mx-auto font-medium bg-purple-600 shadow-xl self-stretch px-6 py-2 text-purple-50 rounded-xl"
        >Podat
          žádost</button>
      </div>
      <div class="mt-2 text-xs font-medium w-72 text-center mx-auto">Vaše žádost poputuje dle našich podmínek (!) přes
        nás přímo
        firmě, do které podáváte žádost.</div>
    </div>
    <a href="/kariera2">kariera2</a>
  </section>

</template>

<script>
export default {
  data() {
    return {
      content: [],
    };
  },
  layout: "list2",
  async fetch() {
    this.content = await this.$strapi.find("articles");
  },
};
</script>
