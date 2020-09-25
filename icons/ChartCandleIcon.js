import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChartCandleIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-candle"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "6",
        width: "4",
        height: "5",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "4",
        x2: "6",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "11",
        x2: "6",
        y2: "20"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "10",
        y: "14",
        width: "4",
        height: "5",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "20"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "16",
        y: "5",
        width: "4",
        height: "6",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "4",
        x2: "18",
        y2: "5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "11",
        x2: "18",
        y2: "20"
      }
    }), " "]);
  }
};