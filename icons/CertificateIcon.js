import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CertificateIcon',
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
      "class": "icon icon-tabler icon-tabler-certificate",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "15",
      "cy": "15",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 17.5v4.5l2 -1.5l2 1.5v-4.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "9",
      "x2": "18",
      "y2": "9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "12",
      "x2": "9",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "15",
      "x2": "8",
      "y2": "15"
    }, null), _createTextVNode(" ")]);
  }

};