import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'LockAccessIcon',
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
      "class": "icon icon-tabler icon-tabler-lock-access"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 8v-2a2 2 0 0 1 2 -2h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 16v2a2 2 0 0 0 2 2h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 4h2a2 2 0 0 1 2 2v2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 20h2a2 2 0 0 0 2 -2v-2"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "8",
        "y": "11",
        "width": "8",
        "height": "5",
        "rx": "1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 11v-2a2 2 0 1 1 4 0v2"
      }
    }), " "]);
  }

};