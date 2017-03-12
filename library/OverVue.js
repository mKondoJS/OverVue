import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import applyMixin from './mixin';
import reducer from '../src/store/reducer'
const isObservable = obs => obs instanceof Observable;

let Vue;

export class Store {
  constructor(initialState = {}) {  
    // Object.keys(initialState).forEach(key => {
    //   this[key] = initialState[key];
    // })
    this.state = initialState;
    this.motherStream$ = new Rx.BehaviorSubject();
    // this.store = {};
  }                         
  createStateStream(state = this.state) {
    return this.motherStream$
      .flatMap((action) => {console.log('flat map', state); return isObservable(action) ? action : Observable.from([action])})
      .startWith(state)
      // .scan(reducer);
      .scan((state, action) => {
        console.log('action.type:', action);
        console.log('stizzy state', state, 'accity ack', action);
        if (action) {
          reducer(this.state, action);
        }
      });
    // return this.motherStream$;
  }
  actionCreator(func) {
  return function(...args) {
    console.log('second level of AC!!!', ...args);
    const action = func.call(null, ...args);
    console.log('this is the second this, it is action', action);
    this.motherStream$.next(action);
    if (isObservable(action.payload)) {
      console.log('is in isObservable');
      this.motherStream$.next(action.payload);
    }
    console.log(this.motherStream$);
    return action;
    }.bind(this)
  } 
}
  // createStore(streamCollection) {
  //   this.store = streamCollection;
  // }
  // addToStore(streamCollection) {
  //   this.store = Object.assign({}, this.store, streamCollection);
  // }
  
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
