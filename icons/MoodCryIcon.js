import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MoodCryIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-cry"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "10",
        x2: "9.01",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "10",
        x2: "15.01",
        y2: "10"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.5 15.25a3.5 3.5 0 0 1 5 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c0.69 0 1.36 -.076 2 -.222"
      }
    }), " "]);
  }
};