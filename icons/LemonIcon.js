import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'LemonIcon',
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
      "class": "icon icon-tabler icon-tabler-lemon",
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
      "d": "M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10.464 10.464l4.597 4.597"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10.464 10.464v6.364"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10.464 10.464h6.364"
    }, null), _createTextVNode(" ")]);
  }

};