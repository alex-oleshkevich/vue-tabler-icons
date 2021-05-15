import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SquareToggleHorizontalIcon',
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
      "class": "icon icon-tabler icon-tabler-square-toggle-horizontal",
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
      "d": "M22 12h-20"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 20a2 2 0 0 0 2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 18a2 2 0 0 0 2 2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "20",
      "x2": "10",
      "y2": "20"
    }, null), _createTextVNode(" ")]);
  }

};