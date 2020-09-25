import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'KeyIcon',
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
      "class": "icon icon-tabler icon-tabler-key"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "8",
        cy: "15",
        r: "4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10.85",
        y1: "12.15",
        x2: "19",
        y2: "4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "5",
        x2: "20",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "8",
        x2: "17",
        y2: "10"
      }
    }), " "]);
  }
};