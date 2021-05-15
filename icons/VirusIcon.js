import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'VirusIcon',
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
      "class": "icon icon-tabler icon-tabler-virus",
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
      "cx": "12",
      "cy": "12",
      "r": "5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(45 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(90 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(135 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(180 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(225 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(270 12 12)"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(315 12 12)"
    }, null), _createTextVNode(" ")]);
  }

};