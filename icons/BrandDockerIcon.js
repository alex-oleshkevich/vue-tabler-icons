import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrandDockerIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-docker",
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
      "d": "M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1.002 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 10h3v3h-3z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 10h3v3h-3z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 10h3v3h-3z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 7h3v3h-3z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 7h3v3h-3z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 4h3v3h-3z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4.571 18.001c1.5 0 2.047 -.074 2.958 -.78"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "16",
      "x2": "10",
      "y2": "16.01"
    }, null), _createTextVNode(" ")]);
  }

};