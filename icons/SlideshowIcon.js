import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SlideshowIcon',
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
      "class": "icon icon-tabler icon-tabler-slideshow",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "6",
      "x2": "15.01",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "3",
      "width": "18",
      "height": "14",
      "rx": "3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 13l4 -4a3 5 0 0 1 3 0l4 4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 12l2 -2a3 5 0 0 1 3 0l3 3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "21",
      "x2": "8.01",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "21",
      "x2": "12.01",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "21",
      "x2": "16.01",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }

};