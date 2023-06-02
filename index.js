export * from './icons';
import * as components from './icons';

export default {
    install(Vue, options = {}) {
        Vue.config.globalProperties.$tiConfig = Object.assign({}, {
            iconClass: '',
        }, options);
        Object
          .entries(components)
          .forEach(([name, component]) => Vue.component(name, component));
    }
}
