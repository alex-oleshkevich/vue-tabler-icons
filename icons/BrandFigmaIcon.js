import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandFigmaIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-figma"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "15",
        cy: "12",
        r: "3"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "6",
        y: "3",
        width: "12",
        height: "6",
        rx: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"
      }
    }), " "]);
  }
};