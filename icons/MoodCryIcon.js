import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MoodCryIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-cry",
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
      "x1": "9",
      "y1": "10",
      "x2": "9.01",
      "y2": "10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "10",
      "x2": "15.01",
      "y2": "10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.5 15.25a3.5 3.5 0 0 1 5 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222"
    }, null), _createTextVNode(" ")]);
  }

};