import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DeviceGamepadIcon',
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
      "class": "icon icon-tabler icon-tabler-device-gamepad"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "2",
        y: "6",
        width: "20",
        height: "12",
        rx: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 12h4m-2 -2v4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "11",
        x2: "15",
        y2: "11.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "13",
        x2: "18",
        y2: "13.01"
      }
    }), " "]);
  }
};