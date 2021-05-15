import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'ReportIcon',
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
      "class": "icon icon-tabler icon-tabler-report"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 14v4h4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 11v-4a2 2 0 0 0 -2 -2h-2"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "8",
        "y": "3",
        "width": "6",
        "height": "4",
        "rx": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "18",
        "cy": "18",
        "r": "4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 11h4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 15h3"
      }
    }), " "]);
  }

};