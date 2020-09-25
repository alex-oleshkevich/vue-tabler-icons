import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SubtaskIcon',
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
      "class": "icon icon-tabler icon-tabler-subtask"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "9",
        x2: "12",
        y2: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "5",
        x2: "8",
        y2: "5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 5v11a1 1 0 0 0 1 1h5"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "12",
        y: "7",
        width: "8",
        height: "4",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "12",
        y: "15",
        width: "8",
        height: "4",
        rx: "1"
      }
    }), " "]);
  }
};