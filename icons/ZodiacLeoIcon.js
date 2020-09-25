import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ZodiacLeoIcon',
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
      "class": "icon icon-tabler icon-tabler-zodiac-leo"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 17a4 4 0 1 0 8 0"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "6",
        cy: "16",
        r: "3"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "11",
        cy: "7",
        r: "4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 7c0 3 2 5 2 9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 7c0 4-2 6-2 10"
      }
    }), " "]);
  }
};