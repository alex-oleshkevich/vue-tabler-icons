import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DevicesPcIcon',
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
      "class": "icon icon-tabler icon-tabler-devices-pc",
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
      "d": "M3 5h6v14h-6z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 9h10v7h-10z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 19h6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 16v3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 13v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 16v.01"
    }, null), _createTextVNode(" ")]);
  }

};