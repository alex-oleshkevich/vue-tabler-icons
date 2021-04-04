import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ShadowOffIcon',
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
      "class": "icon icon-tabler icon-tabler-shadow-off"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 12h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 15h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 18h1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 9h4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 6h1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 3l18 18"
      }
    }), " "]);
  }

};