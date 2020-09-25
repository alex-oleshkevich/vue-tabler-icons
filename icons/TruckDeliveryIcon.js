import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TruckDeliveryIcon',
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
      "class": "icon icon-tabler icon-tabler-truck-delivery"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "7",
        cy: "17",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "17",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "7",
        y2: "9"
      }
    }), " "]);
  }
};