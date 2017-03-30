/*import fs from 'fs';
import webpack from 'webpack';*/
import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import applyMixin from './mixin';

const isObservable = obs => obs instanceof Observable;

export class Store {
  constructor(initialState = {}) {
    // initial state is overridden if we have session data in order to allow for page refreshes
    this.state = this.hasSessionData() ? this.getSessionData() : initialState.state;
    // set up the motherStream, which will host all new action events
    this.motherStream$ = new Rx.BehaviorSubject();
  }

  // create the motherStream, passing in mutators and state
  createStateStream(mutate, state = this.state) {
    return this.motherStream$
      .flatMap(action => isObservable(action) ? action : Observable.from([action]))
      .startWith(state)
      .scan((state, action) => {
        if (action) {
          mutate(this.state, action);
          this.setSessionData(this.state);
        }
      });
  }

  // each action will be dispatched as a new event on the motherStream
  dispatchAction(func) {
    return function (...args) {
      const action = func.call(null, ...args);
      this.motherStream$.next(action);
      if (isObservable(action.payload)) {
        this.motherStream$.next(action.payload);
      }
      return action;
    }.bind(this);
  }

  // session storage methods
  setSessionData(state) {
    sessionStorage.setItem('overVue', JSON.stringify(state));
  }

  getSessionData() {
    return JSON.parse(sessionStorage.getItem('overVue'));
  }

  hasSessionData() {
    return sessionStorage.getItem('overVue');
  }

}

// install is necessary to integrate with Vue
// This will be called from within Vue.use
export default function install(_Vue) {
  applyMixin(_Vue);
}
