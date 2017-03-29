# OverVue
#### OverVue is a stream-based state management library for Vue built on RxJs observables.

While Vuex provides a robust option for handling state in Vue applications, it does not handle data persistance without 
third-party plugin support. In order to address this issue, we have created OverVue, a state management library specifically 
built for Vue applications which ships with persisted state out of the box. 

OverVue easily integrates with Vue applications to allow users to build their state store on an RxJS Observable stream. 
While Vue components are natively reactive, with OverVue all actions are converted to streams and combined with our 
single source of truth, the motherstream. This allows users to easily assimilate Observables into their Vue applications 
while maintaining the Flux-based architecture most conducive to Vue. 

### Disclaimer

OverVue is in the early stages of development. We welcome any constructive feedback and encourage users to open issues 
or submit pull requests in order to contribute to the ongoing evolution of OverVue. 

### Getting Started

```
npm install --save overVue
```

### Create a central store

Creating your store is a simple two-step process with OverVue:

In your store.js file, import OverVue and connect it using the Vue.use() global method.

```
import Vue from 'vue';
import OverVue from 'overVue';

Vue.use(OverVue);
```
Next, in your main.js file, pass your mutators into createStateStream and subscribe to the store. Be sure to import your store 
and set it as a property in your root Vue instantiation. This will make the store accessible in all components. 

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
### Dispatch actions as Observables

OverVue will convert all actions to Observables and combine these newly created streams with the motherstream. In order to 
use this feature, users simply call the *dispatchAction* method from the store and pass in a callback function, which will return the payload to be used by the user-defined mutators. The following is a simple example of how to define an action 
in OverVue:

```
export const commitUsernameAndPassword = store.dispatchAction(payload => ({
  type: 'SET_USER_PASSWORD',
  payload,
}));
```
In this example, commitUsernameAndPassword can be easily imported into any file requiring used in the same way one would 
use actions in any Flux-based state management library. 


