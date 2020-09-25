import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ClipboardListIcon',
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
      "class": "icon icon-tabler icon-tabler-clipboard-list"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "9",
        y: "3",
        width: "6",
        height: "4",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "12",
        x2: "9.01",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "12",
        x2: "15",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "16",
        x2: "9.01",
        y2: "16"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "16",
        x2: "15",
        y2: "16"
      }
    }), " "]);
  }
};