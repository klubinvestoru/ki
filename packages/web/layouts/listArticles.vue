<template>
  <div>
    <header class="bg-gray-100 py-6 sticky top-0 z-20">
      <div
        class="container px-4 md:mx-auto md:px-8 grid gap-4 md:flex items-center justify-between flex-wrap md:flex-no-wrap md:space-x-12"
      >
        <nuxt-link to="/">
          <img
            src="/logo.png"
            alt="Klub investorů"
            class="h-8"
          >
        </nuxt-link>

        <nav class="flex gap-6 font-semibold text-sm text-gray-600">
          <!-- <nuxt-link to="/projekty">Projekty</nuxt-link> -->
          <nuxt-link to="/zazij">Členství</nuxt-link>
          <nuxt-link to="/kariera">Kariéra</nuxt-link>
          <nuxt-link to="/partneri">Partneři</nuxt-link>
          <!-- <nuxt-link to="/vip">VIP</nuxt-link> -->
          <!-- <nuxt-link to="/clanky">Články</nuxt-link> -->
          <!-- <nuxt-link to="/o-nas">O klubu</nuxt-link> -->
          <!-- <nuxt-link to="/kontakt">Kontakt</nuxt-link> -->
        </nav>
      </div>
    </header>

    <div class="container grid grid-cols-3 gap-12 pt-8 md:pt-16 mx-auto">
      <div class="col-span-2">
        <Nuxt />
      </div>
      <div class="col-span-1">
        <!-- <div class="bg-gray-700 text-gray-100 rounded-md py-8 px-6 flex flex-col shadow-xl">
          <h3 class="text-3xl">KI Newsletta</h3>
          <p class="mt-3 font-medium leading-5">Nepravidelná nálož - přednášky, události, pracovní pozice a jiné.</p>
          <input
            type="text"
            placeholder="E-mailová adresa"
            class="mt-10 rounded-md border-none py-2 px-3"
          >
          <button class="mt-3 bg-blue-200 text-blue-900 px-4 py-2 rounded">Odebírat</button>
          <span class="mt-4 text-center text-xs font-medium">Žádný spam, slibujeme</span>
        </div> -->
        <!-- edit: -->
        <div class="mt-12">
          <h3>Hlavní partneři Klubu investorů :</h3>

          <div class="grid gap-16 mt-8 w-60 mx-auto">
            <img
              src="/jt.png"
              alt="J&amp;T Klub investorů"
            >
            <img
              src="/pwc.png"
              alt="PwC Klub investorů"
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

        <!-- <div class="mt-16 text-sm">podcast? o klubu? ještě něco?</div> -->
      </div>
    </div>

    <v-footer />
  </div>
</template>
