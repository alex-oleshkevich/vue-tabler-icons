import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MassageIcon',
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
      "class": "icon icon-tabler icon-tabler-massage"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "4",
        "cy": "17",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "9",
        "cy": "5",
        "r": "1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 22l4 -2v-3h12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11 20h9"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 14l3 -2l1 -4c3 1 3 4 3 6"
      }
    }), " "]);
  }

};