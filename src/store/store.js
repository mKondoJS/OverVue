import Vue from 'vue';
import OverVue, { Store } from '../../library/OverVue';

Vue.use(OverVue);
let store;

export default store = new Store({
  state: {
    name: 'Frodo',
    img: './src/assets/frodo.jpg',
  },
  getters: {
    getName: state => state.name,
  },
});
