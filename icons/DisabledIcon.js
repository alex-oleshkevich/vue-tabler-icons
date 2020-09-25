import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DisabledIcon',
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
      "class": "icon icon-tabler icon-tabler-disabled"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "11",
        cy: "5",
        r: "2"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "11 7 11 15 15 15 19 20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "11",
        x2: "16",
        y2: "11"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 11.5a5 5 0 1 0 6 7.5"
      }
    }), " "]);
  }
};