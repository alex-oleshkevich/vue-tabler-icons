import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'EmphasisIcon',
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
      "class": "icon icon-tabler icon-tabler-emphasis"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 5h-8v10h8m-1 -5h-7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "20.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "20",
        x2: "10",
        y2: "20.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "20",
        x2: "14",
        y2: "20.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "20.01"
      }
    }), " "]);
  }
};