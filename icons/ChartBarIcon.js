import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChartBarIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-bar"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "12",
        "width": "6",
        "height": "8",
        "rx": "1"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "9",
        "y": "8",
        "width": "6",
        "height": "12",
        "rx": "1"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "15",
        "y": "4",
        "width": "6",
        "height": "16",
        "rx": "1"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "4",
        "y1": "20",
        "x2": "18",
        "y2": "20"
      }
    }), " "]);
  }

};