import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CurrencyBahrainiIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-bahraini",
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
      "d": "M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 19.01v-.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 15.01v-.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 15h2.004a2 2 0 0 0 1.649 -3.131l-2.653 -3.869"
    }, null), _createTextVNode(" ")]);
  }

};