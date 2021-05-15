import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'DroneOffIcon',
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
      "class": "icon icon-tabler icon-tabler-drone-off"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 14h-4v-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 10l-3.5 -3.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 10l3.5 -3.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "14",
        "x2": "17.5",
        "y2": "17.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "14",
        "x2": "6.5",
        "y2": "17.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 14.035a3.5 3.5 0 1 0 3.966 3.965"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "3",
        "x2": "21",
        "y2": "21"
      }
    }), " "]);
  }

};