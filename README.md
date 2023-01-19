# Tabler Icons as Vue 3 components

![NPM](https://img.shields.io/npm/v/vue-tabler-icons)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/alex-oleshkevich/vue-tabler-icons/Test)
![GitHub](https://img.shields.io/github/license/alex-oleshkevich/vue-tabler-icons)
![NPM - Downloads](https://img.shields.io/npm/dm/vue-tabler-icons)


## Preview

[Live preview tool](https://tabler-icons.io/)

<details>
    <summary>Preview icons</summary>
    <p>
    
![Tabler Icons](https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons.png)

    </p>

</details>

## Features

-   Over 1250 pixel-perfect icons
-   TypeScript definitions
-   Vue 3 support
-   Vue 2 support (see v1.x)
-   All icons are compiled to JS, no preprocessing required

## Installation

### Installation for Vue 3

```bash
yarn add vue-tabler-icons

# or

npm i vue-tabler-icons
```

### Installation for Vue 2

Version 2.x is Vue 3 only, if you use Vue 2 then install any 1.x version

```bash
yarn add vue-tabler-icons@^1.0
```

v1.x is no longer a priority so updates may be delayed or discontinued.

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

_Note: this usage is not recommended as it cannot be tree-shaken._

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

If you prefer CDN, then use this URL `https://unpkg.com/vue-tabler-icons/dist/vue-tabler-icons.umd.js`  
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

| Original               | New                      |
|------------------------|--------------------------|
| 2fa.svg                | TwoFactorAuthIcon        |
| 3d-cube-sphere.svg     | ThreedCubeSphereIcon     |
| 3d-cube-sphere-off.svg | ThreedCubeSphereIconOff  |
| 3d-rotate.svg          | ThreedRotateIcon         |
| 123.svg                | OneTwoThreeRotateIcon    |
| 360-view.svg           | Deg360ViewIcon           |
| 360.svg                | Deg360Icon               |

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

Icon component will be in `icons` directory.

## Credits

-   [Tabler Icons](https://tabler-icons.io/) for icon pack
