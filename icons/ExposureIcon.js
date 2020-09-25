import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ExposureIcon',
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
      "class": "icon icon-tabler icon-tabler-exposure"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4.6",
        y1: "19.4",
        x2: "19.4",
        y2: "4.6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 9h4m-2 -2v4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "16",
        x2: "17",
        y2: "16"
      }
    }), " "]);
  }
};