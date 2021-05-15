import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BinaryIcon',
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
      "class": "icon icon-tabler icon-tabler-binary",
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
      "d": "M11 10v-5h-1m8 14v-5h-1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "15",
      "y": "5",
      "width": "3",
      "height": "5",
      "rx": ".5"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "10",
      "y": "14",
      "width": "3",
      "height": "5",
      "rx": ".5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 10h.01m-.01 9h.01"
    }, null), _createTextVNode(" ")]);
  }

};