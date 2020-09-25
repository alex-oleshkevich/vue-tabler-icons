import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FloatCenterIcon',
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
      "class": "icon icon-tabler icon-tabler-float-center"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        width: "6",
        height: "6",
        x: "9",
        y: "5",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "7",
        x2: "5",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "11",
        x2: "5",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19",
        y1: "7",
        x2: "20",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19",
        y1: "11",
        x2: "20",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "15",
        x2: "20",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "19",
        x2: "20",
        y2: "19"
      }
    }), " "]);
  }
};