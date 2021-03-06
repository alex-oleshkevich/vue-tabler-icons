import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TextWrapDisabledIcon',
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
      "class": "icon icon-tabler icon-tabler-text-wrap-disabled"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "6",
        "x2": "14",
        "y2": "6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "18",
        "x2": "14",
        "y2": "18"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 12h17l-3 -3m0 6l3 -3"
      }
    }), " "]);
  }

};