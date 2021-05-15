import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'FingerprintIcon',
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
      "class": "icon icon-tabler icon-tabler-fingerprint",
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
      "d": "M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 11v2a14 14 0 0 0 2.5 8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 15a18 18 0 0 0 1.8 6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
    }, null), _createTextVNode(" ")]);
  }

};