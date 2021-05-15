import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SortDescending2Icon',
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
      "class": "icon icon-tabler icon-tabler-sort-descending-2",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "5",
      "y": "5",
      "width": "5",
      "height": "5",
      "rx": ".5"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "5",
      "y": "14",
      "width": "5",
      "height": "5",
      "rx": ".5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 15l3 3l3 -3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 18v-12"
    }, null), _createTextVNode(" ")]);
  }

};