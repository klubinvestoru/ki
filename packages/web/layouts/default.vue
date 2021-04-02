<template>
  <div>
    <header class="bg-gray-100 py-6 sticky top-0 z-20">
      <div class="container flex items-center justify-between">
        <nuxt-link to="/">
          <img
            src="/logo.png"
            alt="Klub investorů"
            class="h-8"
          >
        </nuxt-link>

        <nav class="ml-12 flex gap-6 font-semibold text-sm text-gray-600">
          <a href="#">Projekty</a>
          <a href="#">Kariéra</a>
          <a href="#">Partneři</a>
          <a href="#">VIP</a>
          <nuxt-link to="/clanky">Články</nuxt-link>
          <nuxt-link to="/o-nas">O klubu</nuxt-link>
          <a href="#">Kontakt</a>
        </nav>
      </div>
    </header>

    <Nuxt />

    <footer class="mt-32 bg-gray-800 text-gray-200 flex justify-between items-center py-16">
      <div class="container flex justify-between">
        <section>
          <ul>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >Footer</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >Články</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >Články</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >Články</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >Články</nuxt-link>
            </li>
            <li>
              <hr class="my-4 w-32 border-gray-700">
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >Disclaimer</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-gray-100"
              >nějaký GDPR, podmínky, nevím, tohle mě ještě nenapadlo</nuxt-link>
            </li>
          </ul>
        </section>
        <section class="text-gray-300">
          <p>Klub investorů, z.s.
            <br>
            Ondříčkova 2166/14
            <br>
            Vinohrady, 130 00 Praha 3
            <br>
            IČ 265 639 67
          </p>
        </section>
      </div>
    </footer>
  </div>
</template>
