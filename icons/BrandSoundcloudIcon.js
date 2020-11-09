import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandSoundcloudIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-soundcloud"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "8",
        x2: "9",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "17",
        x2: "6",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "16",
        x2: "3",
        y2: "14"
      }
    }), " "]);
  }
};