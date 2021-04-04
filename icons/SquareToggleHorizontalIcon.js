import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SquareToggleHorizontalIcon',
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
      "class": "icon icon-tabler icon-tabler-square-toggle-horizontal"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M22 12h-20"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 20a2 2 0 0 0 2 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4 18a2 2 0 0 0 2 2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "14",
        "y1": "20",
        "x2": "10",
        "y2": "20"
      }
    }), " "]);
  }

};