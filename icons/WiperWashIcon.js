import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'WiperWashIcon',
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
      "class": "icon icon-tabler icon-tabler-wiper-wash",
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
      "cy": "20",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "20",
      "x2": "12",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 6a4 4 0 0 1 .4 -1.8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 2.1a4 4 0 0 1 2 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 6a4 4 0 0 0 -.4 -1.8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 6a4 4 0 0 1 .4 -1.8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 2.1a4 4 0 0 1 2 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 6a4 4 0 0 0 -.4 -1.8"
    }, null), _createTextVNode(" ")]);
  }

};