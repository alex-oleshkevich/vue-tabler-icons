import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ChartDotsIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-dots",
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
      "d": "M3 3v18h18"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "9",
      "cy": "9",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "19",
      "cy": "7",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "14",
      "cy": "15",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10.16",
      "y1": "10.62",
      "x2": "12.5",
      "y2": "13.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15.088 13.328l2.837 -4.586"
    }, null), _createTextVNode(" ")]);
  }

};