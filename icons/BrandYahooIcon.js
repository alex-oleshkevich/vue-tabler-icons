import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandYahooIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-yahoo"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "8",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "18",
        x2: "14",
        y2: "18"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4.5 6l5.5 7v5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 13l6-5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12.5",
        y1: "8",
        x2: "17.5",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "11",
        x2: "20",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "18",
        x2: "20",
        y2: "18.01"
      }
    }), " "]);
  }
};