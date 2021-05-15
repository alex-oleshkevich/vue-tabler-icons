import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'PhotoOffIcon',
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
      "class": "icon icon-tabler icon-tabler-photo-off",
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
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "8",
      "x2": "15.01",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2"
    }, null), _createTextVNode(" ")]);
  }

};