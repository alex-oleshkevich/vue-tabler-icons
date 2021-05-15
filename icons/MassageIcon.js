import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MassageIcon',
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
      "class": "icon icon-tabler icon-tabler-massage",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "4",
      "cy": "17",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "9",
      "cy": "5",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 22l4 -2v-3h12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 20h9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 14l3 -2l1 -4c3 1 3 4 3 6"
    }, null), _createTextVNode(" ")]);
  }

};