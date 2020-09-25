import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TreesIcon',
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
      "class": "icon icon-tabler icon-tabler-trees"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "3",
        width: "8",
        height: "14",
        rx: "4"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "12",
        y: "7",
        width: "8",
        height: "10",
        rx: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "21",
        x2: "8",
        y2: "13"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "21",
        x2: "16",
        y2: "14"
      }
    }), " "]);
  }
};