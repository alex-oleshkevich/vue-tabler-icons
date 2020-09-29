import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PlantIcon',
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
      "class": "icon icon-tabler icon-tabler-plant"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "9"
      }
    }), " "]);
  }
};