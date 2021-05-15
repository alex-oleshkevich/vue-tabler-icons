import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'WindIcon',
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
      "class": "icon icon-tabler icon-tabler-wind",
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
      "d": "M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"
    }, null), _createTextVNode(" ")]);
  }

};