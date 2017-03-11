import Vue from 'vue';
import OverVue, { Store } from '../library/OverVue';

// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';

Vue.use(OverVue);
console.log('this is the type', Store);
let store;

export default store = new Store({
  state: {
    name: 'Bilbo',
    counter: 0
  },
  getters: {
  
  },
  mutations: {

  },
  actions: {
    
  },
  modules: {

  },
});
