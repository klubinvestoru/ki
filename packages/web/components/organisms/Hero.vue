<template>
  <section class="text-green-100 relative mb-16">
    <div
      class="bg-green-600 h-full w-full md:w-8/12 absolute left-0 top-0"
    ></div>
    <div
      class="grid md:flex relative pt-8 md:pt-16 md:pb-24 items-center w-full"
    >
      <div class="z-10 md:w-5/12 mx-8 md:ml-24">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
          Pozval jsi někdy miliardáře na přednášku?
        </h1>
        <p class="mt-6 text-xl md:text-2xl leading-snug">
          Nastartuj svou kariéru s Klubem &ndash; poznáš zajímavé lidi a získáš
          profesní náskok ještě při studiu. Stáčí nám jen napsat na Facebook.
        </p>
        <div class="flex flex-col items-center">
          <a href="//m.me/klubinvestoru" target="_blank">
            <button
              class="rounded-full mt-10 bg-purple-700 text-purple-100 shadow-md py-4 px-6 text-xl uppercase tracking-wider font-bold flex items-center hover:shadow-xl transition-all duration-200"
            >
              Napiš na Messenger

              <client-only>
                <unicon
                  name="facebook-messenger"
                  class="fill-current text-purple-200 ml-2"
                />
              </client-only>
            </button>
          </a>
          <a
            href="mailto:info@klubinvestoru.com"
            class="mt-2 text-green-200 hover:underline"
            >Raději pošlu mail</a
          >
        </div>
      </div>
      <div class="w-2/12"></div>
      <div class="w-4/12 -ml-32">
        <VImage
          sizes="(min-width: 48em) calc(50vw - 10rem), calc(100vw - 4rem)"
          layout="responsive"
          publicId="nabor/klub"
          alt="Klub investorů tým"
          transformation="ar_1"
        />
      </div>
    </div>
  </section>
</template>
