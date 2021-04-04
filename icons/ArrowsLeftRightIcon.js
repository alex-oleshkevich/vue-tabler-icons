import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowsLeftRightIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(h, ctx) {
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
      "class": "icon icon-tabler icon-tabler-arrows-left-right"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "21",
        "y1": "17",
        "x2": "3",
        "y2": "17"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 10l-3 -3l3 -3"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "7",
        "x2": "21",
        "y2": "7"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 20l3 -3l-3 -3"
      }
    }), " "]);
  }

};