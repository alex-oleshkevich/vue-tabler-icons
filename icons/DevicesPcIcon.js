import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'DevicesPcIcon',
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
      "class": "icon icon-tabler icon-tabler-devices-pc"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 5h6v14h-6z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 9h10v7h-10z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 19h6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 16v3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 13v.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 16v.01"
      }
    }), " "]);
  }

};