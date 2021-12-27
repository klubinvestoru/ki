<template>
  <div>
    <div class="relative md:sticky top-0 z-50 bg-gray-200">
      <div
        class="bg-green-600 h-full w-full md:w-8/12 absolute left-0 top-0"
      ></div>
      <VNav />
    </div>
    <VHero />
    <VKlub />
    <!-- <VLide /> -->
    <VQA />
    <VSponzori />
    <VFooter />
  </div>
</template>

<script>
export default {
  layout: "zazij"
};
</script>
