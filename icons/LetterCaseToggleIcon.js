import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'LetterCaseToggleIcon',
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
      "class": "icon icon-tabler icon-tabler-letter-case-toggle",
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
      "cx": "6.5",
      "cy": "15.5",
      "r": "3.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 13h7"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 12v7"
    }, null), _createTextVNode(" ")]);
  }

};