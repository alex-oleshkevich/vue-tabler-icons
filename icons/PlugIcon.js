import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PlugIcon',
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
      "class": "icon icon-tabler icon-tabler-plug"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "3",
        x2: "9",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "3",
        x2: "15",
        y2: "7"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 16v2a2 2 0 0 0 2 2h3"
      }
    }), " "]);
  }
};