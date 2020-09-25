import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MoodBoyIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-boy"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.5 16a3.5 3.5 0 0 0 5 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8.5 2c1.5 1 2.5 3.5 2.5 5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12.5 2c1.5 2 2 3.5 2 5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "12",
        x2: "9.01",
        y2: "12"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "12",
        x2: "15.01",
        y2: "12"
      }
    }), " "]);
  }
};