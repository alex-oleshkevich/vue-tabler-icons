import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TwoFactorAuthIcon',
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
      "class": "icon icon-tabler icon-tabler-2fa"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 16v-8h4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "12",
        x2: "13",
        y2: "12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 16v-6a2 2 0 0 1 4 0v6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "13",
        x2: "21",
        y2: "13"
      }
    }), " "]);
  }
};