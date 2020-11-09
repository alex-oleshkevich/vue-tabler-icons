import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrainIcon',
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
      "class": "icon icon-tabler icon-tabler-train"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M21 13c0 -3.87 -3.37 -7 -10 -7h-8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 15h16a2 2 0 0 0 2 -2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 6v5h17.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "10",
        x2: "3",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "8",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "11",
        x2: "13",
        y2: "6.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "19",
        x2: "21",
        y2: "19"
      }
    }), " "]);
  }
};