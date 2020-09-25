import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandAndroidIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-android"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "10",
        x2: "4",
        y2: "16"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "10",
        x2: "20",
        y2: "16"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "3",
        x2: "9",
        y2: "5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "3",
        x2: "15",
        y2: "5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "18",
        x2: "9",
        y2: "21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "18",
        x2: "15",
        y2: "21"
      }
    }), " "]);
  }
};