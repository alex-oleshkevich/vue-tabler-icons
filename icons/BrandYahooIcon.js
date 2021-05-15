import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrandYahooIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-yahoo",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "6",
      "x2": "8",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "18",
      "x2": "14",
      "y2": "18"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4.5 6l5.5 7v5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 13l6 -5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12.5",
      "y1": "8",
      "x2": "17.5",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "11",
      "x2": "20",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "18",
      "x2": "20",
      "y2": "18.01"
    }, null), _createTextVNode(" ")]);
  }

};