import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FileCertificateIcon',
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
      "class": "icon icon-tabler icon-tabler-file-certificate"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 3v4a1 1 0 0 0 1 1h4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "6",
        cy: "14",
        r: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
      }
    }), " "]);
  }
};