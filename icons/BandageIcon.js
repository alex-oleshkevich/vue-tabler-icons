import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BandageIcon',
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
      "class": "icon icon-tabler icon-tabler-bandage"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "12",
        "x2": "14",
        "y2": "12.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "12",
        "x2": "10",
        "y2": "12.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "10",
        "x2": "12",
        "y2": "10.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "14",
        "x2": "12",
        "y2": "14.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7"
      }
    }), " "]);
  }

};