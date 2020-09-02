import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'EyeIcon',
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
      "class": "icon icon-tabler icon-tabler-eye"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2"
      }
    }), " "]);
  }
};