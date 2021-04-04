import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChartArrowsVerticalIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(h, ctx) {
    const size = parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-chart-arrows-vertical"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 21v-14"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 15l3 -3l3 3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 10l3 -3l3 3"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "21",
        "x2": "21",
        "y2": "21"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "21",
        "x2": "12",
        "y2": "12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 6l3 -3l3 3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 21v-18"
      }
    }), " "]);
  }

};