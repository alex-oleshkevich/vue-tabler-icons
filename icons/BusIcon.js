import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BusIcon',
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
      "class": "icon icon-tabler icon-tabler-bus",
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
      "cx": "6",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "18",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "16 5 17.5 12 22 12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "2",
      "y1": "10",
      "x2": "17",
      "y2": "10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "5",
      "x2": "7",
      "y2": "10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "5",
      "x2": "12",
      "y2": "10"
    }, null), _createTextVNode(" ")]);
  }

};