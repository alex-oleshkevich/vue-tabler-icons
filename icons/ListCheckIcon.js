import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ListCheckIcon',
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
      "class": "icon icon-tabler icon-tabler-list-check"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.5 5.5l1.5 1.5l2.5 -2.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.5 11.5l1.5 1.5l2.5 -2.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.5 17.5l1.5 1.5l2.5 -2.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "6",
        x2: "20",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "12",
        x2: "20",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "18",
        x2: "20",
        y2: "18"
      }
    }), " "]);
  }
};