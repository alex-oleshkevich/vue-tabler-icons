import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MoodCrazyHappyIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-crazy-happy",
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
      "cx": "12",
      "cy": "12",
      "r": "9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "8.5",
      "x2": "10",
      "y2": "11.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 11.5l3 -3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "8.5",
      "x2": "17",
      "y2": "11.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 11.5l3 -3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.5 15a3.5 3.5 0 0 0 5 0"
    }, null), _createTextVNode(" ")]);
  }

};