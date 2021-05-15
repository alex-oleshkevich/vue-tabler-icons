import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BorderStyleIcon',
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
      "class": "icon icon-tabler icon-tabler-border-style",
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
      "d": "M4 20v-14a2 2 0 0 1 2 -2h14"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 8v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 12v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 16v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 20v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 20v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 20v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 20v.01"
    }, null), _createTextVNode(" ")]);
  }

};