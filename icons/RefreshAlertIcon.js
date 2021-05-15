import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RefreshAlertIcon',
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
      "class": "icon icon-tabler icon-tabler-refresh-alert",
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
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "9",
      "x2": "12",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "15",
      "x2": "12.01",
      "y2": "15"
    }, null), _createTextVNode(" ")]);
  }

};