import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'LiveViewIcon',
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
      "class": "icon icon-tabler icon-tabler-live-view",
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
      "d": "M4 8v-2a2 2 0 0 1 2 -2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 16v2a2 2 0 0 0 2 2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 4h2a2 2 0 0 1 2 2v2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 20h2a2 2 0 0 0 2 -2v-2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "11",
      "x2": "12",
      "y2": "11.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"
    }, null), _createTextVNode(" ")]);
  }

};