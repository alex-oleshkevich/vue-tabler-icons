import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'RefreshAlertIcon',
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
      "class": "icon icon-tabler icon-tabler-refresh-alert"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "9",
        "x2": "12",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "15",
        "x2": "12.01",
        "y2": "15"
      }
    }), " "]);
  }

};