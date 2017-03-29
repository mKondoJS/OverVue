export default function (Vue) {
  const usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
  Vue.mixin(usesInit ? { init: overVueInit } : { beforeCreate: overVueInit });

  // overVue init hook, injected into each instances' init hooks list.
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
