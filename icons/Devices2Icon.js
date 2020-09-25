import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Devices2Icon',
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
      "class": "icon icon-tabler icon-tabler-devices-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "13",
        y: "4",
        width: "8",
        height: "16",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "19",
        x2: "10",
        y2: "19"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "8",
        x2: "17",
        y2: "8.01"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "16",
        r: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "9",
        y2: "19"
      }
    }), " "]);
  }
};