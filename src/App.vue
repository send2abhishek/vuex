<template>
  <base-container title="Vuex"></base-container>

  <base-container title="UserAuth" v-if="userIsAuthenticated">
    <user-auth></user-auth>
    <h2>counter {{ finalCounter }}</h2>
    <h2>counter {{ normalisedCounter }}</h2>
    <button @click="addByOne">Add By 1</button>
    <button @click="addByTen">Add By 10</button>
  </base-container>

  <base-container title="UserAuth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  computed: {
    // counter() {
    //   // return this.$store.getters.finalCounter;

    //  // return this.$store.getters.normalisedCounter;
    // },

    ...mapGetters(['finalCounter', 'normalisedCounter', 'userIsAuthenticated']),
  },
  methods: {
    addByOne() {
      this.$store.dispatch('increment');
    },
    addByTen() {
      // this.$store.commit('increase', { value: 10 });

      // alternative way of calling the commit method

      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>