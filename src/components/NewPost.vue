<template>
  <div class="container">
    <div class="btns__top">
      <button @click="onBack" class="btn">Back</button>
    </div>
    <div class="new__post">
      <div class="new__post--header">
        <h1 class="new__post--header--title">Create new post!</h1>
      </div>
      <div class="new__post--body">
        <input
          type="text"
          placeholder="enter Post title"
          v-model="title"
          :class="{ red: title !== '' }"
          class="new__post--body--title"
        />
        <textarea
          placeholder="enter Post body"
          v-model="body"
          :class="{ red: title !== '' }"
          class="new__post--body--description"
          rows="13"
          cols="59"
        />
      </div>
      <div class="new__post--footer">
        <button @click="clear" class="btn">Cancel</button>
        <button @click="addNewPost" class="btn">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    addNewPost() {
      if (this.title !== "" && this.body !== "") {
        const allPosts = [...this.$store.getters.allPosts];
        const id = allPosts[allPosts.length - 1].id + 1;
        this.$store.dispatch("addNewPost", {
          title: this.title,
          body: this.body,
          id
        });
        this.$router.push("/");
      } else {
        alert("Please Enter some data");
      }
    },
    clear() {
      this.title = "";
      this.body = "";
      this.$router.push("/");
    },
    onBack() {
      if (this.title !== "" && this.body !== "") {
        this.$router.push("/");
      } else {
        if (confirm("You Shure") === true) {
          this.title = "";
          this.body = "";
          this.$router.push("/");
        }
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.new__post {
  width: 50rem;
  border: 0.2rem solid $greyLight;
  border-radius: 0.3rem;
  margin: 5rem auto;
  &--header {
    font-size: 1rem;
    width: 100%;
    color: $greyDark;
    border-bottom: 1px solid $greyMedium;
    padding: 1rem;
  }
  &--body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      padding: 1rem;
      width: 90.6%;
      margin: 1rem;
      outline: none;
      border: 0.1rem solid $greyDark;
      border-radius: 0.3rem;
    }
    &--title:focus {
      border-color: $blue;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    }
    &--description {
      padding: 1rem;
      border: 0.1rem solid $greyDark;
      border-radius: 0.3rem;
      outline: none;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
    }
    &--description:focus {
      border-color: $blue;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    }
  }
  &--footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
}
</style>
