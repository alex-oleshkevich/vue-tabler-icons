import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CurrencyDollarCanadianIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-dollar-canadian"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 18h-1a6 6 0 1 1 0 -12h1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 20v-2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 6v-2"
      }
    }), " "]);
  }
};