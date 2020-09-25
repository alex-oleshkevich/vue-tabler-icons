import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MugIcon',
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
      "class": "icon icon-tabler icon-tabler-mug"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2"
      }
    }), " "]);
  }
};