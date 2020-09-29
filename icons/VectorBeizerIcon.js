import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'VectorBeizerIcon',
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
      "class": "icon icon-tabler icon-tabler-vector-beizer"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "14",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "17",
        y: "14",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "10",
        y: "6",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 8.5a6 6 0 0 0 -5 5.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 8.5a6 6 0 0 1 5 5.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "8",
        x2: "4",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "8",
        x2: "14",
        y2: "8"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "3",
        cy: "8",
        r: "1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "21",
        cy: "8",
        r: "1"
      }
    }), " "]);
  }
};