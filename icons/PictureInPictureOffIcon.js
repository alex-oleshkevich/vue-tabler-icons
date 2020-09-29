import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PictureInPictureOffIcon',
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
      "class": "icon icon-tabler icon-tabler-picture-in-picture-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "14",
        y: "14",
        width: "7",
        height: "5",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "9",
        x2: "11",
        y2: "13"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 12v-3h3"
      }
    }), " "]);
  }
};