import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'RotateClockwise2Icon',
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
      "class": "icon icon-tabler icon-tabler-rotate-clockwise-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5.63",
        y1: "7.16",
        x2: "5.63",
        y2: "7.17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4.06",
        y1: "11",
        x2: "4.06",
        y2: "11.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4.63",
        y1: "15.1",
        x2: "4.63",
        y2: "15.11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.16",
        y1: "18.37",
        x2: "7.16",
        y2: "18.38"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "19.94",
        x2: "11",
        y2: "19.95"
      }
    }), " "]);
  }
};