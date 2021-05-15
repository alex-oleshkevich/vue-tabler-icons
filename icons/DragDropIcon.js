import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DragDropIcon',
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
    const data = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    }; // const size = parseInt(ctx.props.size) + 'px';
    // const attrs = ctx.data.attrs || {};
    // attrs.width = attrs.width || size;
    // attrs.height = attrs.height || size;
    // ctx.data.attrs = attrs;

    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-drag-drop",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctx.data), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 13l9 3l-4 2l-2 4l-3 -9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "3",
      "y2": "3.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "3",
      "x2": "7",
      "y2": "3.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "3",
      "x2": "11",
      "y2": "3.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "3",
      "x2": "15",
      "y2": "3.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "7",
      "x2": "3",
      "y2": "7.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "11",
      "x2": "3",
      "y2": "11.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "15",
      "x2": "3",
      "y2": "15.01"
    }, null), _createTextVNode(" ")]);
  }

};