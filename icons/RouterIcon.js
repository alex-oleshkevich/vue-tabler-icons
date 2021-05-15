import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RouterIcon',
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
      "class": "icon icon-tabler icon-tabler-router",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "13",
      "width": "18",
      "height": "8",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "17",
      "x2": "17",
      "y2": "17.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "17",
      "x2": "13",
      "y2": "17.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "13",
      "x2": "15",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11.75 8.75a4 4 0 0 1 6.5 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8.5 6.5a8 8 0 0 1 13 0"
    }, null), _createTextVNode(" ")]);
  }

};