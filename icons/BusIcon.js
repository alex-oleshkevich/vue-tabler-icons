import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BusIcon',
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
      "class": "icon icon-tabler icon-tabler-bus"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "6",
        cy: "17",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "18",
        cy: "17",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "16 5 17.5 12 22 12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "2",
        y1: "10",
        x2: "17",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "5",
        x2: "7",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "10"
      }
    }), " "]);
  }
};