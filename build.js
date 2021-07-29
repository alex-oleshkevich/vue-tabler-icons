#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { pascalCase } = require("pascal-case");

const PATH = path.resolve("node_modules/@tabler/icons/icons");

const jsxOutDir = "./jsx";

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
import { DefineComponent } from 'vue';

export type TablerIconProps = {
    size: string;
}

export type TablerIconComponent = DefineComponent<TablerIconProps, {}, any>;
`.trim();

const aliases = {
    "2fa.svg": "two-factor-auth.svg",
    "3d-cube-sphere.svg": "threed-cube-sphere.svg",
};

fs.readdir(PATH, (err, items) => {
    let index = [];
    let typings = [];
    items
        .filter((name) => name.endsWith(".svg"))
        .forEach((name) => {
            let content = fs.readFileSync(`${PATH}/${name}`, "utf-8").replace(/\n/gm, " ");
            if (name in aliases) {
                name = aliases[name];
            }
            let nameCamel = pascalCase(name.replace(".svg", "")).replace(/_(\d)/g, "$1") + "Icon";
            let component = componentTemplate(nameCamel, content) + '\n';
            let filePath = path.resolve(`${jsxOutDir}/${nameCamel}.js`);
            index.push(`export { default as ${nameCamel} } from './${nameCamel}.js';`);
            typings.push(`export const ${nameCamel}: TablerIconComponent;`);
            fs.ensureDirSync(path.dirname(filePath));
            fs.writeFileSync(filePath, component, "utf-8");
        });
    index.push("");
    typings.push("");
    fs.writeFileSync("./jsx/index.js", index.join("\n"), "utf-8");
    fs.writeFileSync("./index.d.ts", typingTemplate + "\n\n" + typings.join("\n"), "utf-8");
});
