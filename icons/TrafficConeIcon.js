import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TrafficConeIcon',
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
      "class": "icon icon-tabler icon-tabler-traffic-cone",
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
      "x1": "4",
      "y1": "20",
      "x2": "20",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9.4",
      "y1": "10",
      "x2": "14.6",
      "y2": "10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7.8",
      "y1": "15",
      "x2": "16.2",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 20l5 -15h2l5 15"
    }, null), _createTextVNode(" ")]);
  }

};