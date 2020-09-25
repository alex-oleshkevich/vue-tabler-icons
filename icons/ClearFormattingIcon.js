import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ClearFormattingIcon',
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
      "class": "icon icon-tabler icon-tabler-clear-formatting"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 15l4 4m0 -4l-4 4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 6v-1h11v1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "19",
        x2: "11",
        y2: "19"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "5",
        x2: "9",
        y2: "19"
      }
    }), " "]);
  }
};