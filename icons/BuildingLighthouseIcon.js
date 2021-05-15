import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BuildingLighthouseIcon',
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
      "class": "icon icon-tabler icon-tabler-building-lighthouse",
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
      "d": "M12 3l2 3l2 15h-8l2 -15z"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "9",
      "x2": "16",
      "y2": "9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 11l2 -2l-2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 11l-2 -2l2 -2"
    }, null), _createTextVNode(" ")]);
  }

};