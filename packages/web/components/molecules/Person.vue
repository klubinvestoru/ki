<template>
  <div class="flex flex-col items-center">
    <img
      class="h-48 w-48 flex-shrink-0 shadow-2xl rounded-xl overflow-hidden"
      :src="photo"
      :alt="alt"
    />
    <div class="bg-white py-6 px-6 shadow-lg rounded-xl flex-grow w-full -mt-6">
      <div class="flex justify-between">
        <h4 class="text-lg font-bold">
          <slot name="name">Martin</slot>
        </h4>
        <!-- <unicon
          name="linkedin"
          class="flex-shrink-0"
        /> -->
      </div>
      <h5 class="mb-4 text-green-600 uppercase tracking-wider text-sm font-semibold flex">
        <slot name="post">Předseda</slot>
      </h5>
      <div class="flex justify-between items-end">
        <q class="text-lg">
          <slot name="quote">Nestíhám přednášku, napište, jestli pak jdete na pivo.</slot>
        </q>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
    },
    alt: {
      type: String,
      default: "Předseda Klubu investorů",
    },
  },
};
</script>
