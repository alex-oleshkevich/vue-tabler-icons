import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SnowflakeIcon',
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
      "class": "icon icon-tabler icon-tabler-snowflake"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
        transform: "rotate(60 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
        transform: "rotate(120 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
        transform: "rotate(180 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
        transform: "rotate(240 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
        transform: "rotate(300 12 12)"
      }
    }), " "]);
  }
};