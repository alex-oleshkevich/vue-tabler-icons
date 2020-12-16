import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandDockerIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-docker"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1.002 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 10h3v3h-3z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 10h3v3h-3z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 10h3v3h-3z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 7h3v3h-3z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 7h3v3h-3z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 4h3v3h-3z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4.571 18.001c1.5 0 2.047 -.074 2.958 -.78"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10",
        y2: "16.01"
      }
    }), " "]);
  }
};