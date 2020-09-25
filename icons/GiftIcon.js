import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'GiftIcon',
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
      "class": "icon icon-tabler icon-tabler-gift"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "21"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"
      }
    }), " "]);
  }
};