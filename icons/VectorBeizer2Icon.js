import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'VectorBeizer2Icon',
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
      "class": "icon icon-tabler icon-tabler-vector-beizer-2"
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
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "17",
        y: "17",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "5",
        x2: "14",
        y2: "5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "19",
        x2: "17",
        y2: "19"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "9",
        cy: "19",
        r: "1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "15",
        cy: "5",
        r: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5"
      }
    }), " "]);
  }
};