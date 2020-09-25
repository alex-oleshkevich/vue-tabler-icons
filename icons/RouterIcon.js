import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'RouterIcon',
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
      "class": "icon icon-tabler icon-tabler-router"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "13",
        width: "18",
        height: "8",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "17",
        y2: "17.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "17",
        x2: "13",
        y2: "17.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "13",
        x2: "15",
        y2: "11"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11.75 8.75a4 4 0 0 1 6.5 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8.5 6.5a8 8 0 0 1 13 0"
      }
    }), " "]);
  }
};