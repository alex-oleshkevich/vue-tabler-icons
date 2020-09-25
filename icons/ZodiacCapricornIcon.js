import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ZodiacCapricornIcon',
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
      "class": "icon icon-tabler icon-tabler-zodiac-capricorn"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 4a3 3 0 0 1 3 3v9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "16",
        cy: "17",
        r: "3"
      }
    }), " "]);
  }
};