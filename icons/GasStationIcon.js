import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'GasStationIcon',
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
      "class": "icon icon-tabler icon-tabler-gas-station"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "20",
        "x2": "15",
        "y2": "20"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 7v1a1 1 0 0 0 1 1h1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "11",
        "x2": "14",
        "y2": "11"
      }
    }), " "]);
  }

};