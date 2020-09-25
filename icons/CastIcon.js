import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CastIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-cast"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "19",
        x2: "3.01",
        y2: "19"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 19a4 4 0 0 0 -4 -4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 19a8 8 0 0 0 -8 -8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2"
      }
    }), " "]);
  }
};