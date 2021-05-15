import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BatteryAutomotiveIcon',
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
      "class": "icon icon-tabler icon-tabler-battery-automotive"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "6",
        "width": "18",
        "height": "14",
        "rx": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 6v-2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "4",
        "x2": "19",
        "y2": "6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "6.5",
        "y1": "13",
        "x2": "9.5",
        "y2": "13"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14.5",
        "y1": "13",
        "x2": "17.5",
        "y2": "13"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16",
        "y1": "11.5",
        "x2": "16",
        "y2": "14.5"
      }
    }), " "]);
  }

};