import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'OldIcon',
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
      "class": "icon icon-tabler icon-tabler-old",
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
      "d": "M11 21l-1 -4l-2 -3v-6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 14l-1 -3l4 -3l3 2l3 .5"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "8",
      "cy": "4",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 17l-2 4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5"
    }, null), _createTextVNode(" ")]);
  }

};