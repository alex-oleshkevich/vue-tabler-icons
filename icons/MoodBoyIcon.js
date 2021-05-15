import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MoodBoyIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-boy",
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
      "d": "M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.5 16a3.5 3.5 0 0 0 5 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8.5 2c1.5 1 2.5 3.5 2.5 5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12.5 2c1.5 2 2 3.5 2 5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "12",
      "x2": "9.01",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "12",
      "x2": "15.01",
      "y2": "12"
    }, null), _createTextVNode(" ")]);
  }

};