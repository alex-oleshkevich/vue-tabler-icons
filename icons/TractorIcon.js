import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TractorIcon',
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
      "class": "icon icon-tabler icon-tabler-tractor"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "7",
        cy: "15",
        r: "4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "15",
        x2: "7",
        y2: "15.01"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "19",
        cy: "17",
        r: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10.5",
        y1: "17",
        x2: "17",
        y2: "17"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 5h-1a1 1 0 0 0 -1 1v4"
      }
    }), " "]);
  }
};