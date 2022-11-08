#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { pascalCase } = require("pascal-case");
const babel = require('@babel/core');

const PATH = path.resolve("node_modules/@tabler/icons/icons");

const componentTemplate = (name, svg) =>
    `
export default {
    name: '${name}',
    props: {
        size: {
            type: [Number, String],
            default: 24,
        }
    },
    render() {
        const size = this.$props.size + 'px';
        const attrs = this.$data.attrs || {};
        const iconClass = this.$tiConfig.iconClass;

        const allAttrs = {
            width: attrs.width || size,
            height: attrs.height || size,
            class: iconClass,
        }

        return ${svg.replace(/<svg([^>]+)>/, "<svg$1 {...allAttrs}>").replace('icon icon-tabler ', 'icon-tabler ')}
    }
}
`.trim();

const typingTemplate = `
import { App, FunctionalComponent } from '@vue/runtime-core';
import { SVGAttributes, VNodeProps } from '@vue/runtime-dom';

export declare const Plugin: {
    install(app: App, ...options: any[]): any;
};

export declare function install(app: App, ...options: any[]): any;

export default Plugin;

export type TablerIconProps = {
    size?: number | string;
}

export type TablerIconComponent = FunctionalComponent<TablerIconProps & SVGAttributes & VNodeProps>;
`.trim();

const aliases = {
    "2fa.svg": "two-factor-auth.svg",
    "3d-cube-sphere.svg": "threed-cube-sphere.svg",
    "3d-cube-sphere-off.svg": "threed-cube-sphere-off.svg",
    "3d-rotate.svg": "threed-rotate.svg",
    "123.svg": "onetwotree.svg",
    "360-view.svg": "deg360-view.svg",
};

fs.readdir(PATH, (err, items) => {
    let index = [];
    let typings = [];
    items
        .filter((name) => name.endsWith(".svg"))
        .forEach((name, pos) => {
            process.stdout.write(`Building ${pos}/${items.length}: ` + name.padEnd(42) + '\r');

            let content = fs.readFileSync(`${PATH}/${name}`, "utf-8").replace(/\n/gm, " ");

            // make name
            if (name in aliases) name = aliases[name];
            let nameCamel = pascalCase(name.replace(".svg", "")).replace(/_(\d)/g, "$1") + "Icon";

            // create and transform component
            let component = componentTemplate(nameCamel, content);
            const compiled = babel.transform(component, {plugins: ['@vue/babel-plugin-jsx']}).code;

            // write icon component
            let filePath = path.resolve(`icons/${nameCamel}.js`);
            fs.ensureDirSync(path.dirname(filePath));
            fs.writeFileSync(filePath, compiled, "utf-8");

            index.push(`export { default as ${nameCamel} } from './${nameCamel}.js';`);
            typings.push(`export const ${nameCamel}: TablerIconComponent;`);
        });

    index.push("");
    typings.push("");

    fs.writeFileSync("./icons/index.js", index.join("\n"), "utf-8");
    fs.writeFileSync("./index.d.ts", typingTemplate + "\n\n" + typings.join("\n"), "utf-8");
});
