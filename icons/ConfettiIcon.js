import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ConfettiIcon',
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
    const data = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    }; // const size = parseInt(ctx.props.size) + 'px';
    // const attrs = ctx.data.attrs || {};
    // attrs.width = attrs.width || size;
    // attrs.height = attrs.height || size;
    // ctx.data.attrs = attrs;

    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-confetti",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctx.data), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 5h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 4v2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11.5 4l-.5 2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 5h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 4v2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 9l-1 1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 13l2 -.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 19h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 18v2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"
    }, null), _createTextVNode(" ")]);
  }

};