import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ShoppingCartDiscountIcon',
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
      "class": "icon icon-tabler icon-tabler-shopping-cart-discount"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "6",
        cy: "19",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "19",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 17h-11v-14h-2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 6l-1 7h-13"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 10l6 -6"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "10.5",
        cy: "4.5",
        r: ".5"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "15.5",
        cy: "9.5",
        r: ".5"
      }
    }), " "]);
  }
};