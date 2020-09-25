import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'LayersDifferenceIcon',
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
      "class": "icon icon-tabler icon-tabler-layers-difference"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "10 8 8 8 8 10"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "8 14 8 16 10 16"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "14 8 16 8 16 10"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "16 14 16 16 14 16"
      }
    }), " "]);
  }
};