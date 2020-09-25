import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FiretruckIcon',
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
      "class": "icon icon-tabler icon-tabler-firetruck"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "5",
        cy: "17",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "17",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 18v-11h3"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "3 17 3 12 12 12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "21",
        y2: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "12",
        x2: "6",
        y2: "8"
      }
    }), " "]);
  }
};