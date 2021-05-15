import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'Plant2Icon',
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
      "class": "icon icon-tabler icon-tabler-plant-2",
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
      "d": "M2 9a10 10 0 1 0 20 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 19a10 10 0 0 1 10 -10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M2 9a10 10 0 0 1 10 10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 4a9.7 9.7 0 0 1 2.99 7.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"
    }, null), _createTextVNode(" ")]);
  }

};