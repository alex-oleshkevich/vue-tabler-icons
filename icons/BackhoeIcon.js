import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BackhoeIcon',
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
      "class": "icon icon-tabler icon-tabler-backhoe",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "4",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "13",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "19",
      "x2": "4",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "15",
      "x2": "13",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 12v-5h2a3 3 0 0 1 3 3v5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 15v-2a1 1 0 0 1 1 -1h7"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21.12 9.88l-3.12 -4.88l-5 5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z"
    }, null), _createTextVNode(" ")]);
  }

};