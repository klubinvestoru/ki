<template>
  <section class="text-lg max-w-prose mx-auto my-6 prose">
    <h1>

      Technology Investment Analyst
    </h1>
    <p>

      Coober Capital a.s. is a young and growing investment company operating in global capital markets. We trade stocks
      only on our own account on all major stock exchanges in the USA and the EU. Last year we traded stocks at a
      nominal
      value of 5 billion USD. We are a part of the investment company Impulse Capital a.s.
    </p>
    <p>

      We are looking for a new colleague to join our team in Prague, someone who will bring new inspiration, who is
      interested in searching for new investment opportunities in innovative and technological companies on the capital
      markets, which has a great potential for an upside.
    </p>

    <p>

      What will be your task:
    </p>

    <ul>
      <li>

        Searching for new investment opportunities on the stock markets with an orientation towards technology companies
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

      Get in touch and become a part of a modern investment project in our investment group. If you're interested, send
      us
      your CV with the subject "KI - Technology Investment Analyst" to gordan@coobercapital.com.
    </p>

  </section>

</template>

<script>
export default {
  data() {
    return {
      content: [],
    };
  },
  async fetch() {
    this.content = await this.$strapi.find("articles");
  },
};
</script>
