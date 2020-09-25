import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'AccessPointOffIcon',
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
      "class": "icon icon-tabler icon-tabler-access-point-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "21",
        y2: "21"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14.828 9.172a4 4 0 0 1 1.172 2.828"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17.657 6.343a8 8 0 0 1 1.635 8.952"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.168 14.828a4 4 0 0 1 0 -5.656"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6.337 17.657a8 8 0 0 1 0 -11.314"
      }
    }), " "]);
  }
};