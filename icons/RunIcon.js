import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RunIcon',
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
      "class": "icon icon-tabler icon-tabler-run",
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
      "cx": "13",
      "cy": "4",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 17l5 1l.75 -1.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 21l0 -4l-4 -3l1 -6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 12l0 -3l5 -1l3 3l3 1"
    }, null), _createTextVNode(" ")]);
  }

};