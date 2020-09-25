import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DeviceMobileRotatedIcon',
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
      "class": "icon icon-tabler icon-tabler-device-mobile-rotated"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "     ", h("g", {
      attrs: {
        transform: "rotate(90 12 12)"
      }
    }, ["   ", h("rect", {
      attrs: {
        x: "7",
        y: "4",
        width: "10",
        height: "16",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "5",
        x2: "13",
        y2: "5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "17.01"
      }
    }), "     "]), " "]);
  }
};