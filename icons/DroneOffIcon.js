import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DroneOffIcon',
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
      "class": "icon icon-tabler icon-tabler-drone-off",
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
      "d": "M14 14h-4v-4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 10l-3.5 -3.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 10l3.5 -3.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "17.5",
      "y2": "17.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "14",
      "x2": "6.5",
      "y2": "17.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 14.035a3.5 3.5 0 1 0 3.966 3.965"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }

};