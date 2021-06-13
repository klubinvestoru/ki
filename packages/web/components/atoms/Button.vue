<template>
  <button>
    <slot />
  </button>
</template>

<style lang="css" scoped>
.button__tab {
  @apply text-gray-600 py-4 px-6 block uppercase tracking-widest font-semibold;
}

.button__tab:hover {
  @apply text-green-500;
}

.button__tab:focus {
  @apply outline-none;
}

.button__tab--active {
  @apply text-green-500 border-b-2 border-green-500;
}
</style>
