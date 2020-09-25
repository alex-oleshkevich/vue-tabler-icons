import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CreditCardOffIcon',
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
      "class": "icon icon-tabler icon-tabler-credit-card-off"
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
    }), "   ", h("path", {
      attrs: {
        d: "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128.87 1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "11",
        x2: "11",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "11",
        x2: "21",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "15",
        x2: "7.01",
        y2: "15"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "15",
        x2: "13",
        y2: "15"
      }
    }), " "]);
  }
};