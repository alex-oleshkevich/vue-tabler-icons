import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'PaintIcon',
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
      "class": "icon icon-tabler icon-tabler-paint",
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
      "x": "5",
      "y": "3",
      "width": "14",
      "height": "6",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "10",
      "y": "15",
      "width": "4",
      "height": "6",
      "rx": "1"
    }, null), _createTextVNode(" ")]);
  }

};