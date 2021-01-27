import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChargingPileIcon',
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
      "class": "icon icon-tabler icon-tabler-charging-pile"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "7",
        x2: "17",
        y2: "8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 11.5l-1.5 2.5h3l-1.5 2.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "20",
        x2: "15",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "8",
        x2: "14",
        y2: "8"
      }
    }), " "]);
  }
};