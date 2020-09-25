import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BorderInnerIcon',
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
      "class": "icon icon-tabler icon-tabler-border-inner"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "12",
        x2: "20",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "4",
        x2: "4",
        y2: "4.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "4",
        x2: "8",
        y2: "4.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "4",
        x2: "16",
        y2: "4.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "4",
        x2: "20",
        y2: "4.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "8",
        x2: "4",
        y2: "8.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "8",
        x2: "20",
        y2: "8.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "16",
        x2: "4",
        y2: "16.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "16",
        x2: "20",
        y2: "16.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "20",
        x2: "4",
        y2: "20.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "20",
        x2: "8",
        y2: "20.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "20",
        x2: "16",
        y2: "20.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "20",
        y1: "20",
        x2: "20",
        y2: "20.01"
      }
    }), " "]);
  }
};