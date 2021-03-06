import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FileAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-file-analytics"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M14 3v4a1 1 0 0 0 1 1h4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "9",
        "y1": "17",
        "x2": "9",
        "y2": "12"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "12",
        "y1": "17",
        "x2": "12",
        "y2": "16"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "17",
        "x2": "15",
        "y2": "14"
      }
    }), " "]);
  }

};