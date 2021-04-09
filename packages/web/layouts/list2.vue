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
          <nuxt-link to="/projekty">Projekty</nuxt-link>
          <nuxt-link to="/kariera">Kariéra</nuxt-link>
          <nuxt-link to="/partneri">Partneři</nuxt-link>
          <nuxt-link to="/vip">VIP</nuxt-link>
          <nuxt-link to="/clanky">Články</nuxt-link>
          <nuxt-link to="/o-nas">O klubu</nuxt-link>
          <nuxt-link to="/kontakt">Kontakt</nuxt-link>
        </nav>
      </div>
    </header>

    <div class="container grid grid-cols-3 gap-12 pt-8">
      <div class="col-span-2">
        <Nuxt />
      </div>
      <div class="col-span-1">
        <div class="bg-gray-700 text-gray-100 rounded-md py-8 px-6 flex flex-col shadow-xl">
          <h3 class="text-3xl">KI Newsletta</h3>
          <p class="mt-3 font-medium leading-5">Nepravidelná nálož - přednášky, události, pracovní pozice a jiné.</p>
          <input
            type="text"
            placeholder="E-mailová adresa"
            class="mt-10 rounded-md border-none py-2 px-3"
          >
          <button class="mt-3 bg-blue-200 text-blue-900 px-4 py-2 rounded">Odebírat</button>
          <span class="mt-4 text-center text-xs font-medium">Žádný spam, slibujeme</span>
        </div>

        <div class="mt-12">
          <h3>Hlavní partneři Klubu investorů (upravit):</h3>

          <div class="grid gap-16 mt-8 w-60 mx-auto">
            <img
              src="/jt.jpg"
              alt="J&amp;T Klub investorů"
            >
            <img
              src="/drfg.jpg"
              alt="J&amp;T Klub investorů"
            >
          </div>

          <nuxt-link
            to="/partneri"
            class="text-sm font-medium block text-right mt-4"
          >Více o našich partnerech →</nuxt-link>
        </div>

        <div class="mt-16 text-sm">podcast? o klubu? ještě něco?</div>
      </div>
    </div>

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
