import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SmokingIcon',
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
      "class": "icon icon-tabler icon-tabler-smoking"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "13",
        width: "18",
        height: "4",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "17"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"
      }
    }), " "]);
  }
};