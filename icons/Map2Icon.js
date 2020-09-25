import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Map2Icon',
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
      "class": "icon icon-tabler icon-tabler-map-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "6",
        x2: "18",
        y2: "6.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "4",
        x2: "9",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "15",
        x2: "15",
        y2: "20"
      }
    }), " "]);
  }
};