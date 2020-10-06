<template>
  <div class="flex items-center mt-10 w-1/2 px-8">
    <VImage
      class="h-48 w-48 flex-shrink-0"
      :publicId="photo"
      :alt="alt"
    />
    <div class="bg-white py-6 px-6 shadow-md rounded-r flex-grow">
      <div class="flex justify-between">
        <h4 class="text-lg font-bold">
          <slot name="name">Martin</slot>
        </h4>
        <unicon
          name="linkedin"
          class="flex-shrink-0"
        />
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
      default: "nabor/martin"
    },
    alt: {
      type: String,
      default: "Předseda Klubu investorů Martin Hrdý"
    }
  }
};
</script>
