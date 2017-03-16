<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeName">Sam</button>
    <button @click="handleChangeName">Merry</button>
    <button @click="handleChangeName">Pippin</button>
    <div>
      <button @click="handleChangeTown">Bree</button>
      <button @click="handleChangeTown">Edoras</button>
    </div>
    <div id="hobbit">
      <h3>{{ hobbit }}</h3>
      <h3>{{  town }}</h3>
    </div>
    <div id="stateStore">
      State Store:
      <h3>{{ store }}</h3>
      <img :src="img" alt="">
    </div>
</div>
</template>

<script>
import store from '../store/store';
import { changeName, changeImg, changeImg } from '../store/actions';

store.createStateStream().subscribe(state => console.log('Initial state', state));

export default {
  data () {
    return {
      msg: 'InsidaVue',
      store: this.$store.state
    }
  },
  methods: {
    handleChangeName: function(e) {
      changeName(e.srcElement.innerHTML);
  },
  methods: {
    handleChangeName: function(e) {
      changeName(e.srcElement.innerHTML);
      changeImg(this.name);
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
    },
    img: function() {
      return this.$store.state.img;
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
<<<<<<< HEAD
}
=======
  }
>>>>>>> d5e38531a6c248808739c7ff2a2f1d1c0967a21e
</style>
