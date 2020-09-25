import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MarqueeIcon',
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
      "class": "icon icon-tabler icon-tabler-marquee"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 6a2 2 0 0 1 2 -2m3 0h1.5m3 0h1.5m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3v1.5m0 3a2 2 0 0 1 -2 2m-3 0h-1.5m-3 0h-1.5m-3 0a2 2 0 0 1 -2 -2m0 -3v-1.5m0 -3v-1.5m0 -3"
      }
    }), " "]);
  }
};