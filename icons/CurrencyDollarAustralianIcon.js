import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CurrencyDollarAustralianIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-dollar-australian",
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
      "d": "M3 18l3.279 -11.476a0.75 .75 0 0 1 1.442 0l3.279 11.476"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 20v-2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 6v-2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4.5 14h5"
    }, null), _createTextVNode(" ")]);
  }

};