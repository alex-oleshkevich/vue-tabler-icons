import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MapIcon',
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
      "class": "icon icon-tabler icon-tabler-map"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "4",
        x2: "9",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "7",
        x2: "15",
        y2: "20"
      }
    }), " "]);
  }
};