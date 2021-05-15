import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'GitPullRequestIcon',
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
      "class": "icon icon-tabler icon-tabler-git-pull-request"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "6",
        "cy": "18",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "6",
        "cy": "6",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "18",
        "cy": "18",
        "r": "2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "6",
        "y1": "8",
        "x2": "6",
        "y2": "16"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 6h5a2 2 0 0 1 2 2v8"
      }
    }), "   ", h("polyline", {
      "attrs": {
        "points": "14 9 11 6 14 3"
      }
    }), " "]);
  }

};