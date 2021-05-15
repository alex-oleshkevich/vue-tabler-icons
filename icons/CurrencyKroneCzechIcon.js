import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'CurrencyKroneCzechIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-krone-czech"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 6v12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 12c3.5 0 6 -3 6 -6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 12c3.5 0 6 3 6 6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 6l-2 2l-2 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 12h-2a3 3 0 0 0 0 6h2"
      }
    }), " "]);
  }

};