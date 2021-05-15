import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'GlassFullIcon',
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
      "class": "icon icon-tabler icon-tabler-glass-full",
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
      "x1": "8",
      "y1": "21",
      "x2": "16",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "15",
      "x2": "12",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 10a5.001 5.001 0 0 1 6 0a5.001 5.001 0 0 0 6 0"
    }, null), _createTextVNode(" ")]);
  }

};