import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RulerIcon',
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
      "class": "icon icon-tabler icon-tabler-ruler",
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
      "d": "M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "8",
      "x2": "6",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "12",
      "x2": "7",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "16",
      "x2": "6",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "4",
      "x2": "8",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "12 4 12 7 "
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "16 4 16 6 "
    }, null), _createTextVNode(" ")]);
  }

};