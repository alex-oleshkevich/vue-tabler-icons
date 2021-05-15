import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'GitPullRequestIcon',
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
      "class": "icon icon-tabler icon-tabler-git-pull-request",
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
      "cx": "6",
      "cy": "18",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "6",
      "cy": "6",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "18",
      "cy": "18",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "8",
      "x2": "6",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 6h5a2 2 0 0 1 2 2v8"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "14 9 11 6 14 3"
    }, null), _createTextVNode(" ")]);
  }

};