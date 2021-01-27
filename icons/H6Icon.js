import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'H6Icon',
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
      "class": "icon icon-tabler icon-tabler-h-6"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        transform: "rotate(180 19 16)",
        cx: "19",
        cy: "16",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M21 12a2 2 0 1 0 -4 0v4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 6v12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 6v12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 18h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 18h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 12h8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 6h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 6h2"
      }
    }), " "]);
  }
};