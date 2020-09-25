import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ZodiacGeminiIcon',
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
      "class": "icon icon-tabler icon-tabler-zodiac-gemini"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 3a21 21 0 0 0 18 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 21a21 21 0 0 1 18 0"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "4.5",
        x2: "7",
        y2: "19.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "4.5",
        x2: "17",
        y2: "19.5"
      }
    }), " "]);
  }
};