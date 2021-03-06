import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowRampRightIcon',
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
      "class": "icon icon-tabler icon-tabler-arrow-ramp-right"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "3",
        "x2": "7",
        "y2": "11.707"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 7l-4 -4l-4 4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 14l4 -4l-4 -4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 21a11 11 0 0 1 11 -11h3"
      }
    }), " "]);
  }

};