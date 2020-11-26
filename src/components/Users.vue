<template>
  <div class="container" :class="{ dark: modal }">
    <router-link to="/" class="btns__top">
      <button class="btn">back</button>
    </router-link>

    <v-loader v-if="loading" class="loader" />

    <table class="table" v-else>
      <thead>
        <tr>
          <th v-for="(tableHead, index) in tableHeads" :key="index">{{ tableHead }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="tbody__tr">
          <td class="tbody__tr--id">{{ user.id }}</td>
          <td class="tbody__tr--name">{{ user.name }}</td>
          <td class="tbody__tr--email">{{ user.email }}</td>
          <td class="tbody__tr--webSite">{{ user.website }}</td>
          <td class="tbody__tr--info">
            <button @click="showModal(user.company)" class="btn btn--info">info</button>
          </td>
        </tr>
      </tbody>
    </table>
    <v-modal :company="company" v-if="modal" @closeModal="modal=false">
      <div class="modal__body--content">
        <span class="modal__body--content--type">Company:</span>
        <span class="modal__body--content--val">{{company.name}}</span>
      </div>
      <div class="modal__body--content">
        <span class="modal__body--content--type">catchPhrase:</span>
        <span class="modal__body--content--val">{{company.catchPhrase}}</span>
      </div>
      <div class="modal__body--content">
        <span class="modal__body--content--type">Bs:</span>
        <span class="modal__body--content--val">{{company.bs}}</span>
      </div>
    </v-modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import Loader from "./Loader.vue";

export default {
  data() {
    return {
      tableHeads: ["id", "name", "email", "website", "info"],
      modal: false,
      company: ""
    };
  },
  components: {
    vModal: Modal,
    vLoader: Loader
  },
  methods: {
    showModal(company) {
      this.company = company;
      this.modal = !this.modal;
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loading() {
      return this.$store.getters.usersLoading;
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  z-index: 1;
}
.table {
  font-weight: normal;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  max-width: 80rem;
  margin: 5rem auto;
  border: 0.1rem solid $blue;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 1.5rem rgba(56, 132, 253, 1);
}
.table th,
.table td {
  padding: 0.6rem 1rem;
  font-size: 1.5rem;
  border: 0.1rem solid $greyDark;
  vertical-align: top;
  // color: $greyDark;
}

.tbody__tr {
  &--id {
    font-weight: 700;
    color: $greyDark;
    background-color: $greyLight;
  }
  &--name {
    font-weight: 700;
  }
}

.table th {
  color: #fff;
  background: $greyDark;
  font-weight: bold;
  border: 0.1rem solid $greyDark;
  text-transform: uppercase;
  text-align: center;
}
.table td span {
  background: #337ab7;
  color: #fff;
  display: none;
  font-size: 11px;
  font-weight: bold;
  font-family: Verdana, sans-serif;
  text-transform: uppercase;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  left: 0;
}
@media (max-width: 768px) {
  .table thead {
    display: none;
  }
  .table tr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .table td {
    margin: 0 -1px -1px 0;
    padding-top: 35px;
    position: relative;
    width: 50%;
  }
  .table td span {
    display: block;
  }
}
@media (max-width: 480px) {
  .table td {
    width: 100%;
  }
}
</style>
