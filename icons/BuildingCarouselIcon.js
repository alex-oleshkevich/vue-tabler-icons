import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BuildingCarouselIcon',
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
      "class": "icon icon-tabler icon-tabler-building-carousel"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "12",
        "r": "6"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "5",
        "cy": "8",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "4",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19",
        "cy": "8",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "5",
        "cy": "16",
        "r": "2"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19",
        "cy": "16",
        "r": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 22l4 -10l4 10"
      }
    }), " "]);
  }

};