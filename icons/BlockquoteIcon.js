import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BlockquoteIcon',
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
      "class": "icon icon-tabler icon-tabler-blockquote"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 15h15"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 19h-15"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 11h6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 7h-6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"
      }
    }), " "]);
  }

};