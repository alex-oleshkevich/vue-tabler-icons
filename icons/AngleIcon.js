import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AngleIcon',
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
      "class": "icon icon-tabler icon-tabler-angle"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M21 19h-18l9 -15"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20.615 15.171h.015"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19.515 11.771h.015"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17.715 8.671h.015"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15.415 5.971h.015"
      }
    }), " "]);
  }

};