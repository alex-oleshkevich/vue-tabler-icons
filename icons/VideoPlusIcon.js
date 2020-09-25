import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'VideoPlusIcon',
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
      "class": "icon icon-tabler icon-tabler-video-plus"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "6",
        width: "12",
        height: "12",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "12",
        x2: "11",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "10",
        x2: "9",
        y2: "14"
      }
    }), " "]);
  }
};