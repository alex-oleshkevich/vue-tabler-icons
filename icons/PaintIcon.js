import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PaintIcon',
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
      "class": "icon icon-tabler icon-tabler-paint"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "5",
        y: "3",
        width: "14",
        height: "6",
        rx: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "10",
        y: "15",
        width: "4",
        height: "6",
        rx: "1"
      }
    }), " "]);
  }
};