import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DisabledIcon',
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
      "class": "icon icon-tabler icon-tabler-disabled",
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
      "cx": "11",
      "cy": "5",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "11 7 11 15 15 15 19 20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "11",
      "x2": "16",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 11.5a5 5 0 1 0 6 7.5"
    }, null), _createTextVNode(" ")]);
  }

};