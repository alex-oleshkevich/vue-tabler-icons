import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'UnlinkIcon',
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
      "class": "icon icon-tabler icon-tabler-unlink",
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
      "d": "M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "21",
      "x2": "16",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "16",
      "x2": "21",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "8",
      "x2": "5",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "3",
      "x2": "8",
      "y2": "5"
    }, null), _createTextVNode(" ")]);
  }

};