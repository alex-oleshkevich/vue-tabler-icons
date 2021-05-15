import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'PresentationIcon',
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
      "class": "icon icon-tabler icon-tabler-presentation",
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
      "y1": "4",
      "x2": "21",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "16",
      "x2": "12",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "20",
      "x2": "15",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 12l3 -3l2 2l3 -3"
    }, null), _createTextVNode(" ")]);
  }

};