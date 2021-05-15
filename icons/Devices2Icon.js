import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'Devices2Icon',
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
      "class": "icon icon-tabler icon-tabler-devices-2",
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
      "d": "M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "13",
      "y": "4",
      "width": "8",
      "height": "16",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "19",
      "x2": "10",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "8",
      "x2": "17",
      "y2": "8.01"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "17",
      "cy": "16",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "15",
      "x2": "9",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }

};