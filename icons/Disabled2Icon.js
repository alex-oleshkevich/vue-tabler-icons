import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Disabled2Icon',
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
      "class": "icon icon-tabler icon-tabler-disabled-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "17",
        cy: "6",
        r: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 11a5 5 0 1 0 3.95 7.95"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 20l-4 -5h-4l3 -5l-4 -3l-4 1"
      }
    }), " "]);
  }
};