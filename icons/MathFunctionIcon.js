import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MathFunctionIcon',
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
      "class": "icon icon-tabler icon-tabler-math-function"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 10h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 17c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 19c0 1.5 .5 2 2 2s2 -4 3 -9s1.5 -9 3 -9s2 .5 2 2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "11",
        y2: "12"
      }
    }), " "]);
  }
};