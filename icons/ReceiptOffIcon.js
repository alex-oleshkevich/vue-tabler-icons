import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ReceiptOffIcon',
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
      "class": "icon icon-tabler icon-tabler-receipt-off",
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
      "d": "M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "7",
      "x2": "15",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "11",
      "x2": "11",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "15",
      "x2": "15",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "11",
      "x2": "15",
      "y2": "11.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }

};