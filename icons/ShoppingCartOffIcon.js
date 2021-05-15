import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ShoppingCartOffIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(ctx) {
    const h = arguments[0];
    const size = parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-shopping-cart-off"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "6",
        "cy": "19",
        "r": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 17a2 2 0 1 0 2 2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 17h-11v-11"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 3l18 18"
      }
    }), " "]);
  }

};