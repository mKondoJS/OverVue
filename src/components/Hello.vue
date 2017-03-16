<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeName">Sam</button>
    <button @click="handleChangeName">Merry</button>
    <button @click="handleChangeName">Pippin</button>
    <button @click="handleChangeTown">Bree</button>

    <div id="hobbit">
      <h3>{{ hobbit }}</h3>
      <h3>{{  town }}</h3>
    </div>
    <div id="stateStore">
      State Store:
      <h3>{{ store }}</h3>
    </div>

</div>
</template>

<script>
//import store from '../store/store';
//import mutate from '../store/mutate';
import { changeName, changeImg, changeTown } from '../store/actions';



export default {
  data () {
    return {
      msg: 'InsidaVue',
      //name: this.$store.state.name,
      store: this.$store.state
    }
  },
  methods: {
    handleChangeName: function(e) {
      changeName(e.srcElement.innerHTML);
    },
    handleChangeTown: function(e) {
      changeTown(e.srcElement.innerHTML);
    }
  },
  computed: {
    hobbit: function() {
      console.log('fired hobbit');
      return this.$store.state.name;
    },
    town: function() {
      console.log('fired town');
      return this.$store.state.town;
    }
  }
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

#stateStore {
  color: red;
}
</style>
