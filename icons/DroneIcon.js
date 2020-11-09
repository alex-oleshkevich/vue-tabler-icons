import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DroneIcon',
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
      "class": "icon icon-tabler icon-tabler-drone"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 10h4v4h-4z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "10",
        x2: "6.5",
        y2: "6.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 10l3.5-3.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "14",
        x2: "17.5",
        y2: "17.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "14",
        x2: "6.5",
        y2: "17.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 14.04a3.5 3.5 0 1 0 3.96 3.96"
      }
    }), " "]);
  }
};