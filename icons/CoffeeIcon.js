import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CoffeeIcon',
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
      "class": "icon icon-tabler icon-tabler-coffee",
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
      "d": "M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16.746 16.726a3 3 0 1 0 .252 -5.555"
    }, null), _createTextVNode(" ")]);
  }

};