import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ToolsIcon',
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
      "class": "icon icon-tabler icon-tabler-tools",
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
      "d": "M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14.5",
      "y1": "5.5",
      "x2": "18.5",
      "y2": "9.5"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "12 8 7 3 3 7 8 12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "8",
      "x2": "5.5",
      "y2": "9.5"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "16 12 21 17 17 21 12 16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "17",
      "x2": "14.5",
      "y2": "18.5"
    }, null), _createTextVNode(" ")]);
  }

};