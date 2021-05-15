import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MusicIcon',
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
      "class": "icon icon-tabler icon-tabler-music",
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
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "16",
      "cy": "17",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "9 17 9 4 19 4 19 17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "8",
      "x2": "19",
      "y2": "8"
    }, null), _createTextVNode(" ")]);
  }

};