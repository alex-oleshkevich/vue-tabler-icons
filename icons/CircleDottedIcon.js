import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CircleDottedIcon',
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
      "class": "icon icon-tabler icon-tabler-circle-dotted"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.5",
        y1: "4.21",
        x2: "7.5",
        y2: "4.22"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4.21",
        y1: "7.5",
        x2: "4.21",
        y2: "7.51"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "3",
        y2: "12.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4.21",
        y1: "16.5",
        x2: "4.21",
        y2: "16.51"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.5",
        y1: "19.79",
        x2: "7.5",
        y2: "19.8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "21.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16.5",
        y1: "19.79",
        x2: "16.5",
        y2: "19.8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19.79",
        y1: "16.5",
        x2: "19.79",
        y2: "16.51"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "21",
        y2: "12.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19.79",
        y1: "7.5",
        x2: "19.79",
        y2: "7.51"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16.5",
        y1: "4.21",
        x2: "16.5",
        y2: "4.22"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "3.01"
      }
    }), " "]);
  }
};