export * from './icons';
import * as components from './icons';

export default {
    install(Vue) {
        Object
          .entries(components)
          .forEach(([name, component]) => Vue.component(name, component));
    }
}
