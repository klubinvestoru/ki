<template>
  <menu class="menu">
    <div class="menu__desktop">
      <a
        href="https://klubinvestoru.com"
        target="_blank"
        class="menu__link menu__link--ki"
      ><span>Klub investorů&nbsp;</span>
        <picture class="menu__img">
          <source
            type="image/svg+xml"
            srcset="external.svg"
          >
          <img
            src="external.png"
            alt="&nearr;"
          >
        </picture>
      </a>

      <a
        v-for="item in links"
        :key="item.id"
        v-scroll-to="'#' + item.scrollto"
        href="#"
        class="menu__link"
      >{{ item.name }}</a>
    </div>
    <no-ssr>
      <Slide
        right
        noOverlay
        class="menu__mobile"
      >
        <a
          v-for="item in links"
          :key="item.id"
          v-scroll-to="'#' + item.scrollto"
          href="#"
          class="menu__link"
        >
          {{ item.name }}
        </a>
        <a
          href="https://klubinvestoru.com"
          target="_blank"
          class="menu__link menu__link--ki"
        >Klub investorů&nbsp;
          <picture class="menu__img">
            <source
              type="image/svg+xml"
              srcset="external.svg"
            >
            <img
              src="external.png"
              alt="Klub investorů external"
            >
          </picture></a>
      </Slide>
    </no-ssr>
  </menu>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.menu {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.875rem;
}

.menu__desktop {
  display: none;

  @include mq("tablet-wide") {
    display: initial;
  }
}

.menu__mobile {
  background-color: $kiColor;

  @include mq("tablet-wide") {
    display: none;
  }
}

.menu__link {
  text-decoration: none;
  color: #fff;
  margin-left: 0.5em;

  @include mq("tablet-wide") {
    color: $kiDark;
  }
}

.menu__link--ki {
  color: $kiBrandColor;
  background-color: $kiBrandLight;
  padding: 0.5em;
  border-radius: 4px;
}

.menu__img {
  & > * {
    height: 1rem;
  }
}
</style>

<script>
const ahoj = [
  {
    scrollto: "about",
    name: "O nás"
  },
  {
    scrollto: "agenda",
    name: "Program"
  },
  {
    scrollto: "speakers",
    name: "Hosté"
  },
  {
    scrollto: "partners",
    name: "Partneři"
  },
  {
    scrollto: "contact",
    name: "Kontakt"
  }
];

export default {
  props: {
    links: {
      default: ahoj
    }
  }
};
</script>

