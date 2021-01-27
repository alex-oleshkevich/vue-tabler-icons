import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CalendarOffIcon',
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
      "class": "icon icon-tabler icon-tabler-calendar-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "3",
        x2: "16",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "3",
        x2: "8",
        y2: "4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 11h7m4 0h5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "15",
        x2: "12",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "18"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "21",
        y2: "21"
      }
    }), " "]);
  }
};