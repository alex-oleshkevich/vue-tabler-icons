import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BusinessplanIcon',
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
      "class": "icon icon-tabler icon-tabler-businessplan"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "     ", h("ellipse", {
      "attrs": {
        "cx": "16",
        "cy": "6",
        "rx": "5",
        "ry": "3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 15v1m0 -8v1"
      }
    }), " "]);
  }

};