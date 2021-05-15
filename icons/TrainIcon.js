import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TrainIcon',
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
      "class": "icon icon-tabler icon-tabler-train",
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
      "d": "M21 13c0 -3.87 -3.37 -7 -10 -7h-8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 15h16a2 2 0 0 0 2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 6v5h17.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "10",
      "x2": "3",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "11",
      "x2": "8",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "11",
      "x2": "13",
      "y2": "6.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "19",
      "x2": "21",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }

};