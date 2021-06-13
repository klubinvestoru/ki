<template>
  <div class="mb-8">
    <div
      @click="isHidden = !isHidden"
      class="select-none w-full rounded shadow-md px-6 py-3 bg-white hover:shadow-lg cursor-pointer text-xl flex items-center justify-between transition-all duration-200"
    >
      <span>
        <slot name="question" />
      </span>
      <client-only>
        <unicon
          :name="isHidden ? `angle-down` : `angle-up`"
          class="flex-shrink-0 ml-2"
        />
      </client-only>
    </div>
    <transition
      :css="false"
      mode="out-in"
      @enter="onContainerEnter"
      @leave="onContainerLeave"
    >
      <div
        v-if="!isHidden"
        class="mt-4 px-6 text-lg"
      >
        <slot name="answer" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    onContainerEnter(container, done) {
      Velocity(container, "slideDown", {
        duration: 200,
        complete: done,
      });
    },
    onContainerLeave(container, done) {
      Velocity(container, "slideUp", {
        duration: 200,
        complete: done,
      });
    },
  },
};
</script>

