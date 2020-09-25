import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandCodepenIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-codepen"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 15l9 6l9 -6l-9 -6l-9 6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 9l9 6l9 -6l-9 -6l-9 6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "3",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "21",
        y1: "9",
        x2: "21",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "21"
      }
    }), " "]);
  }
};