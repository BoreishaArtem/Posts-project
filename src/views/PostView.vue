<template>
  <div>
    <div class="btns__top">
      <router-link to="/">
        <button class="btn left">Back</button>
      </router-link>
      <router-link to="/users">
        <button class="btn right">Users</button>
      </router-link>
    </div>
    <div class="post__view">
      <v-loader v-if="loading" class="loader"></v-loader>
      <div class="post__view--content" v-else-if="!loading && !post ">
        <div class="post__view--content--title">
          <span>{{ currentPost.title }}</span>
        </div>
        <div class="post__view--content--body">
          <span>{{ currentPost.body }}</span>
        </div>
      </div>
      <div class="post__view--content" v-else>
        <div class="post__view--content--title">
          <span>{{ post.title }}</span>
        </div>
        <div class="post__view--content--body">
          <span>{{ post.body }}</span>
        </div>
      </div>
      <div class="com" @click="show = !show" v-if="comments.length !== 0 && !loading">Comments</div>
      <div class="message" v-else-if="post === undefined">
        <h1>the post is deleted...</h1>
      </div>
      <div class="message" v-else>
        <h1>The post have no comments yet...</h1>
      </div>
      <div class="comments" v-if="show && !loading">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <div class="comment__email">{{ comment.email }}</div>
          <div class="comment__name">{{ comment.name }}</div>
          <div class="comment__body">{{ comment.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";

export default {
  props: {
    id: {
      required: true,
      type: Number
    },
    post: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    vLoader: Loader
  },
  methods: {
    getComments() {
      if (!isNaN(this.id)) {
        this.$store.dispatch("getComments", +this.id);
      }
    },
    getPostInfo() {
      console.log(!isNaN(this.id));
      console.log(this.post);
      if (!isNaN(this.id)) {
        this.$store.dispatch("getPostInfo", +this.id);
      }
    }
  },
  computed: {
    comments() {
      return this.$store.getters.comments;
    },
    currentPost() {
      return this.$store.getters.getCurrentPost;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  created() {
    this.getComments();
    this.getPostInfo();
  }
};
</script>

<style lang="scss" scoped>
.post__view {
  margin: 3rem auto;
  font-size: 1.8rem;
  width: 80rem;
  &--content {
    border: 0.2rem solid $greyLight;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.5);
    &--title {
      background-color: $greyLight;
      font-weight: 700;
      color: #808080;
      text-transform: uppercase;
      padding: 1rem;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    &--body {
      padding: 1rem;
      font-size: 1.5rem;
    }
  }
}
.com {
  text-align: center;
  background-color: $greyLight;
  border: 0.15rem solid $greyLight;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 5rem auto;
  width: 76rem;
  color: $greyDark;
  padding: 0.5rem;
  cursor: pointer;
}
.comment {
  border: 2px solid $greyLight;
  border-radius: 5px;
  margin: 3rem auto;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  &__name {
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem;
    font-size: 1.6rem;
  }
  &__body {
    padding: 1rem;
    font-size: 1.5rem;
  }

  &__email {
    text-align: right;
    font-weight: 700;
    width: 100%;
    background-color: $greyLight;
    border-top: 0.1rem solid $greyLight;
    border-bottom: 0.1rem solid $greyLight;
    padding: 1rem;
  }
}
.message {
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  color: $greyDark;
  margin-top: 5rem;
}
</style>
