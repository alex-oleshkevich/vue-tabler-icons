#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { pascalCase } = require('pascal-case');

const PATH = path.resolve('node_modules/tabler-icons/icons');

const jsxOutDir = './jsx';

const componentTemplate = (name, svg) =>
    `
export default {
    name: '${name}',
    props: {
        size: {
            type: String,
            default: '24',
        }
    },
    functional: true,
    render(h, ctx) {
        const size = parseInt(ctx.props.size) + 'px';
        const attrs = ctx.data.attrs || {};
        attrs.width = attrs.width || size;
        attrs.height = attrs.height || size;
        ctx.data.attrs = attrs;
      
        return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')}
    }
}
`.trim();

const pluginTemplate = `
export * from './icons';
import * as components from './icons';

export default {
    install(Vue) {
        Object
          .entries(components)
          .forEach(([name, component]) => Vue.component(name, component));
    }
}
`.trim();

const aliases = {
    '2fa.svg': 'two-factor-auth.svg',
    '3d-cube-sphere.svg': 'threed-cube-sphere.svg',
}

fs.readdir(PATH, (err, items) => {
    let index = [];
    items
        .filter(name => name.endsWith('.svg'))
        .forEach(name => {
            let content = fs.readFileSync(`${PATH}/${name}`, 'utf-8').replace(/\n/gm, ' ');
            if (name in aliases) {
                name = aliases[name];
            }
            let nameCamel = pascalCase(name.replace('.svg', '')).replace(/_(\d)/g, '$1') + 'Icon';
            let component = componentTemplate(nameCamel, content);
            let filePath = path.resolve(`${jsxOutDir}/${nameCamel}.js`);
            index.push(`export { default as ${nameCamel} } from './icons/${nameCamel}.js';`);
            fs.ensureDir(path.dirname(filePath)).then(() => {
                fs.writeFileSync(filePath, component, 'utf-8');
            });
        });
    index.push('');
    fs.writeFileSync('./icons.js', index.join('\n'), 'utf-8');
    fs.writeFileSync('./index.js', [pluginTemplate, ''].join('\n'), 'utf-8');
});
