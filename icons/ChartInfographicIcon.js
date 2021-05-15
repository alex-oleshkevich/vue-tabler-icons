import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ChartInfographicIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-infographic",
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
      "cy": "7",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 3v4h4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "17",
      "x2": "9",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "17",
      "y1": "14",
      "x2": "17",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "13",
      "x2": "13",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "21",
      "y1": "12",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }

};