import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PhoneCallingIcon',
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
      "class": "icon icon-tabler icon-tabler-phone-calling"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "7",
        x2: "15",
        y2: "7.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "7",
        x2: "18",
        y2: "7.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "21",
        y1: "7",
        x2: "21",
        y2: "7.01"
      }
    }), " "]);
  }
};