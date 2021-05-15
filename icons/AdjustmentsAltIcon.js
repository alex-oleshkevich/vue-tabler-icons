import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'AdjustmentsAltIcon',
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
      "class": "icon icon-tabler icon-tabler-adjustments-alt",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "4",
      "y": "8",
      "width": "4",
      "height": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "4",
      "x2": "6",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "12",
      "x2": "6",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "10",
      "y": "14",
      "width": "4",
      "height": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "4",
      "x2": "12",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "18",
      "x2": "12",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "16",
      "y": "5",
      "width": "4",
      "height": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "4",
      "x2": "18",
      "y2": "5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "9",
      "x2": "18",
      "y2": "20"
    }, null), _createTextVNode(" ")]);
  }

};