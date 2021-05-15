import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TrashOffIcon',
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
      "class": "icon icon-tabler icon-tabler-trash-off",
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
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 7h3m4 0h9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "11",
      "x2": "10",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "14",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18.384",
      "y1": "14.373",
      "x2": "19",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
    }, null), _createTextVNode(" ")]);
  }

};