import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BuildingFortressIcon',
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
      "class": "icon icon-tabler icon-tabler-building-fortress"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 7h0v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 10h0v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 13h0v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 7h0v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 10h0v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 13h0v.01"
      }
    }), " "]);
  }
};