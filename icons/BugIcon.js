import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BugIcon',
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
      "class": "icon icon-tabler icon-tabler-bug",
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
      "d": "M9 9v-1a3 3 0 0 1 6 0v1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "13",
      "x2": "7",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "13",
      "x2": "21",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "20",
      "x2": "12",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "19",
      "x2": "7.35",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "19",
      "x2": "16.65",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "7",
      "x2": "7.75",
      "y2": "9.4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "7",
      "x2": "16.25",
      "y2": "9.4"
    }, null), _createTextVNode(" ")]);
  }

};