import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'VectorTriangleIcon',
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
      "class": "icon icon-tabler icon-tabler-vector-triangle",
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
      "x": "10",
      "y": "4",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "17",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "17",
      "y": "17",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6.5",
      "y1": "17.1",
      "x2": "11.5",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17.5",
      "y1": "17.1",
      "x2": "12.5",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "19",
      "x2": "17",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }

};