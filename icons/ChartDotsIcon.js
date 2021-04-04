import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChartDotsIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-dots"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 3v18h18"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "9",
        "cy": "9",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19",
        "cy": "7",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "14",
        "cy": "15",
        "r": "2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10.16",
        "y1": "10.62",
        "x2": "12.5",
        "y2": "13.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15.088 13.328l2.837 -4.586"
      }
    }), " "]);
  }

};