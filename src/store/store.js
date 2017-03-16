import Vue from 'vue';
import OverVue, { Store } from '../../library/OverVue';

// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';

Vue.use(OverVue);
let store;

export default store = new Store({
  state: {
    name: 'Frodo',
    town: 'Hobbiton',
  },
  getters: {
    getName: state => state.name,
  },
});
