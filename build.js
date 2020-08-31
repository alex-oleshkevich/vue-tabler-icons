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
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },
  functional: true,
  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
  
    return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')}
  }
}
`.trim();

fs.readdir(PATH, (err, items) => {
    let index = [];
    items
        .filter(name => name.endsWith('.svg'))
        .forEach(name => {
            let nameCamel = pascalCase(name.replace('.svg', '')).replace(/_(\d)/g, '$1');
            let content = fs.readFileSync(`${PATH}/${name}`, 'utf-8').replace(/\n/gm, ' ');
            let component = componentTemplate(nameCamel, content);
            let filePath = path.resolve(`${jsxOutDir}/${nameCamel}.js`);
            index.push(`export {default as ${nameCamel}} from './icons/${nameCamel}.js';`);
            fs.ensureDir(path.dirname(filePath)).then(() => {
                fs.writeFileSync(filePath, component, 'utf-8');
            });
        });
    index.push('');
    fs.writeFileSync('./index.js', index.join('\n'), 'utf-8');
});
