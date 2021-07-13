import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AppleIcon',
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
      "class": "icon icon-tabler icon-tabler-apple"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "14",
        "r": "7"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10 10.5c1.333 .667 2.667 .667 4 0"
      }
    }), " "]);
  }

};