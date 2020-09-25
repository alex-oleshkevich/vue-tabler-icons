import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ForkliftIcon',
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
      "class": "icon icon-tabler icon-tabler-forklift"
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
        cx: "14",
        cy: "17",
        r: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "17",
        x2: "12",
        y2: "17"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 17v-6h13v6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 11v-4h4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 11v-6h4l3 6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M22 15h-3v-10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "19",
        y2: "13"
      }
    }), " "]);
  }
};