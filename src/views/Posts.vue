<template>
  <div class="container">
    <v-loader v-if="loading" class="loader" />
    <div class="btns__top">
      <router-link to="/create">
        <button class="btn left">Create post</button>
      </router-link>
      <router-link to="/users">
        <button class="btn right">Users</button>
      </router-link>
    </div>

    <div id="posts">
      <v-post v-for="post in postsOnPages" :key="post.id" :post="post" />
    </div>
    <div class="post__pagination">
      <button @click="currentPage--" class="btn btn--prev">Prev</button>
      <div
        class="post__pagination--page"
        v-for="page in pagesQuantity"
        :key="page + 'id'"
        @click="showPosts"
        ref="paginationPages"
      >{{ page }}</div>
      <button @click="currentPage++" class="btn btn--next">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Post from "../components/Post.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      postsToShow: 10,
      currentPage: 1
    };
  },
  components: {
    vPost: Post,
    vLoader: Loader
  },
  methods: {
    ...mapActions(["getPosts"]),
    showPosts(event) {
      const page = +event.target.textContent;
      this.currentPage = page;
    },
    activePage() {
      if (this.$refs.paginationPages !== undefined) {
        this.$refs.paginationPages.forEach(page => {
          page.classList.remove("active");
          if (+page.textContent === this.currentPage) {
            page.classList.add("active");
          }
        });
      }
    }
  },
  computed: {
    ...mapGetters(["allPosts", "loading"]),
    pagesQuantity() {
      return Math.ceil(this.allPosts.length / this.postsToShow);
    },
    activePages() {
      return this.$refs.paginationPages.forEach(page => {
        page.classList.remove("active");
        if (+page.textContent === this.currentPage) {
          page.classList.add("active");
        }
      });
    },
    postsOnPages() {
      if (this.currentPage > 0 && this.currentPage <= this.pagesQuantity) {
        return this.allPosts.slice(
          (this.currentPage - 1) * this.postsToShow,
          this.currentPage * this.postsToShow
        );
      }
      if (this.currentPage <= 0) {
        this.currentPage = this.pagesQuantity;
        return this.allPosts.slice(
          (this.currentPage - 1) * this.postsToShow,
          this.currentPage * this.postsToShow
        );
      }
      if (this.currentPage > this.pagesQuantity) {
        this.currentPage = 1;
        return this.allPosts.slice(
          (this.currentPage - 1) * this.postsToShow,
          this.currentPage * this.postsToShow
        );
      }
    }
  },
  created() {
    this.getPosts();
  },
  mounted() {
    this.activePage();
  },
  updated() {
    this.activePage();
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
}
.post {
  margin: 3rem auto;
}
.btns__top {
  position: fixed;
  width: 100%;
  top: 0;
  button {
    margin: 5px;
  }
}
.post__pagination {
  font-size: 1.5rem;
  width: 56rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem auto;
  &--page {
    padding: 0.5rem 0.8rem;
    font-weight: 700;
    color: $white;
    background-color: $greyLight;
    margin: 0 0.5rem;
    border: 0.2rem solid $greyMedium;
    border-radius: 0.2rem;
    transition: 0.2s all;
    color: $greyDark;
    &:hover {
      cursor: pointer;
      color: $blue;
    }
  }
}
.active {
  border-color: $blue;
  color: $blue;
}
</style>
