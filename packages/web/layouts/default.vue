<template>
  <div>
    <header class="bg-gray-100 py-6 sticky top-0 z-20">
      <div
        class="w-10/12 md:container mx-auto grid gap-4 md:flex items-center justify-between flex-wrap md:flex-no-wrap md:space-x-12"
      >
        <nuxt-link to="/">
          <img src="/logo.png" alt="Klub investorů" class="h-8" />
        </nuxt-link>

        <nav class="flex space-x-6 font-semibold text-sm text-gray-600">
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

    <Nuxt />

    <v-footer />
  </div>
</template>
