import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandDribbbleIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-dribbble"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 3.6c5 6 7 10.5 7.5 16.2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.1 10.75c5 0 9.814 -.38 15.314 -5"
      }
    }), " "]);
  }
};