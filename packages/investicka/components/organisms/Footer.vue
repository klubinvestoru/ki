<template>
  <footer
    class="footer"
    id="contact"
  >
    <img
      class="footer__background"
      src="/sec.svg"
    >
    <div class="footer__content">
      <!-- <div class="footer__socials">
      </div> -->
      <div class="footer__copy">
        &copy; {{ new Date().getFullYear() !== 2019 ? '2019 - ' + new Date().getFullYear() : '2019' }}
        s ♥ Klub investorů
      </div>
      <div class="footer__contact">
        Klub investorů, z.s.<br>
        Ondříčkova 2166/14<br>
        Vinohrady, 130 00 Praha 3<br>
        <a :href="blok.contact.includes('@') ? 'mailto:' + blok.contact : blok.contact">{{ blok.contact }}</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.footer {
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  a {
    color: #fff;
  }
}

.footer__background {
  width: 101%; // svg bad hack
  border-radius: 0;
  padding: 0;
  margin: 0;
}

.footer__content {
  padding: 1rem 5%;
  font-size: 1rem;
  background-color: $kiColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & > * {
    margin: 0.5rem 0;
  }

  @include mq("tablet-wide") {
    flex-direction: row;

    & > * {
      margin: 0.5rem 0;
    }
  }
}

.footer__copy {
  text-align: center;
}

.footer__contact {
  text-align: center;
  @include mq("tablet-wide") {
    text-align: right;
  }
}
</style>

<script>
export default {
  props: ["blok"]
};
</script>
