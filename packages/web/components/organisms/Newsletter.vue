<template>
  <div
    id="mlb2-5649214"
    class="text-lg ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5649214"
  >
    <transition
      mode="out-in"
      enter-active-class="ease-out duration-300 transition-all"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-300 transition-all"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <!-- action="https://static.mailerlite.com/webforms/submit/y3w0g4" -->
      <form
        data-code="y3w0g4"
        method="post"
        target="_blank"
        ref="newsForm"
        class="row-form flex items-baseline justify-center"
        @submit="onSubmit"
        v-if="state !== 2"
      >
        <input
          type="email"
          class="w-96 rounded-l-xl py-3 px-4 shadow-xl text-green-900"
          :placeholder="placeholder"
          aria-label="email"
          aria-required="true"
          data-inputmask=""
          name="fields[email]"
          autocomplete="email"
          v-model="email"
          :disabled="state === 1"
        />
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <button
          class="font-medium bg-purple-600 shadow-xl self-stretch px-8 text-purple-50 rounded-r-xl"
          type="submit"
          :disabled="state === 1"
        >
          {{ subscribe }}
        </button>
      </form>
      <div v-else-if="state === 2">
        <div class="">
          <h4>Vítejte!</h4>
          <p>Úspěšně jste se připojili k našemu seznamu odběratelů.</p>
          <button class="text-sm underline" @click="state = 0">
            Resetovat formulář
          </button>
        </div>
      </div>
    </transition>
    <img
      src="https://track.mailerlite.com/webforms/o/5649214/y3w0g4?v1650026632"
      width="1"
      height="1"
      style="
    max-width: 1px;
    max-height: 1px;
    visibility: hidden;
    padding: 0;
    margin: 0;
    display: block;
  "
      alt="."
    /></div
></template>
<script>
export default {
  props: {
    subscribe: { type: String, default: "Přihlásit" },
    placeholder: { type: String, default: "E-mailová adresa" }
  },
  data() {
    return {
      // 0: init, 1: loading, 2: success
      state: 0,
      email: ""
    };
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://static.mailerlite.com/js/w/webforms.min.js?v9b62042f798751c8de86a784eab23614"
    );
    document.head.appendChild(plugin);
  },
  methods: {
    async onSubmit() {
      try {
        this.state = 1;
        let formData = new FormData(this.$refs.form);
        //         <input type="hidden" name="ml-submit" value="1" />
        // <input type="hidden" name="anticsrf" value="true" />
        formData.append("ml-submit", 1);
        formData.append("anticsrf", true);
        formData.append("fields[email]", this.email);
        const res = await this.$axios.$post(
          "https://static.mailerlite.com/webforms/submit/y3w0g4",
          formData
        );

        this.state = 2;
      } catch (error) {
        console.log(error);
        this.state = 0;
      }
    }
  }
};
</script>
