import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FingerprintIcon',
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
      "class": "icon icon-tabler icon-tabler-fingerprint"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 11v2a14 14 0 0 0 2.5 8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 15a18 18 0 0 0 1.8 6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
      }
    }), " "]);
  }
};