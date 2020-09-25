import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CutIcon',
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
      "class": "icon icon-tabler icon-tabler-cut"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "7",
        cy: "17",
        r: "3"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "17",
        r: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9.15",
        y1: "14.85",
        x2: "18",
        y2: "4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "4",
        x2: "14.85",
        y2: "14.85"
      }
    }), " "]);
  }
};