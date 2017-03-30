# OverVue
#### OverVue is a stream-based persistent state management library for Vue built on RxJS observables.

While Vuex provides a robust option for handling state in Vue applications,  persistence requires 
third-party plugin support. The OverVue state management library includes persisted state out of the box.

OverVue leverages an RxJS Observable stream to manage synchronous and asynchronous updates to state and easily integrates
with Vue applications. With OverVue, all actions are emitted to our single source of truth, the motherstream, along with any Observables contained therein. This allows users to easily assimilate Observables into their Vue applications while maintaining the Flux-based architecture most conducive to Vue. 

### Disclaimer

OverVue is in the early stages of development. We welcome any constructive feedback and encourage users to open issues 
or submit pull requests in order to contribute to the ongoing evolution of OverVue. 

### Getting Started

```
npm install --save overvue-rx
```

### Create a central store

Creating your store is a simple two-step process with OverVue:

In your store file, import OverVue and connect it using the Vue.use() global method.

```
import Vue from 'vue';
import { Overvue, Store } from 'overvue-rx';

Vue.use(Overvue);
```
Next, in the file containing your root Vue instantiation, pass your mutate methods into createStateStream and subscribe to the store. Be sure to import the relevant files and set the store as a property in your root Vue instantiation. This makes the store accessible in all components. 

```
import store from './store';
import mutate from './mutate';

store.createStateStream(mutate).subscribe();

const app = new Vue({
  el: '#App',
  store,
  router,
  render: h => h(Container),
});
```
### Dispatch actions

All dispatched actions will be emitted and mapped into OverVue's motherstream. Users simply call the *dispatchAction* method from the store and pass in a callback function, which will return an object containing type and payload to be used as state update instructions to the user-defined mutators. The following is a simple example of how to declare an action in OverVue:

```
export const commitUsername = store.dispatchAction(payload => ({
  type: 'SET_USERNAME',
  payload,
}));
```
In this example, commitUsername can be easily imported into any file requiring it and utilized in the same way one would use actions in any Flux-based state management library. 

This is an example of how a mutate method will commit a dispatched action:
```
export default function mutate(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      state.username = action.payload.username;
      return state;
};
```
And that's it!
