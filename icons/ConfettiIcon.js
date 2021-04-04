import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ConfettiIcon',
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
      "class": "icon icon-tabler icon-tabler-confetti"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 5h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 4v2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11.5 4l-.5 2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 5h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 4v2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 9l-1 1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 13l2 -.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 19h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 18v2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"
      }
    }), " "]);
  }

};