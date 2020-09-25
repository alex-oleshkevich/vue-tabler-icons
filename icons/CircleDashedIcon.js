import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CircleDashedIcon',
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
      "class": "icon icon-tabler icon-tabler-circle-dashed"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8.56 3.69a9 9 0 0 0 -2.92 1.95"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.69 8.56a9 9 0 0 0 -.69 3.44"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.69 15.44a9 9 0 0 0 1.95 2.92"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8.56 20.31a9 9 0 0 0 3.44 .69"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15.44 20.31a9 9 0 0 0 2.92 -1.95"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20.31 15.44a9 9 0 0 0 .69 -3.44"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20.31 8.56a9 9 0 0 0 -1.95 -2.92"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15.44 3.69a9 9 0 0 0 -3.44 -.69"
      }
    }), " "]);
  }
};