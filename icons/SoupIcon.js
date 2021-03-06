import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SoupIcon',
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
      "class": "icon icon-tabler icon-tabler-soup"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 19h18"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 8v-3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 5v3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 5v3"
      }
    }), " "]);
  }

};