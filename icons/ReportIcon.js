import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ReportIcon',
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
      "class": "icon icon-tabler icon-tabler-report",
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
      "d": "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 14v4h4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 11v-4a2 2 0 0 0 -2 -2h-2"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "8",
      "y": "3",
      "width": "6",
      "height": "4",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "18",
      "cy": "18",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 11h4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 15h3"
    }, null), _createTextVNode(" ")]);
  }

};