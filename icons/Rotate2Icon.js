import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Rotate2Icon',
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
      "class": "icon icon-tabler icon-tabler-rotate-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18.37",
        y1: "7.16",
        x2: "18.37",
        y2: "7.17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "19.94",
        x2: "13",
        y2: "19.95"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16.84",
        y1: "18.37",
        x2: "16.84",
        y2: "18.38"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19.37",
        y1: "15.1",
        x2: "19.37",
        y2: "15.11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19.94",
        y1: "11",
        x2: "19.94",
        y2: "11.01"
      }
    }), " "]);
  }
};