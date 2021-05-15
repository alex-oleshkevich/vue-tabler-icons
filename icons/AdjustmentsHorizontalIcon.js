import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'AdjustmentsHorizontalIcon',
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
      "class": "icon icon-tabler icon-tabler-adjustments-horizontal",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "14",
      "cy": "6",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "6",
      "x2": "12",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "6",
      "x2": "20",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "8",
      "cy": "12",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "12",
      "x2": "6",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "12",
      "x2": "20",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "17",
      "cy": "18",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "18",
      "x2": "15",
      "y2": "18"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "18",
      "x2": "20",
      "y2": "18"
    }, null), _createTextVNode(" ")]);
  }

};