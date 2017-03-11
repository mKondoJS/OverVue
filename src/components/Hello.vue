<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--<!--<button @click="checkStore">Button</button>-->
    <button @click="username">b2</button>-->
    <h3>{{ counter }}</h3>
</div>
</template>

<script>
import store from '../store/store';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'ok',
      counter: 0
    }
  },
  methods: {
    username: function() {
      console.log('this is the console log', store);
      this.msg = store.state.name;
    },
    setCounter: function() {
      store.state.counter += 1;
      this.counter = store.state.counter;
    }
  },
  computed: {
    
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
</style>
