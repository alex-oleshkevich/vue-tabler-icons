import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ToolsKitchenIcon',
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
      "class": "icon icon-tabler icon-tabler-tools-kitchen"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 3h8l-1 9h-6z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 18h2v3h-2z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 15v6h-1v-3"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "12",
        "x2": "8",
        "y2": "18"
      }
    }), " "]);
  }

};