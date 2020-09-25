import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrightnessDownIcon',
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
      "class": "icon icon-tabler icon-tabler-brightness-down"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "5.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "17",
        y2: "7.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19",
        y1: "12",
        x2: "19",
        y2: "12.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "17",
        y2: "17.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "19.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "17",
        x2: "7",
        y2: "17.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "5",
        y2: "12.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "7",
        y2: "7.01"
      }
    }), " "]);
  }
};