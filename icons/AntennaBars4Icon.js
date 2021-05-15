import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'AntennaBars4Icon',
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
      "class": "icon icon-tabler icon-tabler-antenna-bars-4"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "6",
        "y1": "18",
        "x2": "6",
        "y2": "15"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "18",
        "x2": "10",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "18",
        "x2": "14",
        "y2": "9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "18",
        "y1": "18",
        "x2": "18",
        "y2": "18.01"
      }
    }), " "]);
  }

};