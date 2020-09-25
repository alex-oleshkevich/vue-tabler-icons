import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BikeIcon',
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
      "class": "icon icon-tabler icon-tabler-bike"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "5",
        cy: "18",
        r: "3"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "19",
        cy: "18",
        r: "3"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "12 19 12 15 9 12 14 8 16 11 19 11"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "5",
        r: "1"
      }
    }), " "]);
  }
};