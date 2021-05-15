import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'FormsIcon',
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
      "class": "icon icon-tabler icon-tabler-forms",
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
      "d": "M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 12h.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 12h.01"
    }, null), _createTextVNode(" ")]);
  }

};