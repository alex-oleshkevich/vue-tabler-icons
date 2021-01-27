import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'OldIcon',
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
      "class": "icon icon-tabler icon-tabler-old"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 21l-1 -4l-2 -3v-6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 14l-1 -3l4 -3l3 2l3 .5"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "8",
        cy: "4",
        r: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 17l-2 4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5"
      }
    }), " "]);
  }
};