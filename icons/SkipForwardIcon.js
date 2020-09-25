import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SkipForwardIcon',
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
      "class": "icon icon-tabler icon-tabler-skip-forward"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 6v12a2 2 0 0 0 2.75 1.84l8.25 -6.1a2 2 0 0 0 0 -3.5l-8.25 -6.1a2 2 0 0 0 -2.75 1.75"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "4",
        x2: "20",
        y2: "20"
      }
    }), " "]);
  }
};