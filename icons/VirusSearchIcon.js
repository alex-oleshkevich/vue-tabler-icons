import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'VirusSearchIcon',
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
      "class": "icon icon-tabler icon-tabler-virus-search",
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
      "d": "M17 12a5 5 0 1 0 -5 5"
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "17.5",
      "cy": "17.5",
      "r": "2.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19.5",
      "y1": "19.5",
      "x2": "22",
      "y2": "22"
    }, null), _createTextVNode(" ")]);
  }

};