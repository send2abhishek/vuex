import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  // you can assign nameSpace as per requirement default value is false
  namespaced: false,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalisedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 50) {
        return 50;
      } else {
        return finalCounter;
      }
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    }
  }
};

const store = createStore({
  modules: {
    counter1: counterModule
  },
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  }
});
const app = createApp(App);

app.use(store);
app.mount('#app');
