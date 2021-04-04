import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SquareRotatedOffIcon',
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
      "class": "icon icon-tabler icon-tabler-square-rotated-off"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16.964 16.952l-3.462 3.461c-.782 .783 -2.222 .783 -3.004 0l-6.911 -6.91c-.783 -.783 -.783 -2.223 0 -3.005l3.455 -3.456m2.003 -2.003l1.453 -1.452c.782 -.783 2.222 -.783 3.004 0l6.911 6.91c.783 .783 .783 2.223 0 3.005l-1.448 1.45"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 3l18 18"
      }
    }), " "]);
  }

};