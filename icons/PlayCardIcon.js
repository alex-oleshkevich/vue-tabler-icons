import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PlayCardIcon',
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
      "class": "icon icon-tabler icon-tabler-play-card"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "transform": "rotate(90 12 12)",
        "x": "3",
        "y": "5",
        "width": "18",
        "height": "14",
        "rx": "2"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "8",
        "y1": "6",
        "x2": "8.01",
        "y2": "6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "16",
        "y1": "18",
        "x2": "16.01",
        "y2": "18"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 16l-3 -4l3 -4l3 4z"
      }
    }), " "]);
  }

};