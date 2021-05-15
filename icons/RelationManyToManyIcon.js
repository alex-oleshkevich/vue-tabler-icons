import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { h } from 'vue';
export default {
  name: 'RelationManyToManyIcon',
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
      "class": "icon icon-tabler icon-tabler-relation-many-to-many"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "5",
        "width": "18",
        "height": "14",
        "rx": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 14v-4l3 4v-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 14v-4l3 4v-4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "10.5",
        "x2": "12",
        "y2": "10.51"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "13.5",
        "x2": "12",
        "y2": "13.51"
      }
    }), " "]);
  }

};