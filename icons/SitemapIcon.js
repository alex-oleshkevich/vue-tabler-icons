import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'SitemapIcon',
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
      "class": "icon icon-tabler icon-tabler-sitemap"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "15",
        "width": "6",
        "height": "6",
        "rx": "2"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "15",
        "y": "15",
        "width": "6",
        "height": "6",
        "rx": "2"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "9",
        "y": "3",
        "width": "6",
        "height": "6",
        "rx": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "9",
        "x2": "12",
        "y2": "12"
      }
    }), " "]);
  }

};