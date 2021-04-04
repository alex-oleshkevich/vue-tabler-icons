import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MotorbikeIcon',
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
      "class": "icon icon-tabler icon-tabler-motorbike"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "5",
        "cy": "16",
        "r": "3"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "19",
        "cy": "16",
        "r": "3"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7.5 14h5l4 -4h-10.5m1.5 4l4 -4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 6h2l1.5 3l2 4"
      }
    }), " "]);
  }

};