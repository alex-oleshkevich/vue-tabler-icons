import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CalendarOffIcon',
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
      "class": "icon icon-tabler icon-tabler-calendar-off",
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
      "d": "M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "3",
      "x2": "16",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "3",
      "x2": "8",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 11h7m4 0h5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "15",
      "x2": "12",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "15",
      "x2": "12",
      "y2": "18"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }

};