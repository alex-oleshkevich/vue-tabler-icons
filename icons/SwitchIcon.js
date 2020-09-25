import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SwitchIcon',
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
      "class": "icon icon-tabler icon-tabler-switch"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "15 4 19 4 19 8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14.75",
        y1: "9.25",
        x2: "19",
        y2: "4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "19",
        x2: "9",
        y2: "15"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "15 19 19 19 19 15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "5",
        x2: "19",
        y2: "19"
      }
    }), " "]);
  }
};