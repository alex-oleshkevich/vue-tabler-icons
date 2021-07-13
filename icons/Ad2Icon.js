import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'Ad2Icon',
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
      "class": "icon icon-tabler icon-tabler-ad-2"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11.933 5h-6.933v16h13v-8"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 17h-5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 13h5v-4h-5z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 5v-2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 6l2 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 9h2"
      }
    }), " "]);
  }

};