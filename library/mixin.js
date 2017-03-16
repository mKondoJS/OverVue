import Vue from 'vue';
import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

export default function (Vue) {
  const usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
  Vue.mixin(usesInit ? { init: overVueInit } : { beforeCreate: overVueInit });

  /**
   * overVue init hook, injected into each instances init hooks list.
   */

  function overVueInit() {
    const options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

export const vueRx = Vue.mixin({
  init() {
    const self = this;
    const dataFn = this.$options.data;
    if (dataFn) {
      this.$options.data = function () {
        const raw = dataFn();
        Object.keys(raw).forEach((key) => {
          const val = raw[key];
          if (val instanceof Rx.Observable) {
            raw[key] = null;
            val.subscribe((value) => {
              self[key] = value;
            });
          }
        });
        return raw;
      };
    }
  },
});
