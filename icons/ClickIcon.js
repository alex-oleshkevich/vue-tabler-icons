import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ClickIcon',
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
      "class": "icon icon-tabler icon-tabler-click",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "12",
      "x2": "6",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "12",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7.8",
      "y1": "7.8",
      "x2": "5.6",
      "y2": "5.6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16.2",
      "y1": "7.8",
      "x2": "18.4",
      "y2": "5.6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7.8",
      "y1": "16.2",
      "x2": "5.6",
      "y2": "18.4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 12l9 3l-4 2l-2 4l-3 -9"
    }, null), _createTextVNode(" ")]);
  }

};