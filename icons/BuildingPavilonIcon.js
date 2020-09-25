import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BuildingPavilonIcon',
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
      "class": "icon icon-tabler icon-tabler-building-pavilon"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 21h7v-3a2 2 0 0 1 4 0v3h7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "21",
        x2: "6",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "21",
        x2: "18",
        y2: "12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3"
      }
    }), " "]);
  }
};