import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'DeviceMobileVibrationIcon',
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
      "class": "icon icon-tabler icon-tabler-device-mobile-vibration"
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
        "width": "10",
        "height": "16",
        "rx": "1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "5",
        "x2": "10",
        "y2": "5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "17",
        "x2": "9",
        "y2": "17.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 6l-2 3l2 3l-2 3l2 3"
      }
    }), " "]);
  }

};