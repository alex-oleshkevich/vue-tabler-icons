import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BinaryIcon',
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
      "class": "icon icon-tabler icon-tabler-binary"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 10v-5h-1m8 14v-5h-1"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "15",
        "y": "5",
        "width": "3",
        "height": "5",
        "rx": ".5"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "10",
        "y": "14",
        "width": "3",
        "height": "5",
        "rx": ".5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 10h.01m-.01 9h.01"
      }
    }), " "]);
  }

};