import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SquareToggleIcon',
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
      "class": "icon icon-tabler icon-tabler-square-toggle"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "22"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 6a2 2 0 0 0 -2 -2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 20a2 2 0 0 0 2 -2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "10",
        x2: "20",
        y2: "14"
      }
    }), " "]);
  }
};