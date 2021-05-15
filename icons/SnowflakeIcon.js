import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SnowflakeIcon',
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
      "class": "icon icon-tabler icon-tabler-snowflake",
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
      "d": "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
      "transform": "rotate(60 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
      "transform": "rotate(120 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
      "transform": "rotate(180 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
      "transform": "rotate(240 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 4l2 1l2 -1m-2 -2v6.5l3 1.72",
      "transform": "rotate(300 12 12)"
    }, null), _createTextVNode(" ")]);
  }

};