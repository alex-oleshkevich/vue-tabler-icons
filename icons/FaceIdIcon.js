import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FaceIdIcon',
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
      "class": "icon icon-tabler icon-tabler-face-id"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 8v-2a2 2 0 0 1 2 -2h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 16v2a2 2 0 0 0 2 2h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 4h2a2 2 0 0 1 2 2v2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 20h2a2 2 0 0 0 2 -2v-2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "10",
        x2: "9.01",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "10",
        x2: "15.01",
        y2: "10"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.5 15a3.5 3.5 0 0 0 5 0"
      }
    }), " "]);
  }
};