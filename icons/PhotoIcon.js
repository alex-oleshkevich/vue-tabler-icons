import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PhotoIcon',
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
      "class": "icon icon-tabler icon-tabler-photo"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "8",
        x2: "15.01",
        y2: "8"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 15l4 -4a3 5 0 0 1 3 0l5 5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 14l1 -1a3 5 0 0 1 3 0l2 2"
      }
    }), " "]);
  }
};