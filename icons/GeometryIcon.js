import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'GeometryIcon',
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
      "class": "icon icon-tabler icon-tabler-geometry",
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
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "12",
      "cy": "7",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 5v-2"
    }, null), _createTextVNode(" ")]);
  }

};