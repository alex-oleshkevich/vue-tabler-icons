import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'WalkIcon',
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
      "class": "icon icon-tabler icon-tabler-walk"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "13",
        "cy": "4",
        "r": "1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "21",
        "x2": "10",
        "y2": "17"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 21l-2 -4l-3 -3l1 -6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 12l2 -3l4 -1l3 3l3 1"
      }
    }), " "]);
  }

};