import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ReplaceIcon',
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
      "class": "icon icon-tabler icon-tabler-replace"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "6",
        height: "6",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "15",
        y: "15",
        width: "6",
        height: "6",
        rx: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"
      }
    }), " "]);
  }
};