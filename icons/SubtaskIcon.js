import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SubtaskIcon',
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
      "class": "icon icon-tabler icon-tabler-subtask",
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
      "x1": "6",
      "y1": "9",
      "x2": "12",
      "y2": "9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "5",
      "x2": "8",
      "y2": "5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 5v11a1 1 0 0 0 1 1h5"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "12",
      "y": "7",
      "width": "8",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "12",
      "y": "15",
      "width": "8",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode(" ")]);
  }

};