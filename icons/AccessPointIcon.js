import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'AccessPointIcon',
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
      "class": "icon icon-tabler icon-tabler-access-point",
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
      "x1": "12",
      "y1": "12",
      "x2": "12",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14.828 9.172a4 4 0 0 1 0 5.656"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17.657 6.343a8 8 0 0 1 0 11.314"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.168 14.828a4 4 0 0 1 0 -5.656"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6.337 17.657a8 8 0 0 1 0 -11.314"
    }, null), _createTextVNode(" ")]);
  }

};