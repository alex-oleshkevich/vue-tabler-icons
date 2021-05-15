import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DeviceDesktopAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-device-desktop-analytics",
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
      "x": "3",
      "y": "4",
      "width": "18",
      "height": "12",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 20h10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 16v4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 16v4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 12v-4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 12v-1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 12v-2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 12v-1"
    }, null), _createTextVNode(" ")]);
  }

};