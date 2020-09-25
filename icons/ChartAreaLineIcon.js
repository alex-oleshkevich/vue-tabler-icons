import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChartAreaLineIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-area-line"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "4 19 8 13 12 15 16 10 20 14 20 19 4 19"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "4 12 7 8 11 10 16 4 20 8"
      }
    }), " "]);
  }
};