export * from "./icons";
import * as components from "./icons";

export const Plugin = {
    install(Vue) {
        Object.entries(components).forEach(([name, component]) => Vue.component(name, component));
    },
};

export default Plugin;
