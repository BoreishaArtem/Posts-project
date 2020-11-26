<template>
  <div class="post">
    <div class="post__header">
      <router-link
        :to="{ name: 'postview', params: { id: +post.id, post: post.userId === undefined ? post : 'notrequired', specified: post.userId === undefined ? false : true }}"
        class="post__header--title"
      >
        <div>{{ post.title }}</div>
      </router-link>
      <span class="post__header--delete" @click="deletePost(post.id)">&times;</span>
    </div>
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
  methods: {
    deletePost(id) {
      this.$store.dispatch("deletePost", id);
    }
  },
  mounted() {}
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
  &__header {
    font-weight: 700;
    padding: 1rem;
    font-size: 1.5rem;
    border-bottom: 0.5rem solid $greyMedium;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $greyMedium;

    &--title {
      text-decoration: none;
      color: $greyDark;
      text-transform: uppercase;
      width: 90%;
      cursor: pointer;
      text-align: left;
    }
    &--delete {
      cursor: pointer;
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
