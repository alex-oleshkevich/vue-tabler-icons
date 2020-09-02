import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'WifiIcon',
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
      "class": "icon icon-tabler icon-tabler-wifi"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("g", {
      attrs: {
        transform: "rotate(-45 12 18)"
      }
    }, ["   ", h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 14a4 4 0 0 1 4 4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 10a8 8 0 0 1 8 8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 6a12 12 0 0 1 12 12"
      }
    }), "   "]), " "]);
  }
};