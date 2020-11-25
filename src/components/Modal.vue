<template>
  <div class="wrapper" ref="modalWrapp" @click="closeModal">
    <div class="modal">
      <div class="modal__header">
        <span class="modal__header--info">User info</span>
        <span class="modal__header--close" @click="closeModal">&times;</span>
      </div>
      <div class="modal__body">
        <div class="modal__body--content">
          <span class="modal__body--content--type">Company:</span>
          <span class="modal__body--content--val">{{ company.name }}</span>
        </div>
        <div class="modal__body--content">
          <span class="modal__body--content--type">catchPhrase:</span>
          <span class="modal__body--content--val">{{ company.catchPhrase }}</span>
        </div>
        <div class="modal__body--content">
          <span class="modal__body--content--type">Bs:</span>
          <span class="modal__body--content--val">{{ company.bs }}</span>
        </div>
      </div>
      <div class="modal__footer">
        <button @click="closeModal" class="modal__footer--btnClose btn">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["company"],
  methods: {
    closeModal(event) {
      if (event.target.classList[0] === "wrapper") {
        this.$emit("closeModal");
      } else if (
        event.target.classList[0] === "modal__footer--btnClose" ||
        event.target.classList[0] === "modal__header--close"
      ) {
        this.$emit("closeModal");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  background-color: $white;
  width: 50rem;
  margin: 30rem auto;
  border: 0.1rem solid $greyLight;
  border-radius: 0.3rem;
  font-size: 1.8rem;
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    flex-direction: row;
    background-color: $greyLight;
    border-bottom: 1px solid $greyDark;
    &--info {
      font-weight: 700;
    }
    &--close {
      cursor: pointer;
      height: 23px;
      transition: font-size 0.2s ease-in;
      &:active {
        font-size: 1.9rem;
      }
    }
  }
  &__body {
    width: 100%;
    border-bottom: 0.1rem solid $greyDark;
    &--content {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 1rem;
      &--type {
        font-weight: 700;
      }
      &--val {
        font-weight: 400;
      }
    }
  }
  &__footer {
    background-color: $greyLight;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    &--btnClose {
      border: 2px solid $greyDark;
      border-radius: 0.3rem;
      background-color: $white;
      color: $greyDark;
    }
  }
}
</style>
