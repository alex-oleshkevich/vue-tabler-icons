import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DiceIcon',
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
      "class": "icon icon-tabler icon-tabler-dice",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "4",
      "y": "4",
      "width": "16",
      "height": "16",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "8.5",
      "cy": "8.5",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "15.5",
      "cy": "8.5",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "15.5",
      "cy": "15.5",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "8.5",
      "cy": "15.5",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode(" ")]);
  }

};