import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'UsersIcon',
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
      "class": "icon icon-tabler icon-tabler-users",
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
      "cx": "9",
      "cy": "7",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 3.13a4 4 0 0 1 0 7.75"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 21v-2a4 4 0 0 0 -3 -3.85"
    }, null), _createTextVNode(" ")]);
  }

};