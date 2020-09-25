import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrashIcon',
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
      "class": "icon icon-tabler icon-tabler-trash"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "7",
        x2: "20",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
      }
    }), " "]);
  }
};