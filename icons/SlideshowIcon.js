import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SlideshowIcon',
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
      "class": "icon icon-tabler icon-tabler-slideshow"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "6",
        x2: "15.01",
        y2: "6"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "14",
        rx: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 13l4 -4a3 5 0 0 1 3 0l4 4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 12l2 -2a3 5 0 0 1 3 0l3 3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "21",
        x2: "8.01",
        y2: "21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12.01",
        y2: "21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "21",
        x2: "16.01",
        y2: "21"
      }
    }), " "]);
  }
};