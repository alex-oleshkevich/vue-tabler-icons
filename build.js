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

        return ${svg.replace(/<svg([^>]+)>/, "<svg$1 {...ctx.data}>")}
    }
}
`.trim();

const typingTemplate = `
import _Vue, { VueConstructor } from 'vue';

export declare const Plugin: {
    install<T>(Vue: typeof _Vue, options?: T): void;
};

export declare function install<T>(Vue: typeof _Vue, options?: T): void;

export default Plugin;

export type TablerIconComponent = VueConstructor;
`.trim();

const aliases = {
    "2fa.svg": "two-factor-auth.svg",
    "3d-cube-sphere.svg": "threed-cube-sphere.svg",
    "3d-rotate.svg": "threed-rotate.svg",
};

fs.readdir(PATH, (err, items) => {
    let index = [];
    let typings = [];
    items
        .filter((name) => name.endsWith(".svg"))
        .slice(0, parseInt(process.env.BUILD_LIMIT || "999999999"))
        .forEach((name, pos) => {
            process.stdout.write(`Building ${pos}/${items.length}: ` + name.padEnd(42) + '\r');

            let content = fs.readFileSync(`${PATH}/${name}`, "utf-8").replace(/\n/gm, " ");

            // make name
            if (name in aliases) name = aliases[name];
            let nameCamel = pascalCase(name.replace(".svg", "")).replace(/_(\d)/g, "$1") + "Icon";

            // create and transform component
            let component = componentTemplate(nameCamel, content) + "\n";
            const compiled = babel.transform(component, {presets: ['@vue/babel-preset-jsx']}).code;

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
