import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ShieldOffIcon',
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
      "class": "icon icon-tabler icon-tabler-shield-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "21",
        y2: "21"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17.669 17.669a12 12 0 0 1 -5.669 3.331a12 12 0 0 1 -8.5 -15c.797 .036 1.589 0 2.366 -.126m3.092 -.912a12 12 0 0 0 3.042 -1.962a12 12 0 0 0 8.5 3a12 12 0 0 1 -1.117 9.379"
      }
    }), " "]);
  }
};