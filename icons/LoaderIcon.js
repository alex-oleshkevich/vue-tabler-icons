import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'LoaderIcon',
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
      "class": "icon icon-tabler icon-tabler-loader"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16.25",
        y1: "7.75",
        x2: "18.4",
        y2: "5.6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16.25",
        y1: "16.25",
        x2: "18.4",
        y2: "18.4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "21"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.75",
        y1: "16.25",
        x2: "5.6",
        y2: "18.4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.75",
        y1: "7.75",
        x2: "5.6",
        y2: "5.6"
      }
    }), " "]);
  }
};