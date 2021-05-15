import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ToolsKitchenIcon',
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
      "class": "icon icon-tabler icon-tabler-tools-kitchen",
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
      "d": "M4 3h8l-1 9h-6z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 18h2v3h-2z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 15v6h-1v-3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "12",
      "x2": "8",
      "y2": "18"
    }, null), _createTextVNode(" ")]);
  }

};