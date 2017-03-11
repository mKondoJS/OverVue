import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import applyMixin from './mixin';
const isObservable = obs => obs instanceof Observable;

const action$ = new Rx.BehaviorSubject();

let Vue;

export class Store {
  constructor(initialState = {}) {  
    Object.keys(initialState).forEach(key => {
      this[key] = initialState[key];
    })
  }                         
  initializeStore(initialState) {
    action$
    .flatMap((action) => isObservable(action) ? action : Observable.from([action]))
    .startWith(initState)
    .scan(reducer);
  }
};

export default function install (_Vue) {
  if (Vue) {
    console.error(
      '[OverVue] already installed. Vue.use(OverVue) should be called only once.'
    )
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}
