import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ScanIcon',
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
      "class": "icon icon-tabler icon-tabler-scan"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 7v-1a2 2 0 0 1 2 -2h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 17v1a2 2 0 0 0 2 2h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 4h2a2 2 0 0 1 2 2v1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 20h2a2 2 0 0 0 2 -2v-1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    }), " "]);
  }
};