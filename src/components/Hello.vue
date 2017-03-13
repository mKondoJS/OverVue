<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeName">Sam</button>
    <button @click="handleChangeName">Merry</button>
    <button @click="handleChangeName">Pippin</button>
    <div>
      <h3>{{ name }}</h3>
      <img :src="img">
    </div>

</div>
</template>

<script>
import store from '../store/store';
import mutate from '../store/mutate';
import { changeName } from '../store/actions';
store.createStateStream().subscribe(state => console.log('here is our hello state', state));


export default {
  name: 'hello',
  data () {
    return {
      msg: 'ok',
      name: store.state.name,
      img: store.state.img,
    }
  },
  methods: {
    username: function() {
      // this.msg = store.state.name;
    },
    setCounter: function() {
      store.state.counter += 1;
      this.counter = store.state.counter;
    },
    handleChangeName: function(e) {
      changeName(e.srcElement.innerHTML);
      console.log('in handle change name, this is the store', store);
      this.name = store.state.name;
      console.log('this is our getter', store.getters.getName);
    },
  },
}
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
</style>
