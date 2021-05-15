import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'AdIcon',
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
      "class": "icon icon-tabler icon-tabler-ad",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "5",
      "width": "18",
      "height": "14",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 15v-4a2 2 0 0 1 4 0v4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "13",
      "x2": "11",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5"
    }, null), _createTextVNode(" ")]);
  }

};