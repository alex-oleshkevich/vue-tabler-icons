import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'CurrencyDirhamIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-dirham"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8.5 19h-3.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 4v9"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 13.01v-.01"
      }
    }), " "]);
  }

};