import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CreditCardOffIcon',
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
      "class": "icon icon-tabler icon-tabler-credit-card-off",
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
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "11",
      "x2": "11",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "11",
      "x2": "21",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "15",
      "x2": "7.01",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "15",
      "x2": "13",
      "y2": "15"
    }, null), _createTextVNode(" ")]);
  }

};