import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DeviceGamepadIcon',
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
      "class": "icon icon-tabler icon-tabler-device-gamepad",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "2",
      "y": "6",
      "width": "20",
      "height": "12",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 12h4m-2 -2v4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "11",
      "x2": "15",
      "y2": "11.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "13",
      "x2": "18",
      "y2": "13.01"
    }, null), _createTextVNode(" ")]);
  }

};