import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ChargingPileIcon',
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
      "class": "icon icon-tabler icon-tabler-charging-pile",
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
      "x1": "18",
      "y1": "7",
      "x2": "17",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 11.5l-1.5 2.5h3l-1.5 2.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "20",
      "x2": "15",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "8",
      "x2": "14",
      "y2": "8"
    }, null), _createTextVNode(" ")]);
  }

};