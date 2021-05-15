import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'CalculatorIcon',
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
      "class": "icon icon-tabler icon-tabler-calculator"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "4",
        "y": "3",
        "width": "16",
        "height": "18",
        "rx": "2"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "8",
        "y": "7",
        "width": "8",
        "height": "3",
        "rx": "1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "14",
        "x2": "8",
        "y2": "14.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "14",
        "x2": "12",
        "y2": "14.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16",
        "y1": "14",
        "x2": "16",
        "y2": "14.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "17",
        "x2": "8",
        "y2": "17.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "17",
        "x2": "12",
        "y2": "17.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16",
        "y1": "17",
        "x2": "16",
        "y2": "17.01"
      }
    }), " "]);
  }

};