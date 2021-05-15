import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ZodiacLeoIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(ctx) {
    const size = parseInt(ctx.$props.size) + 'px';
    const attrs = ctx.$data.attrs || {};
    const data = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    }; // const size = parseInt(ctx.props.size) + 'px';
    // const attrs = ctx.data.attrs || {};
    // attrs.width = attrs.width || size;
    // attrs.height = attrs.height || size;
    // ctx.data.attrs = attrs;

    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-zodiac-leo",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctx.data), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 17a4 4 0 1 0 8 0"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "6",
      "cy": "16",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "11",
      "cy": "7",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 7c0 3 2 5 2 9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 7c0 4 -2 6 -2 10"
    }, null), _createTextVNode(" ")]);
  }

};