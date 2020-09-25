import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CameraPlusIcon',
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
      "class": "icon icon-tabler icon-tabler-camera-plus"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "13",
        r: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "3",
        x2: "18",
        y2: "9"
      }
    }), " "]);
  }
};