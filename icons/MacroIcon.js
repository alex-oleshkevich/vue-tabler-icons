import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MacroIcon',
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
      "class": "icon icon-tabler icon-tabler-macro",
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
      "d": "M6 15a6 6 0 1 0 12 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 15a6 6 0 0 0 -6 6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 21a6 6 0 0 0 -6 -6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 21v-10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z"
    }, null), _createTextVNode(" ")]);
  }

};