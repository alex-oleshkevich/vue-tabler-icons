import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'GitBranchIcon',
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
      "class": "icon icon-tabler icon-tabler-git-branch",
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
      "cx": "7",
      "cy": "18",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "7",
      "cy": "6",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "17",
      "cy": "6",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "8",
      "x2": "7",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 18h6a2 2 0 0 0 2 -2v-5"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "14 14 17 11 20 14"
    }, null), _createTextVNode(" ")]);
  }

};