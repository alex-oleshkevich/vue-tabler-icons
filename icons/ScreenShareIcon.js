import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ScreenShareIcon',
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
      "class": "icon icon-tabler icon-tabler-screen-share"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "20",
        "x2": "17",
        "y2": "20"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "16",
        "x2": "9",
        "y2": "20"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "16",
        "x2": "15",
        "y2": "20"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 4h4v4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 9l5 -5"
      }
    }), " "]);
  }

};