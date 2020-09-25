import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SwitchHorizontalIcon',
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
      "class": "icon icon-tabler icon-tabler-switch-horizontal"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "16 3 20 7 16 11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "7",
        x2: "20",
        y2: "7"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "8 13 4 17 8 21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "17",
        x2: "13",
        y2: "17"
      }
    }), " "]);
  }
};