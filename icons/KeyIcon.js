import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'KeyIcon',
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
      "class": "icon icon-tabler icon-tabler-key",
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
      "cx": "8",
      "cy": "15",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10.85",
      "y1": "12.15",
      "x2": "19",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "5",
      "x2": "20",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "8",
      "x2": "17",
      "y2": "10"
    }, null), _createTextVNode(" ")]);
  }

};