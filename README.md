# Tabler Icons as Vue components

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

    import { BoldIcon } from 'vue-tabler-icons';

    export default {
        components: { BoldIcon },
    };
</script>

<template>
    <bold-icon />
</template>
```

Installation via CDN is not supported yet.

## Naming pattern

Component names use the same names as defined in the original library with some rules applied:

-   they are in PascalCase
-   underscores before numbers are removed
-   `Icon` added to the end of the name

For example:

`arrows-diagonal-2` will become `ArrowsDiagonal2Icon`.

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
<bold-icon style="color: red" />
<bold-icon class="text-red" />
```

## Building locally

Clone repo:
```bash
git clone https://github.com/alex-oleshkevich/vue-feather-icons.git
```

Install deps:
``bash
yarn install
```

Run build
```bash
yarn build
```

Icon component will be in `icons` directory.

## Credits

- [Tabler Icons](https://tablericons.com/) for icon pack
- Build script inspired by [vue-feather-icons](https://github.com/egoist/vue-feather-icons)
