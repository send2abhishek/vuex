<template>
  <base-container title="Vuex"></base-container>
  <h2>counter {{ counter }}</h2>
  <button @click="addByOne">Add By 1</button>
  <button @click="addByTen">Add By 10</button>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
  methods: {
    addByOne() {
      this.$store.commit('increment');
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