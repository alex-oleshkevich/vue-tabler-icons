import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Battery4Icon',
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
      "class": "icon icon-tabler icon-tabler-battery-4"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "10",
        x2: "7",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "10",
        x2: "10",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "10",
        x2: "13",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "10",
        x2: "16",
        y2: "14"
      }
    }), " "]);
  }
};