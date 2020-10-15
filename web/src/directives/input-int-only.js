const intOnly = {
  install(Vue) {
    Vue.directive('int-only', {
      inserted(el) {
        el.onkeypress = (event) => {
          const key = event.key;
          if (/\d/.test(key)) {
            return true;
          }
          event.preventDefault();
        };
      }
    });
  },
};

export default intOnly;
