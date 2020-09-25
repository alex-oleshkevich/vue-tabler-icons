import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BallBasketballIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-basketball"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5.65",
        y1: "5.65",
        x2: "18.35",
        y2: "18.35"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5.65",
        y1: "18.35",
        x2: "18.35",
        y2: "5.65"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 3a9 9 0 0 0 9 9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 12a9 9 0 0 1 9 9"
      }
    }), " "]);
  }
};