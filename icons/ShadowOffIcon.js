import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ShadowOffIcon',
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
      "class": "icon icon-tabler icon-tabler-shadow-off",
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
      "d": "M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 12h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 15h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 18h1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 9h4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 6h1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 3l18 18"
    }, null), _createTextVNode(" ")]);
  }

};