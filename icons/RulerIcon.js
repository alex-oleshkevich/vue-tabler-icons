import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'RulerIcon',
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
      "class": "icon icon-tabler icon-tabler-ruler"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "8",
        x2: "6",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "12",
        x2: "7",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "16",
        x2: "6",
        y2: "16"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "4",
        x2: "8",
        y2: "6"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "12 4 12 7 "
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "16 4 16 6 "
      }
    }), " "]);
  }
};