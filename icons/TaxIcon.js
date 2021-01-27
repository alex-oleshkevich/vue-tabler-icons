import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TaxIcon',
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
      "class": "icon icon-tabler icon-tabler-tax"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "8"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "9.5",
        cy: "8.5",
        r: ".5",
        fill: "currentColor"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "14.5",
        cy: "13.5",
        r: ".5",
        fill: "currentColor"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
      }
    }), " "]);
  }
};