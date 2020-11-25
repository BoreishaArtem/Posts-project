<template>
  <div class="wrapper"></div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    allPosts: [],
    totalPosts: 0,
    postToShow: 10,
    currentPage: 1
  }),
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  methods: {},
  computed: {
    postsQuantity() {
      return this.posts.length;
    }
  },
  updated() {
    console.log(this.postsQuantity);
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  width: 100%;
}
</style>
