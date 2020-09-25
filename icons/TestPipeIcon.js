import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TestPipeIcon',
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
      "class": "icon icon-tabler icon-tabler-test-pipe"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "10",
        x2: "16",
        y2: "10"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6"
      }
    }), " "]);
  }
};