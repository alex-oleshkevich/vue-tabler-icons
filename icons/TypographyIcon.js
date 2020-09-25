import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TypographyIcon',
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
      "class": "icon icon-tabler icon-tabler-typography"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "20",
        x2: "7",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "20",
        x2: "21",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6.9",
        y1: "15",
        x2: "13.8",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10.2",
        y1: "6.3",
        x2: "16",
        y2: "20"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "5 20 11 4 13 4 20 20"
      }
    }), " "]);
  }
};