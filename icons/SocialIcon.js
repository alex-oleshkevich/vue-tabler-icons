import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialIcon',
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
      "class": "icon icon-tabler icon-tabler-social"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "5",
        cy: "19",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "19",
        cy: "19",
        r: "2"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "14",
        r: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "7",
        x2: "12",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6.7",
        y1: "17.8",
        x2: "9.5",
        y2: "15.8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17.3",
        y1: "17.8",
        x2: "14.5",
        y2: "15.8"
      }
    }), " "]);
  }
};