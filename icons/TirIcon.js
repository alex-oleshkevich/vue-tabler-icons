import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TirIcon',
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
      "class": "icon icon-tabler icon-tabler-tir",
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
      "cx": "5",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "17",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 18v-13h3"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "3 17 3 12 12 12"
    }, null), _createTextVNode(" ")]);
  }

};