import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CometIcon',
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
      "class": "icon icon-tabler icon-tabler-comet"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15.5 18.5l-3 1.5l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "4",
        x2: "11",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "4",
        x2: "12.5",
        y2: "7.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "9",
        x2: "7.5",
        y2: "12.5"
      }
    }), " "]);
  }
};