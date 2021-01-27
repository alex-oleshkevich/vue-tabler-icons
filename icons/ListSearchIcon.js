import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ListSearchIcon',
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
      "class": "icon icon-tabler icon-tabler-list-search"
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
        r: "4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18.5 18.5l2.5 2.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 6h16"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 12h4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 18h4"
      }
    }), " "]);
  }
};