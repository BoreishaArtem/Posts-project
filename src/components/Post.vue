<template>
  <div class="post">
    <router-link
      :to="{ name: 'postview', params: { id: +post.id, post: { title: post.title, body: post.body } } }"
      class="post__title"
    >
      <div>{{ post.title }}</div>
      <span class="post__title--delete">&times;</span>
    </router-link>
    <div class="post__body">{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.post, "POst");
  }
};
</script>

<style  lang="scss">
.post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto;
  font-size: 1.5rem;
  text-align: center;
  width: 80rem;
  border: 0.1rem solid $greyMedium;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  &__title {
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: 0.5rem solid $greyMedium;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $greyMedium;
    color: $greyDark;
    text-transform: uppercase;
    &--delete {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 10%;
      &:active {
        font-size: 1.3rem;
      }
    }
  }
  &__body {
    font-size: 1.4rem;
    padding: 1rem;
  }
}
</style>
