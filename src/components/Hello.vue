<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeName">Sam</button>
    <button @click="handleChangeName">Merry</button>
    <button @click="handleChangeName">Pippin</button>
    <div id="hobbit">
      <h3>{{ name }}</h3>
    </div>
    <div id="stateStore">
      State Store:
      <h3>{{ store }}</h3>
      <img :src="img" alt="">
    </div>
     <input v-model="search">
  <div v-if="results">
    <h1>{{ results.term }}</h1>
    <ul v-if="results.matches.length">
      <li v-for="match in results.matches">
        <a :href="match.url">{{ match.title }}</a>
        <p>{{ match.description }}</p>
      </li>
    </ul>
    <p v-else>
      No matches found.
    </p>
  </div>
</div>
</template>

<script>
import store from '../store/store';
import { changeName, changeImg } from '../store/actions';

store.createStateStream().subscribe(state => console.log('Initial state', state));

export default {
  data() {
    return {
      msg: 'InsidaVue',
      name: store.state.name,
      store: store.state,
      img: './src/assets/pippin.jpg',
    };
  },
  methods: {
    setCounter: function() {
      store.state.counter += 1;
      this.counter = store.state.counter;
    },
    handleChangeName: function(e) {
      changeName(e.srcElement.innerHTML);
      this.name = store.getters.getName(store.state);

      changeImg(this.name);
      this.img = store.state.img;
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#stateStore {
  color: red;
  }
</style>
