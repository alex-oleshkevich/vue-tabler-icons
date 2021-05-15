import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BallAmericanFootballIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-american-football",
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
      "x1": "15",
      "y1": "9",
      "x2": "9",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "12",
      "x2": "12",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "10",
      "x2": "14",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 21a5 5 0 0 0 -5 -5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 3a5 5 0 0 0 5 5"
    }, null), _createTextVNode(" ")]);
  }

};