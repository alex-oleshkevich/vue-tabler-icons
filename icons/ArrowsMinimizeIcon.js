import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowsMinimizeIcon',
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
      "class": "icon icon-tabler icon-tabler-arrows-minimize"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "5 9 9 9 9 5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "9",
        y2: "9"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "5 15 9 15 9 19"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "9",
        y2: "15"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "19 9 15 9 15 5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "21",
        y2: "3"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "19 15 15 15 15 19"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "15",
        x2: "21",
        y2: "21"
      }
    }), " "]);
  }
};