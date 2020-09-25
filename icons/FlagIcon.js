import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FlagIcon',
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
      "class": "icon icon-tabler icon-tabler-flag"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "5",
        x2: "5",
        y2: "21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "19",
        y2: "14"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0"
      }
    }), " "]);
  }
};