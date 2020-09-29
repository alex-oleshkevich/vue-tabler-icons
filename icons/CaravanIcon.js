import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CaravanIcon',
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
      "class": "icon icon-tabler icon-tabler-caravan"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "11",
        cy: "17",
        r: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "21",
        y1: "17",
        x2: "13",
        y2: "17"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "6",
        y: "8",
        width: "6",
        height: "4",
        rx: "1"
      }
    }), " "]);
  }
};