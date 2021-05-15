import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'HelicopterIcon',
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
      "class": "icon icon-tabler icon-tabler-helicopter",
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
      "d": "M3 10l1 2h6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "9",
      "x2": "13",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5",
      "y1": "6",
      "x2": "20",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 9.1v3.9h5.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "19",
      "x2": "15",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "19",
      "x2": "11",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }

};