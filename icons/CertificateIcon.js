import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CertificateIcon',
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
      "class": "icon icon-tabler icon-tabler-certificate"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "15",
        cy: "15",
        r: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 17.5v4.5l2 -1.5l2 1.5v-4.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "9",
        x2: "18",
        y2: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "12",
        x2: "9",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "15",
        x2: "8",
        y2: "15"
      }
    }), " "]);
  }
};