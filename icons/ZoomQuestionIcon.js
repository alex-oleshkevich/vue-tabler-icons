import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ZoomQuestionIcon',
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
      "class": "icon icon-tabler icon-tabler-zoom-question"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "10",
        "cy": "10",
        "r": "7"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 21l-6 -6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "10",
        "y1": "13",
        "x2": "10",
        "y2": "13.01"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 10a1.5 1.5 0 1 0 -1.14 -2.474"
      }
    }), " "]);
  }

};