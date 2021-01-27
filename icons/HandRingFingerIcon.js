import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'HandRingFingerIcon',
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
      "class": "icon icon-tabler icon-tabler-hand-ring-finger"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 13v-2.5a1.5 1.5 0 0 1 3 0v1.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 12v-6.5a1.5 1.5 0 0 1 3 0v6.5"
      }
    }), " "]);
  }
};