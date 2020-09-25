import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'GasStationIcon',
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
      "class": "icon icon-tabler icon-tabler-gas-station"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "19",
        x2: "14",
        y2: "19"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "11",
        x2: "13",
        y2: "11"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 19v-12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 7v1a1 1 0 0 0 1 1h1"
      }
    }), " "]);
  }
};