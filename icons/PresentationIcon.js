import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'PresentationIcon',
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
      "class": "icon icon-tabler icon-tabler-presentation"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "4",
        "x2": "21",
        "y2": "4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "16",
        "x2": "12",
        "y2": "20"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "20",
        "x2": "15",
        "y2": "20"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 12l3 -3l2 2l3 -3"
      }
    }), " "]);
  }

};