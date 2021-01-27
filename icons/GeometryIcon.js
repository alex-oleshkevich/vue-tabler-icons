import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'GeometryIcon',
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
      "class": "icon icon-tabler icon-tabler-geometry"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "7",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 5v-2"
      }
    }), " "]);
  }
};