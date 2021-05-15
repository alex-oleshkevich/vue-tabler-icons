import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'FileZipIcon',
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
      "class": "icon icon-tabler icon-tabler-file-zip",
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
      "d": "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "5",
      "x2": "10",
      "y2": "5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "7",
      "x2": "12",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "9",
      "x2": "10",
      "y2": "9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "11",
      "x2": "12",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "13",
      "x2": "10",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "15",
      "x2": "12",
      "y2": "15"
    }, null), _createTextVNode(" ")]);
  }

};