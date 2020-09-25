import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'HeadphonesOffIcon',
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
      "class": "icon icon-tabler icon-tabler-headphones-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "21",
        y2: "21"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "4",
        y: "13",
        width: "5",
        height: "7",
        rx: "2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 13h1a2 2 0 0 1 2 2v1m-.589 3.417c-.361.36-.86.583-1.411.583h-1a2 2 0 0 1 -2 -2v-3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 15v-3c0 -2.21 .896 -4.21 2.344 -5.658m2.369 -1.638a8 8 0 0 1 11.287 7.296v3"
      }
    }), " "]);
  }
};