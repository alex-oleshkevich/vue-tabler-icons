import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CalendarTimeIcon',
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
      "class": "icon icon-tabler icon-tabler-calendar-time"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "18",
        "cy": "18",
        "r": "4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M15 3v4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7 3v4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 11h16"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 16.496v1.504l1 1"
      }
    }), " "]);
  }

};