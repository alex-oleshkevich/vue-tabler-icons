import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'BallAmericanFootballIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-american-football"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "9",
        "x2": "9",
        "y2": "15"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "12",
        "x2": "12",
        "y2": "14"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "10",
        "x2": "14",
        "y2": "12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 21a5 5 0 0 0 -5 -5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 3a5 5 0 0 0 5 5"
      }
    }), " "]);
  }

};