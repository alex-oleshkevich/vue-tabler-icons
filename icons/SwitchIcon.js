import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SwitchIcon',
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
      "class": "icon icon-tabler icon-tabler-switch",
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
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "15 4 19 4 19 8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14.75",
      "y1": "9.25",
      "x2": "19",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5",
      "y1": "19",
      "x2": "9",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "15 19 19 19 19 15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5",
      "y1": "5",
      "x2": "19",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }

};