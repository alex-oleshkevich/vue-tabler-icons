import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'PresentationAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-presentation-analytics"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 12v-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 12v-2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 12v-1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 4h18"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 16v4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 20h6"
      }
    }), " "]);
  }

};