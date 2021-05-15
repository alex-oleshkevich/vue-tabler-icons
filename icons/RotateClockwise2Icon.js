import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RotateClockwise2Icon',
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
    const ctxData = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    };
    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-rotate-clockwise-2",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctxData), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5.63",
      "y1": "7.16",
      "x2": "5.63",
      "y2": "7.17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4.06",
      "y1": "11",
      "x2": "4.06",
      "y2": "11.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4.63",
      "y1": "15.1",
      "x2": "4.63",
      "y2": "15.11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7.16",
      "y1": "18.37",
      "x2": "7.16",
      "y2": "18.38"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "19.94",
      "x2": "11",
      "y2": "19.95"
    }, null), _createTextVNode(" ")]);
  }

};