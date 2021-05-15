import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'GitCompareIcon',
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
      "class": "icon icon-tabler icon-tabler-git-compare",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "6",
      "cy": "6",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "18",
      "cy": "18",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 6h5a2 2 0 0 1 2 2v8"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "14 9 11 6 14 3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 18h-5a2 2 0 0 1 -2 -2v-8"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "10 15 13 18 10 21"
    }, null), _createTextVNode(" ")]);
  }

};