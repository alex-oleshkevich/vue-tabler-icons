import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'Map2Icon',
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
      "class": "icon icon-tabler icon-tabler-map-2",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "6",
      "x2": "18",
      "y2": "6.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "4",
      "x2": "9",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "15",
      "x2": "15",
      "y2": "20"
    }, null), _createTextVNode(" ")]);
  }

};