import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CurrencyYenIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-yen"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 19v-7l-5 -7m10 0l-5 7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "17",
        x2: "16",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "16",
        y2: "13"
      }
    }), " "]);
  }
};