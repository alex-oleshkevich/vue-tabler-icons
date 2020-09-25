import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MarkdownIcon',
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
      "class": "icon icon-tabler icon-tabler-markdown"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 15v-6l2 2l2 -2v6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 13l2 2l2 -2m-2 2v-6"
      }
    }), " "]);
  }
};