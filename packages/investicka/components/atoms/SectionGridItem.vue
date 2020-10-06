<template>
  <div
    class="gridItem"
    v-editable="blok"
  >
    <modal
      :name="id"
      classes="gridItem__modal"
      height="auto"
    >
      <div class="gridItem__modalHeader">
        <div class="gridItem__modalImg">
          <img
            :src="blok.img"
            alt=""
          >
        </div>
        <div class="gridItem__modalContent">
          <h3>
            {{ blok.name }}
          </h3>
          <h4>
            {{ blok.desc }}
          </h4>
        </div>
        <div
          class="gridItem__modalContentCross"
          @click="$modal.hide(id)"
        ><svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg></div>
      </div>
      <div>{{ blok.bio }}</div>
    </modal>
    <div
      class="gridItem__content"
      @click="show()"
    >
      <img
        v-lazy="blok.img"
        class="gridItem__img"
      >
      <div class="gridItem__info">
        <div class="gridItem__desc">
          {{ blok.desc }} {{ blok.second_desc ? `, ${blok.second_desc}` : `` }}
        </div>
        <div class="gridItem__name">
          {{ blok.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.gridItem {
  display: flex;
  flex-direction: column;
}

.gridItem__content {
  cursor: pointer;
  background-color: $kiLighter;
  color: $kiColor;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.1s ease-out;

  &:hover {
    background-color: $kiColor;
    color: #fff;
    transition: 0.1s ease-in;
  }
}

.gridItem__img {
  width: 100%;
  border-radius: 0;
}

.gridItem__modal {
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  padding: 0;
  padding: 2rem;
  max-width: 100%;

  h3,
  h4 {
    margin: 0;
  }
}

.gridItem__modalContentCross {
  margin-left: auto;
  margin-bottom: auto;
  cursor: pointer;
}

.gridItem__modalHeader {
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
}

.gridItem__modalImg {
  max-width: 150px;
  margin-right: 1rem;

  img {
    width: 100%;
  }
}

.gridItem__info {
  text-align: left;
  flex: 1 0 auto;
  padding: 1rem;
}

.gridItem__desc {
  font-size: 0.9rem;
  margin-bottom: 0.5em;
  letter-spacing: -1px;
}

.gridItem__name {
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>


<script>
export default {
  props: ["blok"],
  created() {
    this.id = this._uid.toString();
  },
  methods: {
    show() {
      this.$modal.show(this.id);
    },
    hide() {
      this.$modal.hide(this.id);
    }
  }
};
</script>
