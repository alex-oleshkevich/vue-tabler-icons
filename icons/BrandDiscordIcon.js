import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandDiscordIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-discord"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "9",
        cy: "12",
        r: "1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "15",
        cy: "12",
        r: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7.5 7.5c3.5-1 5.5-1 9 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 16.5c3.5 1 6.5 1 10 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"
      }
    }), " "]);
  }
};