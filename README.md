# Tabler Icons as Vue components

[Live preview tool](https://tabler-icons.io/)

<details>
    <summary>Preview icons</summary>
    <p>
    
![Tabler Icons](https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons.png)

    </p>

</details>

## Installation

```bash
yarn add vue-tabler-icons

# or

npm i vue-tabler-icons
```

## Usage

```html
<script>
    // MyComponent.vue
    import { BoldIcon } from "vue-tabler-icons";

    export default {
        components: { BoldIcon },
    };
</script>

<template>
    <bold-icon />
</template>
```

### Using Vue plugin

You may install a Vue plugin that automatically adds all components to the Vue instance.

```js
import Vue from "vue";
import VueTablerIcons from "vue-tabler-icons";

Vue.use(VueTablerIcons);
```

Now you can use icons without importing them:

```html
<template>
    <trash-icon />
</template>
```

### Using CDN

If you prefer CDN, then use this URL `https://unpkg.com/vue-tabler-icons@1.11.4/dist/vue-tabler-icons.umd.js`  
The library doesn't automatically registers itself so you need to do it manually:

```html
<script>
    Vue.use(VueTablerIcons);
</script>
```


## Naming pattern

Component names use the same names as defined in the original library with some rules applied:

-   they are in PascalCase
-   underscores before numbers are removed
-   `Icon` added to the end of the name

For example:

`arrows-diagonal-2` will become `ArrowsDiagonal2Icon`.

### Replacements

Following icon names are replaced to match JavaScript variable name pattern:

| Original           | New                  |
| ------------------ | -------------------- |
| 2fa.svg            | TwoFactorAuth        |
| 3d-cube-sphere.svg | ThreedCubeSphereIcon |

## Icon size

All components define `size` property that you can use to control the icon's size:

```html
<bold-icon size="48" />
```

Will render 48x48 icon.

All other attributes are directly bound to the underlying SVG image.

<bold-icon height="18" />

Attributes `height` and `width` have higher precedence over `size` property.

## Icon color

All icons use `currentColor` as their color. You can colorize your icons as you do that for text.

```html
<bold-icon style="color: red" /> <bold-icon class="text-red" />
```

## Stroke width and other SVG attributes

Any custom attribute that set on the component will be applied directly to the SVG asset.
For example, if you want to set `stroke-width` attribute just set it as usually:

```html
<bold-icon stroke-width="1" />
```

## Building locally

Clone repo:

```bash
git clone https://github.com/alex-oleshkevich/vue-feather-icons.git
```

Install deps:

```bash
yarn install
```

Run build

```bash
yarn build
```

Make bundle

```
yarn dist
```

Icon component will be in `icons/` directory, and all assembled files in `dist/`.

## Credits

-   [Tabler Icons](https://tabler-icons.io/) for icon pack
