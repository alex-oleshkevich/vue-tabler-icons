import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BuildingSkyscraperIcon',
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
      "class": "icon icon-tabler icon-tabler-building-skyscraper",
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
      "y1": "21",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 21v-14l8 -4v18"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 21v-10l-6 -4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "9",
      "x2": "9",
      "y2": "9.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "12",
      "x2": "9",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "15",
      "x2": "9",
      "y2": "15.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "18",
      "x2": "9",
      "y2": "18.01"
    }, null), _createTextVNode(" ")]);
  }

};