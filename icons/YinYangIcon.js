import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'YinYangIcon',
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
      "class": "icon icon-tabler icon-tabler-yin-yang",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "12",
      "cy": "12",
      "r": "9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "12",
      "cy": "7.5",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "12",
      "cy": "16.5",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode(" ")]);
  }

};