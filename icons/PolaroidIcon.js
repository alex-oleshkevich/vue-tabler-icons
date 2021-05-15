import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'PolaroidIcon',
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
      "class": "icon icon-tabler icon-tabler-polaroid"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "4",
        "y": "4",
        "width": "16",
        "height": "16",
        "rx": "2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "16",
        "x2": "20",
        "y2": "16"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "7",
        "x2": "14.01",
        "y2": "7"
      }
    }), " "]);
  }

};