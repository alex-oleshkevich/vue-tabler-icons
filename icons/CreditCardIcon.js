import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CreditCardIcon',
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
      "class": "icon icon-tabler icon-tabler-credit-card"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "15",
        x2: "7.01",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "15",
        x2: "13",
        y2: "15"
      }
    }), " "]);
  }
};