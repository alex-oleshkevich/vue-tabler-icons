import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'LineIcon',
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
      "class": "icon icon-tabler icon-tabler-line"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "18",
        cy: "6",
        r: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.5",
        y1: "16.5",
        x2: "16.5",
        y2: "7.5"
      }
    }), " "]);
  }
};