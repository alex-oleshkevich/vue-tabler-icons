import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SectionIcon',
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
      "class": "icon icon-tabler icon-tabler-section",
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
      "d": "M20 20h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 20h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 20h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 20h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 20h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 4h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 4h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 4h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 4h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 4l0 0"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "4",
      "y": "8",
      "width": "16",
      "height": "8",
      "rx": "1"
    }, null), _createTextVNode(" ")]);
  }

};