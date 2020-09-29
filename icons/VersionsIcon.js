import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'VersionsIcon',
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
      "class": "icon icon-tabler icon-tabler-versions"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "10",
        y: "5",
        width: "10",
        height: "14",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "7",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "8",
        x2: "4",
        y2: "16"
      }
    }), " "]);
  }
};