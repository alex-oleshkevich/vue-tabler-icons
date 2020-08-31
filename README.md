# Tabler Icons as Vue components

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

## Credits

- [Tabler Icons](https://tablericons.com/) for icon pack
- Build script inspired by [vue-feather-icons](https://github.com/egoist/vue-feather-icons)
