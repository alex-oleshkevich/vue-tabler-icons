import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandVkIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-vk"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 6c-1 2 -3 5 -5 6h-3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 18c-1 -2 -3 -5 -5 -6"
      }
    }), " "]);
  }
};