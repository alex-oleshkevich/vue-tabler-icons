import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'KarateIcon',
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
      "class": "icon icon-tabler icon-tabler-karate"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "18",
        cy: "4",
        r: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 9l4.5 1l3 2.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 21v-8l3-5.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 4.5l4 2l4 1l4 3.5l-2 3.5"
      }
    }), " "]);
  }
};