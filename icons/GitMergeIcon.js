import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GitMergeIcon',
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
      "class": "icon icon-tabler icon-tabler-git-merge"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "7",
        "cy": "18",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "7",
        "cy": "6",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "17",
        "cy": "12",
        "r": "2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "8",
        "x2": "7",
        "y2": "16"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 8a4 4 0 0 0 4 4h4"
      }
    }), " "]);
  }

};