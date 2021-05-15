import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrightnessDownIcon',
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
      "class": "icon icon-tabler icon-tabler-brightness-down",
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
      "cx": "12",
      "cy": "12",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "5",
      "x2": "12",
      "y2": "5.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "7",
      "x2": "17",
      "y2": "7.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "12",
      "x2": "19",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "17",
      "x2": "17",
      "y2": "17.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "19",
      "x2": "12",
      "y2": "19.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "17",
      "x2": "7",
      "y2": "17.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5",
      "y1": "12",
      "x2": "5",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "7",
      "x2": "7",
      "y2": "7.01"
    }, null), _createTextVNode(" ")]);
  }

};