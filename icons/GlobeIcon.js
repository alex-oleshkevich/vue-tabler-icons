import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'GlobeIcon',
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
      "class": "icon icon-tabler icon-tabler-globe",
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
      "cx": "12",
      "cy": "10",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6.75 16a8.015 8.015 0 1 0 9.25 -13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "18",
      "x2": "12",
      "y2": "22"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "22",
      "x2": "16",
      "y2": "22"
    }, null), _createTextVNode(" ")]);
  }

};