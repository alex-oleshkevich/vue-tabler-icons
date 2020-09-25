import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'AppsIcon',
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
      "class": "icon icon-tabler icon-tabler-apps"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "4",
        width: "6",
        height: "6",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "14",
        width: "6",
        height: "6",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "14",
        y: "14",
        width: "6",
        height: "6",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "7",
        x2: "20",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "4",
        x2: "17",
        y2: "10"
      }
    }), " "]);
  }
};