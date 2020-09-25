import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'NewsIcon',
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
      "class": "icon icon-tabler icon-tabler-news"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "12",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "16",
        x2: "12",
        y2: "16"
      }
    }), " "]);
  }
};