import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AlarmIcon',
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
      "class": "icon icon-tabler icon-tabler-alarm"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "13",
        "r": "7"
      }
    }), "   ", h("polyline", {
      "attrs": {
        "points": "12 10 12 13 14 13"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "4",
        "x2": "4.25",
        "y2": "6"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "17",
        "y1": "4",
        "x2": "19.75",
        "y2": "6"
      }
    }), " "]);
  }

};