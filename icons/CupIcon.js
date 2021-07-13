import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CupIcon',
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
      "class": "icon icon-tabler icon-tabler-cup"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 11h14v-3h-14z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17.5 11l-1.5 10h-8l-1.5 -10"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 5v-2"
      }
    }), " "]);
  }

};