import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'Eyeglass2Icon',
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
      "class": "icon icon-tabler icon-tabler-eyeglass-2"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 4h-2l-3 10v2.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 4h2l3 10v2.5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "16",
        "x2": "14",
        "y2": "16"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "17.5",
        "cy": "16.5",
        "r": "3.5"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "6.5",
        "cy": "16.5",
        "r": "3.5"
      }
    }), " "]);
  }

};