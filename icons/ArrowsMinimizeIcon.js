import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ArrowsMinimizeIcon',
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
      "class": "icon icon-tabler icon-tabler-arrows-minimize",
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
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "5 9 9 9 9 5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "9",
      "y2": "9"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "5 15 9 15 9 19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "21",
      "x2": "9",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "19 9 15 9 15 5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "9",
      "x2": "21",
      "y2": "3"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "19 15 15 15 15 19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "15",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }

};